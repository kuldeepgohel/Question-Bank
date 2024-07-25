import React, { useState, useEffect } from "react";
import "./CreatePost.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const CreatePost = () => {
  const [topic, setTopic] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const navigat = useNavigate();
  const { postID } = useParams();
  const BACKEND_URL = import.meta.env.VITE_APP_BACKENDURL;

  const getPosts = async () => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/getsinglepost?postID=${postID}`
      );
      const post = response.data.responseData;
      setTopic(post?.topic);
      setQuestion(post?.question);
      setAnswer(post?.answer);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if(postID){
    getPosts();
    }
  }, []);

  const create = () =>
    toast.success("Question Posted Successfully!!", {
      position: "bottom-right",
      theme: "dark",
    });
  const update = () =>
    toast("Question Update SuccessFully!!", {
      position: "bottom-right",
      theme: "dark",
    });
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (postID) {
        const response = await axios.put(
          `${BACKEND_URL}/updatepost`,
          {
            postID,
            topic,
            question,
            answer,
          }
        );
        if (response?.data?.responseData) {
          navigat(`/singlepost/${postID}`);
        }
      } else {
        const response = await axios.post(
          `${BACKEND_URL}/createpost`,
          {
            topic,
            question,
            answer,
          }
        );
        if (response?.data.responseData) {
          navigat("/");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="create-post-container">
      <h2>{postID ? "Update Post" : "Create a New Post"}</h2>
      <form onSubmit={handleSubmit} className="create-post-form">
        <div className="form-group">
          <label htmlFor="topic">Topic:</label>
          <input
            type="text"
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="question">Question:</label>
          <textarea
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="answer">Answer:</label>
          <textarea
            id="answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          onClick={postID ? update : create}
          className="submit-btn"
        >
          {postID ? "Update Post" : "Create Post"}
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
