import { useState } from 'react';

function Home() {

  const [menuSelection, setMenuSelection] = useState(0);

  return (
    <div>
      <div className="jumbotron jumbotron-fluid vh-100 text-center d-flex flex-column justify-content-center bg-secondary py-5">
        <div className="container">
          <div className="jumbotron jumbotron-fluid bg-light py-5">
            <h1 className="display-4">Dice Droppers</h1>
            <p className="lead">Welcome, adventurer.</p>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Home;