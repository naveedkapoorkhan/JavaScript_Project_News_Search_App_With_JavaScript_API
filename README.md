#######JavaScript News Blog Project#######
This project is a JavaScript-powered news blog that fetches live news data using the News API. Users can view random news articles or search for specific news by entering a query. The project demonstrates how to dynamically display API data, manage user interaction, and implement basic UI features with animations.

###Table of Contents###
.Features
.Folder Structure
.Technologies Used
.How to Use
.Installation
.API Key Setup

###Features###
1)Fetches live news data from the News API.
2)Displays random news articles on the home page.
3)Allows users to search for specific news articles.
4)Dynamic display of article images, titles, and descriptions.
5)UI animations when hovering over articles.
6)Responsive design for both desktop and mobile views.



###Folder Structure:###
├── index.html             # Main HTML file
├── JSFiles/
│   ├── displayBlogs.js    # Handles displaying the fetched news articles
│   ├── fetchNews.js       # Handles fetching news data from the API
│   ├── main.js            # Main JavaScript file handling logic integration
├── styles.css             # CSS styling for the blog
├── README.md              # Documentation file (this file)

###Technologies Used###
HTML5: Structure of the web page.
CSS3: Styling and basic animations.
JavaScript (ES6): Core functionality of fetching and displaying news data.
News API: Used for fetching live news data.

###How to Use:###
1.Clone or Download the Project:
Clone the project repository or download the ZIP file.
https://github.com/naveedkapoorkhan/JavaScript_Project_News_Search_App_With_JavaScript_API.git

2.Open index.html in your browser:
This is the main file to run the project.
3.Search for news:
You can use the search bar to look for specific news articles by keywords (e.g., technology, sports, etc.).
4.Random News:
When no search is made, random top news from the US is displayed.



Search for news:
You can use the search bar to look for specific news articles by keywords (e.g., technology, sports, etc.).

Random News:
When no search is made, random top news from the US is displayed.

Installation::
To run this project locally, follow these steps:
1.Download the project files.
2.Ensure you have an active internet connection (to fetch news data from the News API).
3.Open the index.html file in any modern web browser.

API Key Setup
The project uses the News API to fetch news articles. To use this project, you will need your own API Key.

1.Go to News API and sign up to get your API Key.
2.In the fetchNews.js file inside the JSFiles folder, replace the placeholder API key with your own key:

const apiKey = "YOUR_NEWS_API_KEY";


