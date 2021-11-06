import "../pages.css";
import WikiPage from "./wiki-components/wiki-page";
import parseUrlPath from "../../utils/parseUrlPath";

function WikiHome() {

  return (
    <div className="page">
      <div className="wrapper">
        <WikiPage />
      </div>
    </div>
  );

}

export default WikiHome;