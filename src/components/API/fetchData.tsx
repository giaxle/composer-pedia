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

const fetchComposersByPeriod = async (period: string): Promise<any> => {
  try {
    const { data } = await axios.get(
      `https://api.openopus.org/composer/list/epoch/${period}.json`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchComposerWorks = async (id: number): Promise<any> => {
  try {
    const { data } = await axios.get(
      `https://api.openopus.org/work/list/composer/${id}/genre/Popular.json`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

const searchComposers = async (search: string): Promise<any> => {
  try {
    const { data } = await axios.get(
      `https://api.openopus.org/composer/list/search/${search}.json`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

// const youtubeSearch = async (search: string): Promise<any> => {
//   try {
//     const { data } = await axios.get(
//       `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search}&key=${process.env.REACT_APP_YOUTUBE_KEY}`
//     );

//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

export default {
  fetchPopularComposers,
  fetchComposersByPeriod,
  searchComposers,
  fetchComposerWorks,
};
