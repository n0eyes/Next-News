import React from "react";
import styled from "styled-components";
import Link from "next/dist/client/link";
export default function FeedBody({ feed }) {
  return (
    <StyledFeedBody>
      <div>{feed.title}</div>
      <StyledSubInfo>
        <span>{feed.points} points </span>
        <span>by {feed.user} </span>
        <span>{feed.time_ago} </span>
        {feed.comments_count ? (
          <Link href={`/item?id=${feed.id}`}>
            <a> | {feed.comments_count} comments </a>
          </Link>
        ) : null}
      </StyledSubInfo>
      <StyledContent
        dangerouslySetInnerHTML={{ __html: feed?.content }}
      ></StyledContent>
    </StyledFeedBody>
  );
}

const StyledFeedBody = styled.div`
  width: 100%;

  div:first-child {
    font-weight: bold;
  }
`;

const StyledSubInfo = styled.div`
  min-height: 0.6rem;
  line-height: 2rem;
  font-size: 0.8rem;
  color: #828282;
  a {
    display: inline-block;
  }
`;
const StyledContent = styled.div`
  width: 100%;
  font-size: 0.9rem;
  line-height: 1.4rem;
  p {
    margin: 1rem 0;
  }
`;
