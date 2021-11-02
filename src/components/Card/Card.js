import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./Card.css";

function Card(props) {

  return (
    <Link key={props.name} to={`/meet-the-crew/${props.name}`}>
      <div className="card">
        <div className="img-container">
          <img src={`/images/${props.imageFile}`} alt={props.name} />
        </div>
        <div className="content-container">
          <h4><b>{props.name}</b></h4> 
          <p>{props.role}</p>
          <div className="description-container">
            <p>{props.description}</p> 
          </div>
        </div>
      </div>
    </Link>
  );

}

export default Card;