import React from 'react';
import "./Card.css";

const Card = ({post}) => {
  return (
    <div className="card">
      <p className="card__title">{post.id}</p>
      <p className="card__author">{post.first_name}</p>
      <p className="card__body">{post.email}</p>
      <p className="card__body">{post.domain}</p>

    </div>
  )
}

export default Card
