// ========== Global Wishlist ==========
const globalWishlist = () => {
  const wishlistIconGlobal = document.getElementById("wishlistIconGlobal");
  const wishlistCountGlobal = document.getElementById("wishlistCountGlobal");
  let currentWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  wishlistIconGlobal.style.color = currentWishlist.length ? "red" : "gray";
  wishlistCountGlobal.innerHTML = `${currentWishlist.length || 0}`;
};
globalWishlist();
// ========== Global Live Search ==========
const searchMainContainer = document.querySelector("#liveSearch");
const searchContainer = document.querySelector("#liveSearch ul");
const searchQuery = document.getElementById("searchQuery");

// Search layout
const searchItems = (data) => {
  let currentContent = "";
  data.forEach((item) => {
    // const isInWishlist = currentWishlist.some(book => book.id === item.id);
    // const iconColor = isInWishlist ? 'red' : 'inherit';
    currentContent += `
              <li>
                <p>Image: ${
                  item?.formats["image/jpeg"] || "./assets/img/missingbook.webp"
                }</p>
                <p>Title: ${item?.title}</p>
                <p>Author: ${item?.authors[0]?.name}</p>
                <p>Genre: ${item?.subjects[0] || "Unknown"}</p>
                <p>Id: ${item?.id} || 'Unknown'}</p>
              </li>
        `;
  });
  searchContainer.innerHTML = currentContent;
};

// Search Query
async function searchQueryData() {
  const query = searchQuery.value.trim();
  if (query.length > 0) {
    searchMainContainer.style.display = "block";
    console.log("Start searching: " + query);
    searchContainer.innerHTML = "Loading ...";
    const searchURL = `https://gutendex.com/books?search=${query}`;
    let response = await fetch(searchURL);
    let searchData = await response.json();
    searchItems(searchData?.results);
  } else {
    console.log("Search query is empty");
    searchMainContainer.style.display = "none";
    searchContainer.innerHTML = "No Data Fount Because Query Empty";
  }
}

// Outside Click - Hide Search Box
document.addEventListener("click", (e) => {
  e.target != searchMainContainer
    ? (searchMainContainer.style.display = "none")
    : "block";
});
