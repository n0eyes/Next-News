import styles from "../styles/Main.module.css";
import useSWR from "swr";
import axios from "axios";
function getFeeds() {
  const { data, error } = useSWR(
    "https://api.hnpwa.com/v0/news/1.json",
    async (url) => await axios.get(url).then((res) => res.data)
  );
  console.log(data);
  return {
    newsFeed: data,
    error,
  };
}

export default function Main() {
  const { newsFeed, error } = getFeeds();
  if (error) return <div>에러</div>;
  if (!newsFeed) return <div>로딩중</div>;
  return <div className={styles.container}>adsdsadsa</div>;
}
