import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  const updated_cards = data.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
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
