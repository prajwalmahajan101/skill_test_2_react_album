import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPhoto } from "../api/index";

import styled from "styled-components";

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

const AlbumDetail = (props) => {
  const [photos, setPhotos] = useState([]);
  const { albumId } = useParams();
  useEffect(() => {
    const getAllPhotos = async (albumId) => {
      const response = await getPhoto(albumId);
      setPhotos(response.data);
    };

    getAllPhotos(albumId);
  }, [albumId]);

  const imgClickHandler = () => {};
  const formatePhoto = (el) => {
    return (
      <StyledDiv key={el.id}>
        <img alt={el.title} onClick={imgClickHandler} src={el.thumbnailUrl} />
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
