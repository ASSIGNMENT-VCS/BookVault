// const APIURL = "https://gutendex.com/books";
const APIURL = "assets/js/books.json";

const BOOKLISTS = [];
const ContainerToShowBooksInHomePage =
  document.querySelector("#homepage .items");

let books = async () => {
  let response = await fetch(APIURL);
  let data = await response.json();
  return data;
};

books()
  .then((data) => {
    BOOKLISTS.push(...data.results);
    BOOKLISTS.forEach((item) => {
      ContainerToShowBooksInHomePage.innerHTML += `
      <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img
                      src="${item?.formats["image/jpeg"]}"
                      alt="Avatar"
                      
                    />
                  </div>
                  <div class="flip-card-back">
                    <div class="wishlist_icon_flip">
                      <svg
                        width="32"
                        height="33"
                        viewBox="0 0 32 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.9995 28.5722C-10.6667 13.8333 7.99999 -2.16666 15.9995 7.95075C24 -2.16666 42.6666 13.8333 15.9995 28.5722Z"
                          stroke="#1A1A1A"
                          stroke-width="1.5"
                        />
                      </svg>
                    </div>
                    <div class="content_flip">
                      <h1>Name: ${item?.title}</h1>
                      <br/>
                      <p>Author : ${item?.authors[0]?.name}</p>
                      <br/>
                      <a href="details.html?id=${item?.id}" target="_blank">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
      `;
    });
  })
  .catch((e) => {
    console.log(e);
  });

// async function showDetails(bookId) {
//   window.location.href = `details.html?id=${bookId}`;
//   // let book = await fetchBook();
//   // console.log(book);
// }
