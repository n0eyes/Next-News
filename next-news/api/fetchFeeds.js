import axios from "axios";

export const fetchFeeds = async (category, page) =>
  axios
    .get(`https://api.hnpwa.com/v0/${category}/${page}.json`)
    .then((res) => res.data);
