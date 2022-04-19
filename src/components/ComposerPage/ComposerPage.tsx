import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import style from "./composerpage.module.scss";
import API from "../API/fetchData";
import backIcon from "../../assets/icons/back-icon.svg";
import { stringify } from "querystring";

interface Composer {
  birth: string;
  complete_name: string;
  death: string;
  epoch: string;
  id: number;
  name: string;
  portrait: string;
}

interface Work {
  title: string;
  id: number;
}

interface Props {
  selectedComposer: Composer;
  setSelectedComposer: Dispatch<SetStateAction<any>>;
}

const ComposerPage: React.FC<Props> = ({
  selectedComposer,
  setSelectedComposer,
}) => {
  const [works, setWorks] = useState<any>();
  const [link, setLink] = useState<string>("");

  const date = (date: string) => {
    if (date === null) {
      return "Present";
    }
    return date.split("-")[0];
  };

  const getSearchQuery = (search: string) => {
    const query = search.split(" ").join("+");
    return query;
  };

  useEffect(() => {
    API.fetchComposerWorks(selectedComposer.id).then((data) => {
      setWorks(data.works);
    });
  }, []);
  return (
    <div className={style.composerPage}>
      <button
        className={style.composerPageBackBtn}
        onClick={() => {
          setSelectedComposer("");
        }}
      >
        <img src={backIcon} />
      </button>
      <img
        className={style.composerPageImg}
        src={selectedComposer.portrait}
        alt={selectedComposer.portrait}
      />
      <div>Alias(s): {selectedComposer.name}</div>
      <div>Period: {selectedComposer.epoch}</div>
      <div>
        {date(selectedComposer.birth)} --- {date(selectedComposer.death)}
      </div>
      <hr />
      <div>Popular Works:</div>
      {works ? (
        <div className={style.composerPageWorks}>
          {works.map((work: Work) => {
            return (
              <div className={style.composerPageWork} key={work.id}>
                <a
                  href={`https://www.youtube.com/results?search_query=${getSearchQuery(
                    work.title
                  )}`}
                  target="_blank"
                >
                  {work.title}
                </a>
              </div>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ComposerPage;
