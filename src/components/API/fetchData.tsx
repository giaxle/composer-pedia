import axios from "axios";
import React from "react";

const fetchPopularComposers = async (): Promise<any> => {
  try {
    const { data } = await axios.get(
      "https://api.openopus.org/composer/list/pop.json"
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchComposersByPeriod = async (period: string) => {
  try {
    const { data } = await axios.get(
      `https://api.openopus.org/composer/list/epoch/${period}.json`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchComposerWorks = async (id: number) => {
  try {
    const { data } = await axios.get(
      `https://api.openopus.org/work/list/composer/${id}/genre/Popular.json`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

const searchComposers = async (search: string) => {
  try {
    const { data } = await axios.get(
      `https://api.openopus.org/composer/list/search/${search}.json`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

// const youtubeSearch = () => {
//   try { }
// }

export default {
  fetchPopularComposers,
  fetchComposersByPeriod,
  searchComposers,
  fetchComposerWorks,
};
