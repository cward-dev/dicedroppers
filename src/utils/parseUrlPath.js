const parseUrlPath = () => {
  const pathName = window.location.pathname;
  const pathComponents = pathName.split("/")
  pathComponents.shift();
  return pathComponents;
}

export default parseUrlPath;