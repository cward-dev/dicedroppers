function WikiContent( { content } ) {

  let childKeyCount = 0;
  
  const formatHtml = (pair) => {
    const key = pair[0];
    const value = pair[1];

    const trimmedKey = key.replace(/[0-9]/g, '');
    const childKey = key.replace(/[a-zA-z]/g, '');
    let node;
    switch (trimmedKey) {
      case "p":
        node = (
          <p key={childKey} dangerouslySetInnerHTML={{ __html: value }} />
        );
        break;
      case "div":
        node = (
          <div key={childKey} dangerouslySetInnerHTML={{ __html: value }} />
        );
        break;
      case "img":
        node = (
          <img key={childKey} alt="" dangerouslySetInnerHTML={{ __html: value }} />
        );
        break;
      default:
        <div key={childKey}><p>Error</p></div>
    }

    return node;
  }

  const getHeaderNode = (section) => {
    if (section[0].toLowerCase() === "null") return null;
    return (
      <h2>{section[0]}</h2>
    );
  };

  const makeSection = (section) => {
    childKeyCount++;

    return (
      <div key={childKeyCount.toString()}>
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