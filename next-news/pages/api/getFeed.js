import axios from "axios";
import useSWR from "swr";

function getFeed(category, page) {
  const { data, error } = useSWR(
    `https://api.hnpwa.com/v0/${category}/${page}.json`,
    async (url) => await axios.get(url).then((res) => res.data)
  );
  return { data, error };
}

export default getFeed;
