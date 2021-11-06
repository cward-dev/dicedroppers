export const baseUrl = "https://cward-dev.github.io/dicedroppers-api";

export const people = `${baseUrl}/people`;

export const karstSunborne = "/Karst_Sunborne.json"

export const getData = async (folderName, fileName) => {
  const response = await fetch(`${baseUrl}/${folderName}/${fileName}.json`);
  var data = await response.json();
  console.log(data);
  return data;
};