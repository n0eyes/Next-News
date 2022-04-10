import React from "react";
import Feed from "./Feed";
export default function Page({ feeds = [], pageIndex }) {
  return feeds.map((feed, i) => (
    <Feed feed={feed} key={feed.id} index={i + 1 + (pageIndex - 1) * 30} />
  ));
}
