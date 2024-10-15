export const ROOTAPIURL = "https://gutendex.com";

export const FetchData = async (APIURL) => {
  let response = await fetch(APIURL);
  let data = await response.json();
  return data;
};
