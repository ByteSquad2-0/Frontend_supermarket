import React from "react";
import './card.css';

const Cards = (props) => {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="shop pic" className="shope_img" />
          <div className="cardinfo">
            <h3>{props.title}</h3>
            <h6>{props.review}</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;