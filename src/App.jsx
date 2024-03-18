import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  const updated_cards = data.map((card) => {
    return (
      <Card
        key={card.id}
        image={card.coverImg}
        rating={card.stats.rating}
        reviews={card.stats.reviewCount}
        country={card.location}
        title={card.title}
        price={card.price}
      />
    );
  });
  return (
    <>
      <Navbar />
      <Body />
      <section className="cards-list">{updated_cards}</section>
    </>
  );
}
