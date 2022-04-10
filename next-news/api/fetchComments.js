import axios from "axios";

export const fetchComments = async (id) =>
  axios.get(`https://api.hnpwa.com/v0/item/${id}.json`).then((res) => res.data);
