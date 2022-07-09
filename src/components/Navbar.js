// Link Component Form the Router Dom Libary
import { Link } from "react-router-dom";
// Styled fuction From the Styled Component Libary
import styled from "styled-components";

// Styled Components
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

// React Function
const Navbar = () => {
  return (
    <StyledNav>
      <StyledList>
        <li>
          {/* Link To the Home Page */}
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          {/* Link to the Create Album Page */}
          <StyledLink to="/create-album">Create Album</StyledLink>
        </li>
      </StyledList>
    </StyledNav>
  );
};

export default Navbar;
