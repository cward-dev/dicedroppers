import "../pages.css";
import WikiPage from "./wiki-components/wiki-page";
import parseUrlPath from "../../utils/parseUrlPath";

function WikiHome() {

  const pathComponents = parseUrlPath();
  const fileName = pathComponents[1];

  return (
    <div className="page">
      <div className="wrapper">
        <WikiPage fileName={`${fileName}`} />
      </div>
    </div>
  );

}

export default WikiHome;