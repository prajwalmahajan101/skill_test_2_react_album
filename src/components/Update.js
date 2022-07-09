// Custom Hook for the input Data
import { useFormData } from "../utils";
// Api Calls
import { detailOfAlbum, updateAlbum } from "../api";
// UseEffect hook
import { useEffect } from "react";
// use Params for getinh the Data form the url
// use NAvigate To redirect
// Form the React Router Dom Libary
import { useParams, useNavigate } from "react-router-dom";

// Styled function form Styled Components
import styled from "styled-components";

// Styled Components
const StyledFormField = styled.div`
  width: 80%;
  margin: 20px auto;
  padding: 20px;
  border: 2px solid #efefef;
  border-radius: 20px;
  disply: flex;
  label {
    font-size: 30px;
    font-weight: bolder;
    display: block;
    margin: 5px;
  }
  input {
    width: 98%;
    height: 30px;
    border: 2px solid #978a8a;
    border-radius: 3px;
    font-size: 25px;
    margin: 5px auto;
  }
`;

const StyledButton = styled.button`
  border: 1px solid black;
  border-radius: 3px;
  color: white;
  background-color: black;
  font-size: 20px;
`;

const FromControls = styled.div`
  margin: 5px;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
`;

// React Function
const Update = (props) => {
  // Navigate Function for Redirecting
  const navigate = useNavigate();
  // State For the input title
  const [title, setTitle] = useFormData("");
  // getting id Form the Url
  const { albumId } = useParams();
  // Geting data about the Album
  useEffect(() => {
    const getdata = async (albumId) => {
      const response = await detailOfAlbum(albumId);
      // Setting the state for th titlebefor edting

      console.log(response); // Logging the Response

      setTitle(response.data.title);
    };
    getdata(albumId);
  }, [albumId, setTitle]);

  // Form Submit HAndler
  const submitHandler = async (e) => {
    e.preventDefault(); // prevent the default Actions
    // Getting the Response
    const response = await updateAlbum(albumId, title.value);
    // Logging the Response
    console.log(response);
    // Sending the Data back to the parent Component
    props.onUpdateSubmit(albumId, title.value);
    // Clearing the Form
    setTitle("");
    // Redirecting to the Home Page
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <StyledFormField>
          <label>Title</label>
          <input {...title} required />
          <FromControls>
            <StyledButton>Update</StyledButton>
          </FromControls>
        </StyledFormField>
      </form>
    </div>
  );
};

export default Update;
