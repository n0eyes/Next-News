import useSWR from "swr";
import axios from "axios";
import Layout from "../components/common/Layout";
import Feed from "../components/common/Feed";
export default function Main() {
  const { data, error } = useSWR(
    "https://api.hnpwa.com/v0/news/1.json",
    async (url) =>
      await axios.get(url).then((res) => {
        console.log(res.data);
        return res.data;
      })
  );
  console.log(data);
  if (error) return <div>에러</div>;
  if (!data) return <div>로딩중</div>;
  return (
    <Layout>
      <Feed />
    </Layout>
  );
}
