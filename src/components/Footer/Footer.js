import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./Footer.css";

function Footer() {
  const logoPath = "/images/logo.png";

  return (
    <div className="footer">
      <div className="footer-contents">
        <p className="f1">
          
        </p>
        <p className="f2">
          
        </p>
        <p className="f3">
          © 2021 Dicedroppers
        </p>
      </div>
    </div>
  );
}

export default Footer;