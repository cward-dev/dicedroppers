import "./Card.css";

function Card(props) {

  return (
    <div className="card">
      <div className="img-container">
        <img src={`/images/${props.imageFile}`} alt={props.name} />
      </div>
      <div className="content-container">
        <h4><b>{props.name}</b></h4> 
        <p>{props.description}</p> 
      </div>
    </div>
  );

}

export default Card;