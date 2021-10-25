import { useState } from 'react';
import "../pages.css";
import "./home.css";

function Home() {

  return (
    <div className="page">
      <div className="wrapper">
        <div className="splash">
          <img className="logo" src="/images/logo.png" />
          <h1>Dice Droppers</h1>
          <p>Welcome, adventurer.</p>
        </div>
      </div>
    </div>
  );

}

export default Home;