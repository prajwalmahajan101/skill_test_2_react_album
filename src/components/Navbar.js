import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  font-size: 20px;
  background-color: black;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledList = styled.ul`
  display: flex;
  width: 100vw;
  flex-direction: row;
  justify-content: space-around;

  li {
    list-style-type: none;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Navbar = () => {
  return (
    <StyledNav>
      <StyledList>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/create-album">Create Album</StyledLink>
        </li>
      </StyledList>
    </StyledNav>
  );
};

export default Navbar;
