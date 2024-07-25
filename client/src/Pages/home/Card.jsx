import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';

const Card = ({ post }) => {
  
  const navigate = useNavigate()
  return (
    <div className="card" onClick={()=>navigate(`/singlepost/${post?._id}`)}>
      <div className="decoration"></div>
      <h2 className="topic">{post?.topic}</h2>
      <h3 className="question">{post?.question}</h3>
      <p className="answer">{post?.answer}</p>
    </div>
  );
};

export default Card;