import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import "./wiki-overview.css";

function WikiOverview({ overview }) {

  const generalInfo = overview.General;
  const characterInfo = overview.Character;

  const urlTitle = generalInfo.Title.replace(" ", "_")

  const text = "test-wiki"

  const createOverviewRow = (item) => {
    var label = item[0].replace("_", " ");
    switch (item[0]) {
      case "Title":
      case "Image_Path": {
        return;
      }
    }
    return (
      <div className="overview-row">
        <div className="overview-item label">{label}</div>
        <div className="overview-item">{item[1]}</div>
      </div>
    );
  }

  return (
    <div className="overview-container">
      <div className="overview">
        <Link to={`/wiki/${urlTitle}`}>
          <div className="overview-item overview-header">
            <h3>{generalInfo.Title}</h3>
          </div>
        </Link>
        <div className="overview-item image">
          <img src={generalInfo.Image_Path} alt={generalInfo.Title} />
        </div>
        <div className="overview-items">
          {Object.entries(generalInfo).map(item => createOverviewRow(item))}
        </div>
        <div class="character-header">Character Info</div>
        <div className="overview-items">
          {createOverviewRow( [ "Full_Name", generalInfo.Title ] )}
          {Object.entries(characterInfo).map(item => createOverviewRow(item))}
        </div>
      </div>
    </div>
  );

}

export default WikiOverview;