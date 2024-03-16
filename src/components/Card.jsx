import React from "react";
import katie from "./../assets/katie-zaferes.png";
import star from "./../assets/star.png";

export default function Card() {
  return (
    <div className="card">
      <img src={katie} className="card--katie" alt="Image of Katie Zaferes." />
      <div className="card--ratinginfo">
        <img src={star} className="card--star" alt="Star icon." />
        <p className="rating">5.0</p>
        <p className="reviews">(6)</p>
        <p className="country"> • USA</p>
      </div>
      <h2 className="card--title">Life lessons with Katie Zaferes</h2>
      <p className="card--price">
        <span>From $136 </span> / person
      </p>
    </div>
  );
}
