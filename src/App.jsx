import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Card({ title, text, id }) {
  return (
    <section className="card">
      <h2>{title}</h2>
      <p>{text}</p>
    </section>
  );
}


function App() {

  let cardstack = [
    {
      id: 0,
      title: "Some title",
      text: "Some text",
    },
    {
      id: 1,
      title: "Another title",
      text: "More text",
    },
    {
      id: 2,
      title: "Favorite Scene",
      text: "More text still",
    },
  ];


  console.log("welp!", cardstack)

  return (
    <>
      <h1>Cardbox</h1>
      <section className="cardbox">
        {cardstack.map(card=>
          <Card {...card} key={card.id}/>)}
      </section>
    </>
  );
}

export default App;
