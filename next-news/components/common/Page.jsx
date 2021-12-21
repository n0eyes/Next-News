import React from "react";
import getFeed from "../../pages/api/getFeed";
import Feed from "./Feed";

export default function Page({ pageIndex, category }) {
  // const { category } = query;
  const { data, error } = getFeed(category ? category[0] : "news", pageIndex);

  if (error) return <div>에러</div>;
  if (!data) return <div>로딩중</div>;
  return data.map((feed, i) => (
    <Feed feed={feed} key={feed.id} index={i + 1 + (pageIndex - 1) * 30} />
  ));
}
