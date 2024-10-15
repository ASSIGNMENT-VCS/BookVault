const APIURL = "https://gutendex.com/books";
const BOOKLISTS = [];

let books = async () => {
  let response = await fetch(APIURL);
  let data = await response.json();
  return data;
};

async function fetchAndPopulateBooks() {
  try {
    const data = await books();
    BOOKLISTS.push(data);
    console.log("Books fetched and stored globally:", BOOKLISTS);
  } catch (error) {
    console.error("Error fetching books:", error);
  }
}

fetchAndPopulateBooks();
