import React from "react";
import star from "./../../public/assets/star.png";

export default function Card({
  image,
  rating,
  reviews,
  country,
  title,
  price,
}) {
  const img = "./../assets/" + image;
  return (
    <div className="card">
      <img src={`./../../public/assets/${image}`} className="card--katie" />
      <div className="card--ratinginfo">
        <img src={star} className="card--star" alt="Star icon." />
        <p className="rating">{rating}</p>
        <p className="reviews">({reviews})</p>
        <p className="country"> • {country}</p>
      </div>
      <h2 className="card--title">{title}</h2>
      <p className="card--price">
        <span>From ${price} </span> / person
      </p>
    </div>
  );
}
