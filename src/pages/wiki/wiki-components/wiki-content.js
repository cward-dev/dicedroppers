function WikiContent( { content } ) {

  let childKeyCount = 0;
  let grandchildKeyCount = 0;

  const formatHtml = (pair) => {
    grandchildKeyCount++;

    const key = pair[0];
    const value = pair[1];

    const trimmedKey = key.replace(/[0-9]/g, '');
    let node;
    switch (trimmedKey) {
      case "p":
        node = (
          <p key={grandchildKeyCount.toString()} dangerouslySetInnerHTML={{ __html: value }} />
        );
        break;
      case "div":
        node = (
          <div key={grandchildKeyCount.toString()} dangerouslySetInnerHTML={{ __html: value }} />
        );
        break;
      case "img":
        node = (
          <img key={grandchildKeyCount.toString()} alt="" dangerouslySetInnerHTML={{ __html: value }} />
        );
        break;
      default:
        <div key={grandchildKeyCount.toString()}><p>Error</p></div>
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