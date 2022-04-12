import React, { useState, useEffect } from "react";
import API from "./API/fetchData";
import ComposerCard from "./ComposerCard/ComposerCard";
import ComposerPage from "./ComposerPage/ComposerPage";

interface Composer {
  birth: string;
  complete_name: string;
  death: string;
  epoch: string;
  id: number;
  name: string;
  portrait: string;
}

const PopularComposers: React.FC = () => {
  const [composers, setComposers] = useState<any>([]);
  const [selectedComposer, setSelectedComposer] = useState<any>("");
  useEffect(() => {
    API.fetchPopularComposers().then((data) => {
      setComposers(data.composers);
    });
  }, []);

  return (
    <>
      {selectedComposer !== "" ? (
        <h1 className="title">{selectedComposer.complete_name}</h1>
      ) : (
        <h1 className="title">Popular Composers</h1>
      )}

      {selectedComposer === "" ? (
        <div className="composersContainer">
          {composers.map((composer: Composer) => {
            return (
              <ComposerCard
                composer={composer}
                key={composer.id}
                setSelectedComposer={setSelectedComposer}
              />
            );
          })}
        </div>
      ) : (
        <ComposerPage
          selectedComposer={selectedComposer}
          setSelectedComposer={setSelectedComposer}
        />
      )}
    </>
  );
};

export default PopularComposers;
