import { useState } from "react";

// Api Root Url
const API_ROOT = "https://jsonplaceholder.typicode.com";

// API URLs For fetch the the data
export const API_URLS = {
  albums: () => `${API_ROOT}/albums`,
  albumsOfUser: (userId) => `${API_ROOT}/users/${userId}/albums`,
  createAlbum: () => `${API_ROOT}/albums`,
  albumDetails: (albumId) => `${API_ROOT}/albums/${albumId}`,
  updateAlbum: (albumId) => `${API_ROOT}/albums/${albumId}`,
  deleteAlbum: (albumId) => `${API_ROOT}/albums/${albumId}`,
  photosOfAlbum: (albumId) => `${API_ROOT}/albums/${albumId}/photos`,
};

// Use State to Create a custom Hook for Form Data
export const useFormData = (intialValue) => {
  const [value, setValue] = useState(intialValue);
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return [
    {
      value,
      onChange: handleChange,
    },
    setValue,
  ];
};
