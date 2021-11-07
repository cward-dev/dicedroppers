import "../pages.css";
import WikiPage from "./wiki-components/wiki-page";

function WikiRoot() {

  return (
    <div className="page">
      <div className="wrapper">
        <WikiPage />
      </div>
    </div>
  );

}

export default WikiRoot;