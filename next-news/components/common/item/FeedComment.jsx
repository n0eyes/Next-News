import React from "react";
import styled from "styled-components";

export default function FeedComment({ info }) {
  const { parent, comment } = info;

  return (
    <StyledFeedComment level={comment.level}>
      <StyledSubInfo>
        <span>
          <a id={comment.id}>{comment.user} </a>
        </span>
        <span> {comment.time_ago} </span>
        {comment.level ? <a href={`#${parent}`}>| parent</a> : null}
      </StyledSubInfo>
      <StyledContent
        dangerouslySetInnerHTML={{ __html: comment.content }}
      ></StyledContent>
    </StyledFeedComment>
  );
}
const StyledFeedComment = styled.div`
  width: 100%;
  margin-left: ${({ level }) => `${level * 20}px`};
  padding-right: ${({ level }) => `${level * 20}px`};
  border-left: 2px solid rgba(130, 130, 130, 0.5);
  padding-left: 0.6rem;

  @media (max-width: 768px) {
    margin-left: ${({ level }) => `${level * 15}px`};
    padding-right: ${({ level }) => `${level * 15}px`};
  }
  @media (max-width: 360px) {
    margin-left: ${({ level }) => `${level * 10}px`};
    padding-right: ${({ level }) => `${level * 10}px`};
  }
`;
const StyledSubInfo = styled.div`
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
    overflow-wrap: break-word;
  }
`;
