const apiKey = "32564b372c6442bbbccbf9fbe230209d";
const blogContainer = document.getElementById("blog-container");
const searchButton = document.getElementById("search-button");
const searchField = document.getElementById("search-input");

/* Fetch random news articles */
async function fetchRandomNews() {
  try {
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=26&apiKey=${apiKey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.articles; // Return the news articles
  } catch (error) {
    console.error("Error fetching random news", error);
    return [];
  }
}

searchButton.addEventListener("click", async () => {
 // event.preventDefault(); // Prevent page reload (if needed)
  const query = searchField.value.trim();
  if (query !== "") {
    try {
      const articles = await fetchNewsQuery(query);
      displayBlogs(articles);
    } catch (error) {
      console.log("Error fetching news by query", error);
    }
  }
});

async function fetchNewsQuery(query) {
  try {
    // Remove the invalid `country=us` parameter
    const apiUrl = `https://newsapi.org/v2/everything?q=${query}&pageSize=26&apiKey=${apiKey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.articles; // Return the news articles
  } catch (error) {
    console.error("Error fetching news by query", error);
    return [];
  }
}

/* Display the fetched news articles on the page */
function displayBlogs(articles) {
  blogContainer.innerHTML = ""; // Clear existing content
  articles.forEach((article) => {
    const blogCard = document.createElement("div");
    blogCard.classList.add("blog-card");

    const img = document.createElement("img");
    img.src = article.urlToImage || "https://placehold.co/600x400"; // Fallback if no image
    img.alt = article.title;

    const title = document.createElement("h2");
    let truncateTitle;
    if (article.title.length > 30) {
      truncateTitle = article.title.slice(0, 30) + ".......";
    } else {
      truncateTitle = article.title;
    }
    title.textContent = truncateTitle;

    const description = document.createElement("p");
    let truncateDes;
    if (article.description && article.description.length > 75) {
      truncateDes = article.description.slice(0, 75) + ".......";
    } else {
      truncateDes = article.description || "No description available";
    }
    description.textContent = truncateDes;

    blogCard.appendChild(img);
    blogCard.appendChild(title);
    blogCard.appendChild(description);
    blogCard.addEventListener("click", () => {
      window.open(article.url, "_blank");
    });
    blogContainer.appendChild(blogCard);
  });
}

/* Initialize the function to fetch and display the articles */
(async () => {
  try {
    const articles = await fetchRandomNews();
    displayBlogs(articles); // Pass the articles to the display function
  } catch (error) {
    console.error("Error fetching random news", error);
  }
})();
