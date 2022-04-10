import React from "react";
import Link from "next/link";
import styled from "styled-components";
export default function Feed({ feed, index }) {
  return (
    <StyledFeed>
      <div>{index}.</div>
      <StyledInfo>
        <StyledMainInfo>
          <Link href={feed.url}>
            <a>{feed.title}</a>
          </Link>
          {feed.domain && (
            <span>
              (
              {
                <Link href={feed.url}>
                  <a>{feed.domain}</a>
                </Link>
              }
              )
            </span>
          )}
        </StyledMainInfo>
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
      </StyledInfo>
    </StyledFeed>
  );
  j;
}

const StyledFeed = styled.div`
  display: flex;
  width: 100%;
  background-color: rgb(246, 246, 239);
  padding: 0 0.5rem;

  & > div:first-child {
    width: 2rem;
    color: #828282;
    text-align: center;
    flex-shrink: 0;
  }
`;

const StyledInfo = styled.div`
  padding-left: 0.5rem;
`;

const StyledMainInfo = styled.div`
  span {
    font-size: 0.8rem;
    color: #828282;
  }
`;
const StyledSubInfo = styled.div`
  min-height: 0.6rem;
  line-height: 2rem;
  color: #828282;
  a {
    display: inline-block;
  }
`;
