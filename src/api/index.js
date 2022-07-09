import { API_URLS } from "../utils";

// Custom Fetch Function to be use in other Fetch Function
const customfetch = async (url, { body, ...customConfig }) => {
  const headers = {
    "content-type": "application/json",
    Accept: "application/json",
  };
  const config = {
    ...customConfig,
    header: {
      ...headers,
      ...customConfig.headers,
    },
  };
  if (body) {
    // config.body = JSON.stringify(body);
    config.body = body;
  }
  try {
    const response = await fetch(url, config);
    const data = await response.json();
    return {
      data,
      success: true,
    };
  } catch (err) {
    console.log("Error will fetching Data", err);
    return {
      message: "error while fetching",
      success: false,
    };
  }
};

// Get All Albums For The home Page
export const getAllAlbums = () => {
  const url = API_URLS.albums();
  const method = "GET";
  return customfetch(url, { method });
};

// Get All the Photos in the Album for the Album Detail Page
export const getPhoto = (albumId) => {
  const url = API_URLS.photosOfAlbum(albumId);
  const method = "GET";
  return customfetch(url, { method });
};

// Create A new Album For the Create Album Page
export const createAlbum = (title) => {
  const url = API_URLS.createAlbum();
  const method = "POST";
  const body = "title=" + title + "&userId=" + 1;
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  };

  return customfetch(url, { body, method, headers });
};

// Delete a Album For the Home Page
export const deleteAlbum = (id) => {
  const url = API_URLS.deleteAlbum(id);
  const method = "DELETE";
  return customfetch(url, { method });
};

// Details of Album for Update Page
export const detailOfAlbum = (id) => {
  const url = API_URLS.albumDetails(id);
  const method = "GET";
  return customfetch(url, { method });
};

// Update A Album for Update Page
export const updateAlbum = (id, title) => {
  const url = API_URLS.updateAlbum(id);
  const method = "PUT";
  const body = "title=" + title + "&userId=" + 1;
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  };
  return customfetch(url, { body, method, headers });
};
