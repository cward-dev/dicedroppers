import { useState , useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Card from "../Card/Card.js";
import "./Grid.css";

function Grid(props) {

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

  var cardCount = DATA.length;
  var rowsCount = Math.floor(cardCount / props.columnCount);
  var stragglerCount = DATA.length % props.columnCount;
  
  var rows = [];
  for (var i = 0; i < rowsCount; i++) {
    var newRow = [];
    for (var j = 0; j < props.columnCount; j++) {
      var newItem = DATA.shift();
      newRow.push(newItem);
    }
    rows.push(newRow);
  }

  const makeCard = (card) => {
    console.log("card:")
    console.log(card);
    return (
      <td>
        <Link key={card.name} to={`/meet-the-crew/${card.name}`}>
          <Card name={card.name} description={card.description} imageFile={card.imageFile} />
        </Link>
      </td>
    );
  }

  const makeRow = (row) => {
    console.log("row:")
    console.log(row);
    const rowie = (
      <tr>
        {row.map(card => makeCard(card))}
      </tr>
    );
    console.log(rowie);
    return rowie;
  };

  return (
    <div>
      <table className="grid">
        <tbody>
          {rows.map(row => makeRow(row))}
        </tbody>
      </table>
    </div>
  );

}

export default Grid;