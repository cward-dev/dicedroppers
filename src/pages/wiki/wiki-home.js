import "../pages.css";
import WikiPage from "./wiki-components/wiki-page";

function WikiHome() {

  return (
    <div className="page">
      <div className="wrapper">
        <WikiPage directory="people" title="Karst_Sunborne" />
      </div>
    </div>
  );

}

export default WikiHome;