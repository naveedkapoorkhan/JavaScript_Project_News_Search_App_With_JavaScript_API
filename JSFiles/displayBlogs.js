// displayBlogs.js

export function displayBlogs(articles, blogContainer) {
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
  