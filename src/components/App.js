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
    setAlbums((prevState) => {
      return [newAlbum, ...prevState];
    });
  };

  const deleteAlbumHandler = (id) => {
    id = parseInt(id);
    setAlbums((prevState) => {
      const new_album = prevState.filter((el) => {
        return el.id !== id;
      });
      return new_album;
    });
  };

  const updateAlbumHandler = (id, title) => {
    id = parseInt(id);
    setAlbums((prevState) => {
      const updatedList = prevState.map((el) => {
        if (el.id === id) {
          el.title = title;
        }
        return el;
      });
      return updatedList;
    });
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          extact
          path="/"
          element={<Home albums={Albums} onDelete={deleteAlbumHandler} />}
        ></Route>
        <Route
          extact
          path="/create-album"
          element={<CreateAlbum onCreateAlbum={createAlbumHandler} />}
        ></Route>
        <Route extact path="/albums/:albumId" element={<AlbumDetail />}></Route>
        <Route
          extact
          path="/albums/:albumId/update"
          element={<Update onUpdateSubmit={updateAlbumHandler} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
