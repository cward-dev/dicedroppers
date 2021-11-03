import React, { useState, useEffect, useRef, useCallback, setState, classNames, state, toggleDropdown, isOpen, responsive } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
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
  const { height, width } = useWindowDimensions();
  
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

  const logoPath = "/images/logo.png";

  return (
    <div className={`nav`} id="myNav">
      <div className="nav-logo-container">
        <Link to="/" className="sticky nav-logo-link" exact={true}><img className="nav-logo" src={logoPath} alt="Logo" /></Link>
        <Link to="/" className="sticky nav-name" exact={true}>Dice Droppers</Link>
        <a href="javascript:void(0);" className="icon" onClick={handleIcon}>
          <i className="fa fa-bars" />
        </a>
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