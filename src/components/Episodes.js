import { useState } from 'react';

function Episodes() {

  const [menuSelection, setMenuSelection] = useState(0);

  return (
    <div>
      <div className="jumbotron jumbotron-fluid vh-100 text-center d-flex flex-column justify-content-center bg-secondary py-5">
        <div className="container">
          <div className="jumbotron jumbotron-fluid bg-light py-5">
            <h1 class="display-4">Episodes</h1>
            <p className="lead">Watch our content.</p>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Episodes;