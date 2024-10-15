// fetchNews.js

const apiKey = "32564b372c6442bbbccbf9fbe230209d";

/* Fetch random news articles */
export async function fetchRandomNews() {
  try {
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=40&apiKey=${apiKey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.articles; // Return the news articles
  } catch (error) {
    console.error("Error fetching random news", error);
    return [];
  }
}

/* Fetch news articles by query */
export async function fetchNewsQuery(query) {
  try {
    const apiUrl = `https://newsapi.org/v2/everything?q=${query}&pageSize=40&apiKey=${apiKey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.articles; // Return the news articles
  } catch (error) {
    console.error("Error fetching news by query", error);
    return [];
  }
}
