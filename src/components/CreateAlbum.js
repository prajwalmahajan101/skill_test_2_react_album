import { useFormData } from "../utils";
import styled from "styled-components";

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

const CreateAlbum = (props) => {
  const title = useFormData("");
  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await createAlbum(title.value);
    props.onCreateAlbum(response.data);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <StyledFormField>
          <label>Title</label>
          <input {...title} />
        </StyledFormField>
      </form>
    </div>
  );
};

export default CreateAlbum;
