function WikiContent( { content } ) {

  const formatHtml = (value) => {

    return (
      <p dangerouslySetInnerHTML={{ __html: value }} />
    );
  }

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
        {section[1].map(content => formatHtml(content))}
      </div>
    );
  };

  return (
    <div>
      {Object.entries(content).map(section => makeSection(section))}
    </div>
  );

}

export default WikiContent;