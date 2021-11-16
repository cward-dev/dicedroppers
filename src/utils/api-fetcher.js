import parseUrlPath from "./parseUrlPath";

const baseUrl = "https://cward-dev.github.io/dicedroppers-api";

export const getJsonData = async (manualFileName) => {
  const pathParts = parseUrlPath();
  const folderName = pathParts[0];
  var fileName = pathParts[1];
  if (manualFileName) fileName = manualFileName;
  const response = await fetch(`${baseUrl}/${folderName}/${fileName}.json`);
  const data = await response.json();
  return data;
};

// TODO: may want to add manualFolderName as well?
export const getImageUrl = async (manualFileName) => {
  const pathParts = parseUrlPath();
  const folderName = pathParts[0];
  var fileName = pathParts[1];
  if (manualFileName) fileName = manualFileName;
  var response = await fetch(`${baseUrl}/images/${folderName}/${fileName}.jpg`);
  if (response.status === 404)
    response = await fetch(`${baseUrl}/images/${folderName}/${fileName}.png`);
  if (response.status === 404)
    response = await fetch(`${baseUrl}/images/${folderName}/${fileName}.jpeg`);
  const imageBlob = await response.blob();
  const imageUrl = URL.createObjectURL(imageBlob);
  return imageUrl;
};