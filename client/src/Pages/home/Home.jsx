import React, { useEffect, useState } from "react";
import "./Home.css";
import Card from "./Card";
import axios from "axios";


const Home = () => {
  const [post, setPost] = useState();
  const BACKEND_URL =import.meta.env.VITE_APP_BACKENDURL;

  const getPosts = async () => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/getallpost`
      );
      setPost(response.data.responseData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="home-page">
      <h1>Welcome to Our Website</h1>
      <div className="card-grid">
       {
        post?.map((post)=>
        {
          return <Card key={post?._id} post={post}/>
        })
       }
      </div>
    </div>
  );
};

export default Home;
