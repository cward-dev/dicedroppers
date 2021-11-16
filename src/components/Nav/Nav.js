import React, { useState, useEffect, useRef } from "react";
import {
  Link,
  NavLink
} from "react-router-dom";
import "./Nav.css";
import useWindowDimensions from "../../hooks/useWindowDimensions.js";

function useEventListener(eventName, handler, element = window) {
  const savedHandler = useRef();
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);
  useEffect(
    () => {
      const isSupported = element && element.addEventListener;
      if (!isSupported) return;
      const eventListener = (event) => savedHandler.current(event);
      element.addEventListener(eventName, eventListener);
      return () => {
        element.removeEventListener(eventName, eventListener);
      };
    },
    [eventName, element]
  );
}

function Nav() {
  const [ isActive, setIsActive ] = useState(false);
  const { width } = useWindowDimensions();
  
  const handleIcon = () => {
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  const clickHandler = () => {
    if (isActive) {
      setTimeout(setIsActive, 0);
    }
  };

  const resizeHandler = () => {
    if (width > 960) {
      setTimeout(setIsActive, 0);
    }
  };

  useEventListener("mouseup", clickHandler);
  useEventListener("resize", resizeHandler);

  const logoPath = "/images/logo-white-outlined.png";

  return (
    <div className="nav sticky" id="myNav">
      <div className="nav-logo-container">
        <Link to="/" className="nav-logo-link"><img className="nav-logo" src={logoPath} alt="Logo" /></Link>
        <Link to="/" className="nav-name">Dice Droppers</Link>
        <div className="icon" onClick={handleIcon}>
          <i className="fa fa-bars" />
        </div>
      </div>
      {isActive || width > 960? 
        <div className={`links-container${isActive ? " active" : " inactive"}`}>
          <NavLink to="/" className="nav-item home" exact={true}>Home</NavLink>
          <NavLink to="/blog" className="nav-item">Blog</NavLink>
          <NavLink to="/episodes" className="nav-item">Episodes</NavLink>
          <NavLink to="/campaign-notes" className="nav-item">Campaign Notes</NavLink>
          <NavLink to="/meet-the-crew" className="nav-item">Meet The Crew</NavLink>
          <NavLink to="/wiki/Karst_Sunborne" className="nav-item">Wiki</NavLink>
          <NavLink to="/search" className="nav-item">Search</NavLink>
        </div> : null}
    </div>
  );
}

export default Nav;