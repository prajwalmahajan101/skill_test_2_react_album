import { useState } from "react";

const API_ROOT = "https://jsonplaceholder.typicode.com";

export const API_URLS = {
  albums: () => `${API_ROOT}/albums`,
  albumsOfUser: (userId) => `${API_ROOT}/users/${userId}/albums`,
  createAlbum: () => `${API_ROOT}/albums`,
  updateAlbum: (albumId) => `${API_ROOT}/albums/${albumId}`,
  deleteAlbum: (albumId) => `${API_ROOT}/albums/${albumId}`,
  photosOfAlbum: (albumId) => `${API_ROOT}/albums/${albumId}/photos`,
};

export const useFormData = (intialValue) => {
  const [value, setValue] = useState(intialValue);
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleChange,
  };
};
