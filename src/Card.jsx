import React from 'react';
import './App.css'; 

function Card(props) {
  return (
    <div className="Card">
      <img
        className="Card-img"
        src={props.img}
        alt="Profile"
      />
      <h1 className="Card-title">{ props.user}</h1>
      <p className="Card-content">
        Lam eligendi libero eum fugit aut culpa voluptas sint ea, ipsum eveniet.
        Placeat doloremque rem consequatur!
      </p>
    </div>
  );
}

export default Card;