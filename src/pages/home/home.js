import { useState } from 'react';
import "../pages.css";
import "./home.css";

function Home() {

  const [ isActive, setIsActive ] = useState(false);

  const handleClick = () => {
    if (isActive) {
      return;
    }  
    setIsActive(true);
    setTimeout(setIsActive, 1000);
  };

  return (
    <div className="page">
      <div className="wrapper">
        <div className="splash">
          <img className={`logo${isActive? " clicked": ""}`} src="/images/logo-full.png" alt="logo" onClick={handleClick} />
          <h1>Dice Droppers</h1>
          <p>Welcome, adventurer.</p>
        </div>
      </div>
    </div>
  );

}

export default Home;