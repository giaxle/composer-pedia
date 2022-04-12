import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("");

  return (
    <div className="navbarWrapper">
      <div className="navbar">
        <Link className="tab" to="/">
          <button
            className={activeTab === "popular" ? "tab activeTab" : "tab"}
            onClick={() => {
              setActiveTab("popular");
            }}
          >
            Popular
          </button>
        </Link>
        <Link className="tab" to="period">
          <button
            className={activeTab === "period" ? "tab activeTab" : "tab"}
            onClick={() => {
              setActiveTab("period");
            }}
          >
            By Period
          </button>
        </Link>
        <Link className="tab" to="search">
          <button
            className={activeTab === "search" ? "tab activeTab" : "tab"}
            onClick={() => {
              setActiveTab("search");
            }}
          >
            Search
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
