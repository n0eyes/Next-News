import axios from "axios";
import useSWR from "swr";

//undefined 방지
const getFeedComments = (id = 0) => {
  const { data, error } = useSWR(
    `https://api.hnpwa.com/v0/item/${id}.json`,
    async (url) => axios.get(url).then((res) => res.data)
  );
  return { data, error };
};

export default getFeedComments;
