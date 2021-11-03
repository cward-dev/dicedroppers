import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import "../pages.css";
import "./wiki-page.css";

function WikiOverview() {

  const text = "test-wiki"

  return (
    <div className="overview-container">
      <div className="overview">
        <div className="overview-item overview-header">
          <h1>
            <Link to={`/wiki/${text}`}>Test Wiki</Link>
          </h1>
        </div>
        <div className="overview-item image">
          <img src="/images/logo.png" />
        </div>
        <div className="overview-item">
          <p>testeroni</p>
        </div>
        <div className="overview-item">
          <p>testeroo</p>
        </div>
        <div className="overview-item">
          <p>another tester</p>
        </div>
      </div>
    </div>
  );

}

export default WikiOverview;