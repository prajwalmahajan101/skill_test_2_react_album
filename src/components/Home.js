// Link Component Form the React Router Dom Libary
import { Link } from "react-router-dom";
// Stlyled Function from  the Styled Component Libary
import styled from "styled-components";
// api Call form the Apis
import { deleteAlbum } from "../api";

// Styled Components
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

// React function
const Home = (props) => {
  // Getting the Albums List form the Props
  const { albums } = props;
  // Handle Delete Button Click
  const handleDelete = async (e) => {
    // Getting the Id of the Album
    const id = e.target.getAttribute("id");
    // Getting the Response From the APi Server
    const response = await deleteAlbum(id);
    // Logging the Response
    console.log(response);
    // sending the Data Back to the Parent Component
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
