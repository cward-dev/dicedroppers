import React, { useState, useEffect } from 'react';
import WikiOverview from "./wiki-overview";
import WikiContent from './wiki-content';
import "./wiki-page.css";
import getApiData from "../../../utils/getApiData";

function WikiPage( { fileName } ) {

  const [data, setData] = useState(require("./placeholder-data.json"));

  useEffect(() => {
    const fetchData = async () => {
      const newData = await getApiData(fileName)
      setData(newData);
    };
    fetchData();
  }, [fileName]);

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