// Hooks Form the React Libary
import { useEffect, useState } from "react";
// useParams Hook Form react Router Dom Libary
import { useParams } from "react-router-dom";
// fecth Funtion form apis
import { getPhoto } from "../api/index";
// Styled function from Styled componets Libary
import styled from "styled-components";

// Styled Components
const StyledDiv = styled.div`
  border: 2px solid #e1e1e1;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  margin: 5px;
  img {
    width: 150px;
    height: 150px;
    border-radius: 3px;
  }
  h1 {
    padding: 15px;
    text-align: center;
  }
`;

const StyledHeading = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  font-size: 56px;
  font-weight: bolder;
`;

// React Function
const AlbumDetail = (props) => {
  // State ofthe List of the Photos
  const [photos, setPhotos] = useState([]);
  // get params From the Url
  const { albumId } = useParams();
  // To get the List Of the Photos populated for the First time
  // changes only if the albumId changes hence add it to Dependency Array
  useEffect(() => {
    const getAllPhotos = async (albumId) => {
      // Call For the APi response
      const response = await getPhoto(albumId);

      // Logging the Response
      console.log(response);

      setPhotos(response.data);
    };

    getAllPhotos(albumId);
  }, [albumId]);

  // Foramt the item in the Photos list into a JSX Element
  const formatePhoto = (el) => {
    return (
      <StyledDiv key={el.id}>
        <img alt={el.title} src={el.thumbnailUrl} />
        <h1>{el.title}</h1>
      </StyledDiv>
    );
  };

  return (
    <div>
      {photos.length === 0 && (
        <StyledHeading>There are No Images in this Album</StyledHeading>
      )}

      {photos.map((el) => {
        return formatePhoto(el);
      })}
    </div>
  );
};

export default AlbumDetail;
