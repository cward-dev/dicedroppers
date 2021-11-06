import React, { useState, useEffect } from 'react';
import WikiOverview from "./wiki-overview";
import WikiContent from './wiki-content';
import "./wiki-page.css";
import * as DataApi from "../../../utils/data-api";

function WikiPage( { directory, title } ) {

  const [data, setData] = useState(require("./placeholder-data.json"));

  useEffect(() => {
    const doThing = async () => {
      const newData = await DataApi.getData("people", "Karst_Sunborne")
      setData(newData);
    };
    doThing();
  }, []);

  if (!data) return null;
  return (
    <div>
      <WikiOverview generalInfo={data["General Info"]} characterInfo={data["Character Info"]} />
      <h1>{data["General Info"]["Title"]}</h1>
      <WikiContent content={data["Content"]} />
    </div>
  );

}

export default WikiPage;