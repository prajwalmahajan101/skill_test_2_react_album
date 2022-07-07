import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPhoto } from "../api/index";
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

  return (
    <div>
      Album Detail
      <div>
        {photos.map((el) => {
          return formatePhoto(el);
        })}
      </div>
    </div>
  );
};

export default AlbumDetail;

const formatePhoto = (el) => {
  return (
    <div key={el.id}>
      <img alt={el.title} src={el.thumbnailUrl} />
      <h1>{el.title}</h1>
    </div>
  );
};
