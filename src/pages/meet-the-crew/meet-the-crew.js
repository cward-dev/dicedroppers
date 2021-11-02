import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react';
import Card from "../../components/Card/Card.js";
import Grid from "../../components/Grid/Grid.js";
import "../pages.css";

function MeetTheCrew() {

  const DATA = [
    {
      name: "Lawson",
      description: "DM",
      imageFile: "img_avatar.png",
    },
    {
      name: "Chris",
      description: "Player",
      imageFile: "img_avatar.png",
    },
    {
      name: "Fabbs",
      description: "Player",
      imageFile: "img_avatar.png",
    },
    {
      name: "Hailey",
      description: "Player",
      imageFile: "img_avatar.png",
    },
    {
      name: "Luke",
      description: "Player",
      imageFile: "img_avatar.png",
    },
    {
      name: "Oscar",
      description: "Player",
      imageFile: "img_avatar.png",
    },
  ];

  const makeCard = (card) => {
    return (
      <Card name={card.name} description={card.description} imageFile={card.imageFile} />
    );
  }

  return (
    <div className="page">
      <div className="wrapper">
        <h1>Meet The Crew</h1>
        <p>Get to know us.</p>
        {DATA.map(card => makeCard(card))}
      </div>
    </div>
  );

}

export default MeetTheCrew;