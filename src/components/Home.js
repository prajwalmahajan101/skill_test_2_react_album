import { Link } from "react-router-dom";
import styled from "styled-components";
import { deleteAlbum } from "../api";

const StyledList = styled.ul`
  list-style: none;
  border: 2px solid #e1e1e1;
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const StyledHeading = styled.h1`
  color: red;
  margin: 5px auto;
  font-size: 56px;
  font-weight: bold;
`;

const StyledListItem = styled.li`
  margin: 5px auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledControlsContainer = styled.span`
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Home = (props) => {
  const { albums } = props;
  const handleDelete = async (e) => {
    const id = e.target.getAttribute("id");
    const response = await deleteAlbum(id);
    console.log(response);
    props.onDelete(id);
  };
  return (
    <div>
      <StyledList>
        <StyledHeading>Albums List</StyledHeading>
        {albums.map((el) => {
          return (
            <StyledListItem key={"album-" + el.id}>
              <Link to={"/albums/" + el.id}>{el.title}</Link>
              <StyledControlsContainer>
                <Link to={`/albums/${el.id}/update`}>Update</Link>
                <button id={el.id} onClick={handleDelete}>
                  Delete
                </button>
              </StyledControlsContainer>
            </StyledListItem>
          );
        })}
      </StyledList>
    </div>
  );
};

export default Home;
