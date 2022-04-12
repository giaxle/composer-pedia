import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PopularComposers from "./components/PopularComposers";
import ComposerByPeriod from "./components/ComposersByPeriod";
import SearchComposers from "./components/SearchComposers";
import NavBar from "./components/NavBar";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<PopularComposers />} />
          <Route path="period" element={<ComposerByPeriod />} />
          <Route path="search" element={<SearchComposers />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
