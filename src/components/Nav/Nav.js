import React, { useState, useEffect, useRef, useCallback, setState, classNames, state, toggleDropdown, isOpen, responsive } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import "./Nav.css";

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
  const [isActive, setIsActive] = useState(false);

  const handleLink = () => {
    setIsActive(false);
  };

  const handleIcon = () => {
    setIsActive(isActive ? false : true);
  };

  const handler = () => {
    setIsActive(false);
  };

  useEventListener("mouseup", handler);

  const logoPath = "/images/logo.png";

  return (
    <div className={`nav${isActive ? " responsive" : ""}`} id="myNav">
      <div className="nav-logo-container">
        <Link to="/" className="sticky nav-logo-link" exact={true}><img className="nav-logo" src={logoPath} alt="Logo" /></Link>
        <Link to="/" className="sticky nav-name" exact={true}>Dice Droppers</Link>
      </div>
      <NavLink to="/" className="nav-item home" exact={true}>Home</NavLink>
      <NavLink to="/blog" className="nav-item">Blog</NavLink>
      <NavLink to="/episodes" className="nav-item">Episodes</NavLink>
      <NavLink to="/campaign-notes" className="nav-item">Campaign Notes</NavLink>
      <NavLink to="/meet-the-crew" className="nav-item">Meet The Crew</NavLink>
      <NavLink to="/search" className="nav-item">Search</NavLink>
      <a href="javascript:void(0);" className="nav-item icon" onClick={handleIcon}>
        <i className="fa fa-bars" />
      </a>
    </div>
  );
}

export default Nav;