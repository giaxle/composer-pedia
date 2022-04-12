import React, { useState, useEffect } from "react";
import ComposerCard from "../components/ComposerCard/ComposerCard";
import ComposerPage from "../components/ComposerPage/ComposerPage";
import API from "../components/API/fetchData";

interface Composer {
  birth: string;
  complete_name: string;
  death: string;
  epoch: string;
  id: number;
  name: string;
  portrait: string;
}

const SearchComposers: React.FC = () => {
  const [composers, setComposers] = useState<any>([]);
  const [selectedComposer, setSelectedComposer] = useState<any>("");
  const [search, setSearch] = useState("");
  const [error, setError] = useState<boolean>(false);

  // const handleChange = (e) => {
  //   setSearch(e.target.value);
  // }

  const handleSubmit = () => {
    API.searchComposers(search).then((data) => {
      if (data.status.success === "false") {
        setError(true);
        return;
      } else {
        setError(false);
        setComposers(data.composers);
      }
    });
  };

  return (
    <>
      {selectedComposer !== "" ? (
        <h1 className="title">{selectedComposer.complete_name}</h1>
      ) : (
        <div className="searchContainer">
          <label>Search Composer</label>
          <input
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search composer here..."
          />
          <button onClick={handleSubmit}>Search</button>
          {error && (
            <div>No composer found. Check your spelling and try again!</div>
          )}
        </div>
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

export default SearchComposers;
