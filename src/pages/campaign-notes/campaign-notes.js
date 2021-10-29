import { useState } from 'react';
import "../pages.css";
import "./campaign-notes.css";

function CampaignNotes() {

  return (
    <div className="page">
      <div className="wrapper">
        <h1>Campaign Notes</h1>
        <p>Get up to speed.</p>
        <img className="world-map" src="/images/world-map.jpg" />
      </div>
    </div>
  );

}

export default CampaignNotes;