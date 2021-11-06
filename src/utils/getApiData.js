import parseUrlPath from "./parseUrlPath";

const baseUrl = "https://cward-dev.github.io/dicedroppers-api";

const getApiData = async () => {
  const pathParts = parseUrlPath();
  const folderName = pathParts[0];
  const fileName = pathParts[1];
  const response = await fetch(`${baseUrl}/${folderName}/${fileName}.json`);
  var data = await response.json();
  return data;
};

export default getApiData;