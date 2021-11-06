const baseUrl = "https://cward-dev.github.io/dicedroppers-api";

const getApiData = async (fileName) => {
  const response = await fetch(`${baseUrl}/${fileName}.json`);
  var data = await response.json();
  return data;
};

export default getApiData;