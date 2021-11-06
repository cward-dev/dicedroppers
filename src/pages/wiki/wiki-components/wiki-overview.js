import { Link } from "react-router-dom";
import "./wiki-overview.css";

function WikiOverview({ generalInfo, characterInfo }) {

  const title = generalInfo["Title"];
  const urlTitle = title.replace(" ", "_");
  let childKeyCount = 0;

  const createOverviewRow = (item) => {
    childKeyCount++;
    var key = item[0];
    var value = item[1];
    switch (key) {
      case "Title":
      case "Image Path": {
        return;
      }
      default: {
        return (
          <div className="overview-row" key={childKeyCount.toString()}>
            <div className="overview-item label">{key}</div>
            <div className="overview-item">{value}</div>
          </div>
        );   
      }
    }
  }

  return (
    <div className="overview-container">
      <div className="overview">
        <Link to={`/wiki/${urlTitle}`}>
          <div className="overview-item overview-header">
            <h3>{title}</h3>
          </div>
        </Link>
        <div className="overview-item image">
          <img src={generalInfo["Image Path"]} alt={title} />
        </div>
        <div className="overview-items">
          {Object.entries(generalInfo).map(item => createOverviewRow(item))}
        </div>
        <div className="character-header">Character Info</div>
        <div className="overview-items">
          {createOverviewRow( [ "Full Name", title ] )}
          {Object.entries(characterInfo).map(item => createOverviewRow(item))}
        </div>
      </div>
    </div>
  );

}

export default WikiOverview;