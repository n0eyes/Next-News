import React from "react";
import styled from "styled-components";

export default function FeedComment({ comment }) {
  return (
    <StyledFeedComment level={comment.level}>
      <StyledSubInfo>
        <span>{comment.user} </span>
        <span>{comment.time_ago} </span>
        {comment.level && <a href="#top"> parent</a>}
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
  border-left: 2px solid rgba(130, 130, 130, 0.5);
  padding-left: 10px;
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
  line-height: 22px;
  p {
    margin: 15px 0;
  }
`;