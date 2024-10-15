// const APIURL = "https://gutendex.com/books";
const APIURL = "assets/js/data.json";
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
                      src="${item.formats["image/jpeg"]}"
                      alt="Avatar"
                      style="width: auto; height: 100%"
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
                      <h1>${item.title}</h1>
                      <p>${item.authors[0].name}</p>
                      <a href="details.html">Read More</a>
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

// async function loopinhtml() {
//   let data = await books();
//   if (Object.keys(data).length === 0) {
//     console.log("JSON object is empty");
//   } else {
//     console.log("JSON object is not empty");
//     BOOKLISTS.push(...data.results);
//     BOOKLISTS.forEach((item) => {
//       console.log(item.id);
//     });
//   }
// }

// loopinhtml();
