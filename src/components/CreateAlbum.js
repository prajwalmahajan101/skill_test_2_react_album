import { useFormData } from "../utils";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { createAlbum } from "../api";

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

const CreateAlbum = (props) => {
  const [title, setTitle] = useFormData("");
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await createAlbum(title.value);
    props.onCreateAlbum(response.data);
    setTitle("");
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
