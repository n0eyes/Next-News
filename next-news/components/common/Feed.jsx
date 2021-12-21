import React from "react";
import Link from "next/link";
import styled from "styled-components";
export default function Feed({ feed, index }) {
  return (
    <StyledFeed>
      <div>{index}</div>
      <StyledInfo>
        <StyledMainInfo>
          <Link href={feed.url}>
            <a>{feed.title}</a>
          </Link>
          <span>
            (
            {
              <Link href={feed.url}>
                <a>{feed.domain}</a>
              </Link>
            }
            )
          </span>
        </StyledMainInfo>
        <StyledSubInfo>
          <span>{feed.points} points </span>
          <span>by {feed.user} </span>
          <span>{feed.time_ago} </span>
          <span> | {feed.comments_count} comments </span>
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

  & > div:first-child {
    width: 30px;
    color: #828282;
    text-align: center;
    flex-shrink: 0;
  }
`;

const StyledInfo = styled.div``;

const StyledMainInfo = styled.div`
  span {
    margin-left: 3px;
    font-size: 0.8rem;
    color: #828282;
  }
`;
const StyledSubInfo = styled.div`
  height: 30px;
  line-height: 30px;
  color: #828282;
  font-size: 0.8rem;
`;
