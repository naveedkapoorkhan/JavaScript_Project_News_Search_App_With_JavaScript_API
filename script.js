const apiKey = "32564b372c6442bbbccbf9fbe230209d";
const blogContainer = document.getElementById("blog-container");

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
   // title.textContent = article.title;
    const truncateTitle=article.title.length> 30? article.title.slice(0,30)+"......." : article.title;
    title.textContent=truncateTitle;

    const description = document.createElement("p");
    description.textContent = article.description || "No description available"; // Fallback for missing description

    blogCard.appendChild(img);
    blogCard.appendChild(title);
    blogCard.appendChild(description);
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
