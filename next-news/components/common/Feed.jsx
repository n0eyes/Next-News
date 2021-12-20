import React from "react";
import Link from "next/link";
import styled from "styled-components";
export default function Feed() {
  return (
    <StyledFeed>
      <div>1.</div>
      <StyledInfo>
        <StyledMainInfo>
          <Link href="/">
            <a>title</a>
          </Link>
          <span>({<a>url</a>})</span>
        </StyledMainInfo>
        <StyledSubInfo>정보정보정보</StyledSubInfo>
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
  }
`;

const StyledInfo = styled.div``;

const StyledMainInfo = styled.div`
  span {
    margin-left: 3px;
  }
  span > a {
    color: #828282;
    font-size: 0.8rem;
  }
`;
const StyledSubInfo = styled.div`
  height: 30px;
  line-height: 30px;
  color: #828282;
  font-size: 0.8rem;
`;
