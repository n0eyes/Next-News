import Footer from "./Footer";
import Nav from "./Nav";
import Main from "./Main";
import styled from "styled-components";
function Layout({ children }) {
  return (
    <StyledLayout>
      <StyledBoard>
        <Nav />
        <Main>{children}</Main>
        <Footer />
      </StyledBoard>
    </StyledLayout>
  );
}

export default Layout;

const StyledLayout = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 5% 5%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
const StyledBoard = styled.div`
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
`;
