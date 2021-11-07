import React, { useState, useEffect } from 'react';
import WikiOverview from "./wiki-overview";
import WikiContent from './wiki-content';
import "./wiki-page.css";
import { getData } from "../../../utils/api-fetcher";

function WikiPage() {

  const [data, setData] = useState(require("./placeholder-data.json"));

  useEffect(() => {
    const fetchData = async () => {
      const newData = await getData();
      setData(newData);
    };
    fetchData();
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