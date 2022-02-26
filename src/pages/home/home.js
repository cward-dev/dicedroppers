import { useState } from 'react';
import "../pages.css";
import "./home.css";
import { LinkOut } from "../../LinkOut.js";
import { SocialIcon } from "react-social-icons";

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
          <p>Join us on <a href={LinkOut.twitch} target="_blank">Twitch</a> every Tuesday at 8PM CST!</p>
          <div className='socialIconsWrapper'>
            <div className='socialIcons'>
              <SocialIcon url={LinkOut.twitch} target="_blank" />
              <SocialIcon url={LinkOut.youtube} target="_blank" />
              <SocialIcon url={LinkOut.twitter} target="_blank" />
              <SocialIcon url={LinkOut.instagram} target="_blank" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Home;