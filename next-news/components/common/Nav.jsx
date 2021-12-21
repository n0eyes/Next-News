import Link from "next/link";
import styled from "styled-components";
function Nav() {
  return (
    <StyledNav>
      <span>SY</span>
      <div>
        <Link href="/">
          <StyledHomeNav>Hacker News</StyledHomeNav>
        </Link>
        <StyledRestNav>
          <Link href="/newest">
            <a>new</a>
          </Link>
          <Link href="/ask">
            <a>ask</a>
          </Link>
          <Link href="/show">
            <a>show</a>
          </Link>
          <Link href="/jobs">
            <a>jobs</a>
          </Link>
        </StyledRestNav>
      </div>
    </StyledNav>
  );
}
export default Nav;

const StyledNav = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  background-color: #ff6600;
  padding: 5px;
  box-sizing: border-box;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  a {
    display: block;
  }
  span {
    border: 1px solid white;
    color: white;
    font-weight: bold;
    margin-right: 5px;
    padding: 2px;
  }
  & > div {
    width: 100%;
    display: flex;
    align-items: center;
  }
`;
const StyledHomeNav = styled.a`
  font-weight: bold;
  flex-basis: 105px;
  flex-shrink: 0;
  cursor: pointer;
`;
const StyledRestNav = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  a {
    border-right: 1px solid black;
    width: 50px;
    text-align: center;
  }
  a:nth-child(4) {
    border: none;
  }
`;
