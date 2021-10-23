import { useState } from 'react';
import "../pages.css";
import "./home.css";

function Home() {
  
  return (
    <div className="page">
      <div className="page-block">
        <img className="logo" src="/images/logo.png" />
        <h1 className="display-4">Dice Droppers</h1>
        <p className="lead">Welcome, adventurer.</p>
      </div>
    </div>
  );

}

export default Home;