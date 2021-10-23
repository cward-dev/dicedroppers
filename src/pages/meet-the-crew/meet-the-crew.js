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
      <div className="page-block">
        <h1 className="display-4">Meet The Crew</h1>
        <p className="lead">Get to know us.</p>
        <Grid />
      </div>
    </div>
  );

}

export default MeetTheCrew;