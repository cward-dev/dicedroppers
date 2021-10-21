import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react';
import Card from "../../components/Card/Card.js";
import Grid from "../../components/Grid/Grid.js";
import "./meet-the-crew.css";

function MeetTheCrew() {

  const [menuSelection, setMenuSelection] = useState(0);

  const gridContent = (
    <div>
      <Link to="/meet-the-crew/lawson">
        <Card name="Lawson" description="DM" imageFile="img_avatar.png" />
      </Link>
      <Link to="/meet-the-crew/chris">
        <Card name="Chris" description="Player" imageFile="img_avatar.png" />
      </Link>
      <Link to="/meet-the-crew/fabbs">
        <Card name="Fabbs" description="Player" imageFile="img_avatar.png" />
      </Link>
      <Link to="/meet-the-crew/hailey">
        <Card name="Hailey" description="Player" imageFile="img_avatar.png" />
      </Link>
      <Link to="/meet-the-crew/luke">
        <Card name="Luke" description="Player" imageFile="img_avatar.png" />
      </Link>
      <Link to="/meet-the-crew/oscar">
        <Card name="Oscar" description="Player" imageFile="img_avatar.png" />
      </Link>
    </div>
  );

  return (
    <div className="page">
      <div className="page-block">
        <h1 className="display-4">Meet The Crew</h1>
        <p className="lead">Get to know us.</p>
        <Grid columnCount={3} content={gridContent} />
      </div>
    </div>
  );

}

export default MeetTheCrew;