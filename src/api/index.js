import { API_URLS } from "../utils";

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

export const getAllAlbums = () => {
  const url = API_URLS.albums();
  const method = "GET";
  return customfetch(url, { method });
};

export const getPhoto = (albumId) => {
  const url = API_URLS.photosOfAlbum(albumId);
  const method = "GET";
  return customfetch(url, { method });
};

export const createAlbum = (title) => {
  const url = API_URLS.createAlbum();
  const method = "POST";
  const body = "title=" + title + "&userId=" + 1;
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  };

  return customfetch(url, { body, method, headers });
};
