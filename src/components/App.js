import { useEffect, useState } from "react";
import { getAllAlbums } from "../api";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import CreateAlbum from "./CreateAlbum";
import Update from "./Update";
import AlbumDetail from "./AlbumDetail";
import Navbar from "./Navbar";

function App() {
  // State Of the Albums List
  const [Albums, setAlbums] = useState([]);
  // All the Albums
  useEffect(() => {
    const getAlbums = async () => {
      const response = await getAllAlbums();

      console.log(response); // Logging the Response

      setAlbums(response.data);
    };
    getAlbums();
  }, []);

  // Add the new Album the The State
  const createAlbumHandler = (newAlbum) => {
    setAlbums((prevState) => {
      return [newAlbum, ...prevState];
    });
  };

  // Remove the Album from the State
  const deleteAlbumHandler = (id) => {
    id = parseInt(id);
    setAlbums((prevState) => {
      const new_album = prevState.filter((el) => {
        return el.id !== id;
      });
      return new_album;
    });
  };
  //  Update the Album in the State
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
      {/* Navabr Component */}
      <Navbar />
      {/* compnent for path "/"  ==> Home */}
      <Routes>
        <Route
          extact
          path="/"
          element={<Home albums={Albums} onDelete={deleteAlbumHandler} />}
        ></Route>
        {/* compnent for path "/create-album"  ==> Create Album */}
        <Route
          extact
          path="/create-album"
          element={<CreateAlbum onCreateAlbum={createAlbumHandler} />}
        ></Route>
        {/* compnent for path "/albums/(id)"  ==> Album Details */}
        <Route extact path="/albums/:albumId" element={<AlbumDetail />}></Route>
        {/* compnent for path "/albums/(id)/update"  ==> Album Updates */}
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
