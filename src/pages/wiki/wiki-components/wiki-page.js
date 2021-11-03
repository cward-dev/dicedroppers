import React from 'react';
import WikiOverview from "./wiki-overview";
import WikiContent from './wiki-content';
import "./wiki-page.css";

function WikiPage( { directory, title } ) {

  const overview = require(`../wiki-pages/${directory.toLowerCase()}/${title}/overview.json`);
  const content = require(`../wiki-pages/${directory.toLowerCase()}/${title}/content.json`);

  const getHeaderNode = (section) => {
    if (section[0] === "Default") return null;
    return (
      <h2>{section[0]}</h2>
    );
  };

  const makeSection = (section) => {
    return (
      <div>
        {getHeaderNode(section)}
        <p>{section[1].map(content => <p>{content}</p>)}</p>
      </div>
    );
  };

  return (
    <div>
      <WikiOverview overview={overview} />
      <h1>{overview.General.Title}</h1>
      <WikiContent content={content} />
    </div>
  );

}

export default WikiPage;