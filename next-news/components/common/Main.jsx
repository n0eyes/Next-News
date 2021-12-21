import React from "react";
import styled from "styled-components";
export default function Main({ children }) {
  return <StyledMain>{children}</StyledMain>;
}

const StyledMain = styled.div`
  width: 100%;
  padding: 10px 0;
  background-color: rgb(246, 246, 239);
  border-bottom: 2px solid #ff6600;
`;
