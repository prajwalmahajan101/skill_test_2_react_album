import { useEffect, useState } from "react";
import { getAllAlbums } from "../api";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import CreateAlbum from "./CreateAlbum";
import Update from "./Update";
import AlbumDetail from "./AlbumDetail";
import Navbar from "./Navbar";

function App() {
  const [Albums, setAlbums] = useState([]);
  useEffect(() => {
    const getAlbums = async () => {
      const response = await getAllAlbums();
      setAlbums(response.data);
    };
    getAlbums();
  }, []);

  const createAlbumHandler = (newAlbum) => {
    console.log(newAlbum);
    setAlbums((prevState) => {
      console.log(prevState);
      return [newAlbum, ...prevState];
    });
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route extact path="/" element={<Home albums={Albums} />}></Route>
        <Route
          extact
          path="/create-album"
          element={<CreateAlbum onCreateAlbum={createAlbumHandler} />}
        ></Route>
        <Route extact path="/albums/:albumId" element={<AlbumDetail />}></Route>
        <Route
          extact
          path="/albums/:albumId/update"
          element={<Update />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
