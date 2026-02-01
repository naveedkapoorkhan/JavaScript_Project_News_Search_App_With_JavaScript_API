// main.js

import { fetchRandomNews, fetchNewsQuery } from "./fetchNews.js";
import { displayBlogs } from "./displayBlogs.js";

const blogContainer = document.getElementById("blog-container");
const searchButton = document.getElementById("search-button");
const searchField = document.getElementById("search-input");

/* Initialize the function to fetch and display random articles */
(async () => {
  try {
    const articles = await fetchRandomNews();
    displayBlogs(articles, blogContainer); // Pass the articles to the display function
  } catch (error) {
    console.error("Error fetching random news", error);
  }
})();

/* Search button click event */
searchButton.addEventListener("click", async () => {
  const query = searchField.value.trim();
  if (query !== "") {
    try {
      const articles = await fetchNewsQuery(query);
      displayBlogs(articles, blogContainer);
    } catch (error) {
      console.log("Error fetching news by query", error);
    }
  }
});
