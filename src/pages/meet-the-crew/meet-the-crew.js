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

  return (
    <div className="page">
      <div className="wrapper">
        <h1>Meet The Crew</h1>
        <p>Get to know us.</p>
        <Grid />
      </div>
    </div>
  );

}

export default MeetTheCrew;