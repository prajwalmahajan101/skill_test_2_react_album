import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style: none;
  border: 2px solid #e1e1e1;
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: around;
`;

const StyledHeading = styled.h1`
  color: red;
  margin: 5px auto;
  font-size: 56px;
  font-weight: bold;
`;

const StyledListItem = styled.li`
  margin: 5px auto;
`;

const Home = (props) => {
  const { albums } = props;
  return (
    <div>
      <StyledList>
        <StyledHeading>Albums List</StyledHeading>
        {albums.map((el) => {
          return (
            <StyledListItem key={"album-" + el.id}>
              <Link to={"/albums/" + el.id}>{el.title}</Link>
            </StyledListItem>
          );
        })}
      </StyledList>
    </div>
  );
};

export default Home;
