import Card from "../../components/Card/Card.js";
import "../pages.css";
import WikiPage from "../wiki/wiki-page.js";

function MeetTheCrew() {

  const DATA = require("./players.json");

  const makeCard = (card) => {
    return (
      <Card name={card.name} imageFile={card.imageFile} role={card.role} description={card.description}  />
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