import { useState , useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Card from "../Card/Card.js";
import "./Grid.css";
import useWindowDimensions from "../../hooks/useWindowDimensions.js";

function Grid() {

  const { height, width } = useWindowDimensions();

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

  var columns = 3;
  if (width < 600) {
    columns = 1;
  } else if (width < 800) {
    columns = 2;
  }

  var cardCount = DATA.length;
  var rowsCount = Math.floor(cardCount / columns);
  
  var rows = [];
  for (var i = 0; i < rowsCount; i++) {
    var newRow = [];
    for (var j = 0; j < columns; j++) {
      var newItem = DATA.shift();
      newRow.push(newItem);
    }
    rows.push(newRow);
  }
  rows.push(DATA);

  const makeCard = (card) => {
    return (
      <td>
        <Link key={card.name} to={`/meet-the-crew/${card.name}`}>
          <Card name={card.name} description={card.description} imageFile={card.imageFile} />
        </Link>
      </td>
    );
  }

  const makeRow = (row) => {
    const newRow = (
      <tr>
        {row.map(card => makeCard(card))}
      </tr>
    );
    return newRow;
  };

  return (
    <div className="grid">
      <table>
        {rows.map(row => makeRow(row))}
      </table>
    </div>
  );

}

export default Grid;