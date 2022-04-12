import React, { useState, useEffect } from "react";
import API from "../components/API/fetchData";
import ComposerCard from "../components/ComposerCard/ComposerCard";
import ComposerPage from "../components/ComposerPage/ComposerPage";

interface Composer {
  birth: string;
  complete_name: string;
  death: string;
  epoch: string;
  id: number;
  name: string;
  portrait: string;
}

const ComposersByPeriod: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<string>("");
  const [composers, setComposers] = useState<any>([]);
  const [selectedComposer, setSelectedComposer] = useState<any>("");

  const handlePeriodChange = (period: string) => {
    setSelectedPeriod(period);
  };

  useEffect(() => {
    API.fetchComposersByPeriod(selectedPeriod).then((data) => {
      setComposers(data.composers);
    });
  }, [selectedPeriod]);
  return (
    <>
      {selectedComposer !== "" ? (
        <h1 className="title">{selectedComposer.complete_name}</h1>
      ) : (
        <div className="dropDownMenuContainer">
          <select
            className="dropDownMenu"
            value={selectedPeriod}
            onChange={(e) => handlePeriodChange(e.target.value)}
          >
            <option value="">Choose Period</option>
            <option value="Medieval">Medieval</option>
            <option value="Renaissance">Renaissance</option>
            <option value="Baroque">Baroque</option>
            <option value="Classical">Classical</option>
            <option value="Early Romantic">Early Romantic</option>
            <option value="Romantic">Romantic</option>
            <option value="Late Romantic">Late Romantic</option>
            <option value="20th Century">20th Century</option>
            <option value="Post-War">Post-War</option>
            <option value="21st Century">21st Century</option>
          </select>
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

export default ComposersByPeriod;
