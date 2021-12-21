import React from "react";
import styled from "styled-components";
export default function Main({ children }) {
  return <StyledMain>{children}</StyledMain>;
}

const StyledMain = styled.div`
  width: 100%;
  padding: 10px;
  background-color: rgb(246, 246, 239);
`;
