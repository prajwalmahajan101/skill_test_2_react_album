// Custom Hook For the For Input
import { useFormData } from "../utils";
// Styled function From the Styled Component Libary
import styled from "styled-components";
// use Navigate Function formt React Router Dom to rediect After submi of Form
import { useNavigate } from "react-router-dom";
// Create Album Fect Fuction From the API
import { createAlbum } from "../api";

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

// React function
const CreateAlbum = (props) => {
  // title State
  const [title, setTitle] = useFormData("");
  // navigate fuction
  const navigate = useNavigate();
  // submit Handler function
  const submitHandler = async (e) => {
    // Prevent the Submit for the normal way
    e.preventDefault();
    // call for the create Album
    const response = await createAlbum(title.value);
    // Sending the response Back to the parent Component

    console.log(response); // Logging the Response

    props.onCreateAlbum(response.data);
    // Clearing the Form
    setTitle("");
    // Redirecting
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <StyledFormField>
          <label>Title</label>
          <input {...title} required />
          <FromControls>
            <StyledButton>Create</StyledButton>
          </FromControls>
        </StyledFormField>
      </form>
    </div>
  );
};

export default CreateAlbum;
