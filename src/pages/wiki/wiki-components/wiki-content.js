function WikiContent( { content } ) {

  const formatHtml = (pair) => {
    const key = pair[0];
    const value = pair[1];

    const trimmedKey = key.replace(/[0-9]/g, '');
    let node;
    switch (trimmedKey) {
      case "p":
        node = (
          <p dangerouslySetInnerHTML={{ __html: value }} />
        );
        break;
      case "div":
        node = (
          <div dangerouslySetInnerHTML={{ __html: value }} />
        );
        break;
      case "img":
        node = (
          <img dangerouslySetInnerHTML={{ __html: value }} />
        );
        break;
      default:
        <div><p>Error</p></div>
    }

    return node;
  }

  const getHeaderNode = (section) => {
    if (section[0] === "null") return null;
    return (
      <h2>{section[0]}</h2>
    );
  };

  const makeSection = (section) => {
    return (
      <div>
        {getHeaderNode(section)}
        {Object.entries(section[1]).map(content => formatHtml(content))}
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