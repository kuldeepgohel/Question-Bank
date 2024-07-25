import React, { useEffect, useState } from "react";
import "./SinglePost.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


const SinglePost = () => {
  const { postID } = useParams();
  const [post, setPost] = useState();
  const navigate = useNavigate();
  
  const BACKEND_URL = import.meta.env.VITE_APP_BACKENDURL;
  const getPosts = async () => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/getsinglepost?postID=${postID}`
      );
      setPost(response.data.responseData);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);

  const deletePost = async () => {
    try {
      const response = await axios.delete(
        `${BACKEND_URL}/deletepost?postID`,
        {
          data: {
            postID,
          },
        }
      );
      if (response.data.responseData) {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="single-post">
        <h1>{post?.topic}</h1>
        <p className="question">{post?.question}</p>
        <p>{post?.answer}</p>
        <button className="delete" onClick={deletePost}>
          Delete
        </button>
        <button className="edit" onClick={()=>navigate(`/updatepost/${postID}`)}>Update</button>
      </div>
    </>
  );
};

export default SinglePost;
