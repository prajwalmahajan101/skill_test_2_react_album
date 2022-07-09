import { useFormData } from "../utils";
import { detailOfAlbum, updateAlbum } from "../api";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import styled from "styled-components";

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

const Update = (props) => {
  const navigate = useNavigate();
  const [title, setTitle] = useFormData("");
  const { albumId } = useParams();
  useEffect(() => {
    const getdata = async (albumId) => {
      const response = await detailOfAlbum(albumId);
      setTitle(response.data.title);
    };
    getdata(albumId);
  }, [albumId, setTitle]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await updateAlbum(albumId, title.value);
    console.log(response);
    props.onUpdateSubmit(albumId, title.value);
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
            <StyledButton>Update</StyledButton>
          </FromControls>
        </StyledFormField>
      </form>
    </div>
  );
};

export default Update;
