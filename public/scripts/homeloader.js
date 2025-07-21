const getbtn = document.getElementById("getbtn");
const bnews = document.getElementById("breakingbtn");
const newsBox = document.getElementById("rightpanel");
const logoutbtn = document.getElementById("logout-btn");
const infobtn = document.getElementById("insbtn");

// adding event listeners for the category and country selection
// cause both are not supported at the same time
const category = document.getElementById("Category");
const country = document.getElementById("Country");

category.addEventListener("change", () => {
  if (this.value) {
    country.value = "";
  }
});

country.addEventListener("change", () => {
  if (this.value) {
    category.value = "";
  }
});

logoutbtn.addEventListener("click",()=>{

    localStorage.removeItem("newsProjectUserEmail");
    localStorage.removeItem("newsProjectUserPassword");
    localStorage.removeItem("newsProjectUserApiKey");
    window.location.href='./index.html';
})

// instruction popup for the homepage 

infobtn.addEventListener("click",()=>{
    openInstruction();
});

function openInstruction() {
  document.getElementById("homeInstructionPopup").classList.remove("hidden");
}

function closeInstruction() {
  document.getElementById("homeInstructionPopup").classList.add("hidden");
}


// add event listener on the get news button.
getbtn.addEventListener("click", (event) => {
  event.preventDefault(); // prevent it from submitting the form

  const q = document.getElementById("Search").value;
  const country = document.getElementById("Country").value;
  const category = document.getElementById("Category").value;
  const from = document.getElementById("fromDate").value;
  const to = document.getElementById("toDate").value;
  const sortBy = document.getElementById("sortBy").value;
  const language = document.getElementById("language").value;

  // TODO: build query for api endpoint.
  console.log(q);
  console.log(country);
  console.log(category);
  console.log(from);
  console.log(to);
  console.log(sortBy);
  console.log(language);

  let query = "https://newsapi.org/v2/everything?";
  if (q) {
    query += `q=${q}&`;
  }
  if (from) {
    query += `from=${from}&`;
  }
  if (to) {
    query += `to=${to}&`;
  }
  if (sortBy) {
    query += `sortBy=${sortBy}&`;
  }
  if (language) {
    query += `language=${language}&`;
  }
  query += `pagesize=50&`;
  // handeling api call for country and category filters
  if (country || category) {
    query = "https://newsapi.org/v2/top-headlines?";
    if (q) {
      query += `q=${q}&`;
    }
    if (country) {
      query += `country=${country}&`;
    } else {
      query += `category=${category}&`;
    }
  }

  query += `apiKey=${localStorage.getItem("newsProjectUserApiKey")}`;

  // make fetch request for the news.
  fetch(query)
    .then((res) => res.json())
    .then((data) => {
      if (data.articles.length === 0) {
        showData([
          {
            urlToImage: "",
            title: "No News Found Based On Your News Filter Try other Filters",
            source: { name: "NULL" },
            content: "NULL",
            publishedAt: "NULL",
            description: "NULL",
          },
        ]);
      } else {
        showData(data.articles);
      }
    })
    .catch((err) => {
      console.log("Error Fetching Data");
      showData([
        {
          urlToImage: "",
          title:
            `!!!!!! API KEY ERROR !!!!! `,
          source: { name: "NULL" },
          content: "NULL",
          publishedAt: "NULL",
          description: `You have messed with the Api Key 
            Or You have a Developer Plan Api Key which not Support Cross Origin Request
            Please Log out and enter the key again. If On developer Plan Run in your Local system  Or by the Key from NewsApi `,
        }
      ]);
    });
});

// add event listener to the breaking news button

bnews.addEventListener("click", () => {
  fetch(
    `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${localStorage.getItem(
      "newsProjectUserApiKey"
    )}`
  )
    .then((res) => res.json())
    .then((data) => {
      showData(data.articles);
    })
    .catch((err) => {
      console.log("Error Fetching news");
      showData([
        {
          urlToImage: "",
          title:
            `!!!!!! API KEY ERROR !!!!! `,
          source: { name: "NULL" },
          content: "NULL",
          publishedAt: "NULL",
          description: `You have messed with the Api Key 
            Or You have a Developer Plan Api Key which not Support Cross Origin Request
            Please Log out and enter the key again. If On developer Plan Run in your Local system Or by the Key from NewsApi `,
        }
      ]);
    });
});

function showData(data) {
  newsBox.textContent = "";
  for (let news of data) {
    const newsitem = document.createElement("div");
    newsitem.classList.add("news-container");
    newsitem.classList.add("news-item");
    // adding image
    const image = document.createElement("img");
    image.src = news.urlToImage || "./assests/images/noimage.webp";
    image.alt = "News Relevant Image";
    newsitem.appendChild(image);

    // Creating the heading part.
    const heading = document.createElement("div");
    heading.classList.add("news-heading");
    const h2 = document.createElement("h2");
    h2.textContent = news.title;
    heading.appendChild(h2);
    const sourcep = document.createElement("p");
    sourcep.classList.add("source-info");
    const sourcelink = document.createElement("a");
    sourcelink.href = news.url || "#";
    sourcelink.textContent = news.source.name || "Not Found";
    sourcep.appendChild(sourcelink);
    heading.appendChild(sourcep);
    newsitem.appendChild(heading);
    // creating subheading part

    const subheading = document.createElement("div");
    subheading.classList.add("sub-heading");
    const h3 = document.createElement("h3");
    h3.textContent = news.description || "No Content";
    subheading.appendChild(h3);
    const date = document.createElement("p");
    date.classList.add("date");
    date.textContent = news.publishedAt.substring(0, 10) || "NULL";
    subheading.appendChild(date);
    newsitem.appendChild(subheading);

    // creating news content box
    const newsContent = document.createElement("div");
    newsContent.classList.add("news-content");
    const p = document.createElement("p");
    p.textContent = news.content;
    // adding read more link
    const readmore = document.createElement("a");
    readmore.href = news.url;
    readmore.target = "_blank";
    readmore.textContent = "More";
    p.appendChild(readmore);

    newsContent.appendChild(p);
    newsitem.appendChild(newsContent);

    // append the news item to the main box container
    newsBox.appendChild(newsitem);
  }
}
