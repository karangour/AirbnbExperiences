import React from "react";
import star from "./../../public/assets/star.png";

export default function Card(props) {
  let badgeText;
  if (!props.openSpots) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  } else {
    badgeText = false;
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        src={`./../../public/assets/${props.coverImg}`}
        className="card--katie"
      />
      <div className="card--ratinginfo">
        <img src={star} className="card--star" alt="Star icon." />
        <p className="rating">{props.stats.rating}</p>
        <p className="reviews">({props.stats.reviewCount})</p>
        <p className="country"> • {props.location}</p>
      </div>
      <h2 className="card--title">{props.title}</h2>
      <p className="card--price">
        <span>From ${props.price} </span> / person
      </p>
    </div>
  );
}
