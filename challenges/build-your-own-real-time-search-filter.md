# Build Your Own Real Time Search Filter 

The "Build Your Own Real-Time Search Filter" challenge is ideal for developers who want to master dynamic search functionality using real data. In this challenge, you'll create a real-time search filter that lets users search through a list of posts, updating results instantly as they type.

We'll use the **JSONPlaceholder API** as our main data source, specifically the `/posts` endpoint. 

https://jsonplaceholder.typicode.com/posts

However, feel free to use other datasets, such as [DummyJSON](https://dummyjson.com/), Open Library API, or [The Dog API](https://thedogapi.com/), to fit different themes.

## The Challenge - Building a Real-Time Search Filter

Your goal is to create a real-time search filter that retrieves and filters a list of posts from JSONPlaceholder based on user input.

### Requirements:

- **Instant Search Updates**: Display matching results in real-time as the user types.
- **Case-Insensitive Matching**: Make the search case-insensitive.
- **Empty State Handling**: Show a message when no results match the query.
- **Responsive Design**: Ensure the filter works smoothly on both desktop and mobile devices.


## Step Zero

Set up your environment to start developing and testing your real-time search filter.

1. **Choose Your Language/Framework**: You can implement this in plain JavaScript or with a framework like React, Vue, or Angular.
2. **Set Up Your Project**: Create a basic HTML, CSS, and JavaScript file structure, linking them together. Test that the app runs locally.

## Step One: Fetch Data from JSONPlaceholder

In this step, fetch the list of posts from JSONPlaceholder.

1. Use the `/posts` endpoint to retrieve a list of posts:
    
    ```jsx

    const API_URL = 'https://jsonplaceholder.typicode.com/posts';
    
    async function fetchPosts() {
        const response = await fetch(API_URL);
        const posts = await response.json();
        return posts;
    }
    
    ```
    
2. Ensure the posts data loads on the page, either in console or displayed in HTML.



## Step Two: Display Posts and Add a Search Input

Now, create a basic HTML layout with a search input and a container to display posts.

1. Add a search input field in your HTML file.
2. Display the fetched posts in a list format or cards in the container.

Example:

```html

<!-- index.html -->
<input type="text" id="search" placeholder="Search posts...">
<ul id="results"></ul>

```

```jsx

// app.js
const resultsContainer = document.getElementById('results');
const searchInput = document.getElementById('search');

function displayPosts(posts) {
    resultsContainer.innerHTML = posts.map(post => `<li>${post.title}</li>`).join('');
}

// Initial fetch and display
fetchPosts().then(posts => displayPosts(posts));

```



## Step Three: Real-Time Filtering

Add functionality to filter the list of posts in real-time as the user types.

1. Listen to the `input` event on the search field.
2. Filter posts based on the current input, updating the displayed results dynamically.

Example:

```jsx

function filterPosts(posts, query) {
    return posts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
}

searchInput.addEventListener('input', (e) => {
    const query = e.target.value;
    const filteredPosts = filterPosts(posts, query);
    displayPosts(filteredPosts);
});

```



## Step Four: Case-Insensitive Matching and Empty State

Ensure the search is case-insensitive and add a message when no matches are found.

1. Update `filterPosts` to ensure matching is case-insensitive.
2. Modify `displayPosts` to display a message like "No posts found" if `filteredPosts` is empty.



## Optional: Step Five - Advanced Filtering (Optional)

Enhance your filter with additional functionality:

1. **Highlight Matching Text**: Use HTML tags to highlight the search term within each matching result.
2. **Category-Based Filtering**: Add additional filtering by post ID or user ID, if desired.



## Optional: Step Six - Setting up ESLint for Code Quality

Set up ESLint to improve code quality:

1. Install ESLint:
    
    ```bash

    npm install eslint --save-dev
    
    ```
    
2. Create an `.eslintrc` configuration file, defining linting rules.
3. Run ESLint on your project to identify and fix issues:
    
    ```bash

    npx eslint . --fix
    
    ```
    

## Optional: Step Seven - Adding Unit Tests

Ensure the functionality of your search filter with unit tests.

1. Set up a testing framework like Jest or Mocha.
    
    ```bash

    npm install --save-dev jest
    
    ```
    
2. Write unit tests for core features, such as filtering logic, case-insensitivity, and empty state handling.
3. Run the tests:
    
    ```bash
    npm test
    
    ```
    


## The Final Step: Clean Up and Document

1. **Write Comments**: Add comments explaining the functionality of your code.
2. **README File**: Include a `README.md` file with setup, usage instructions, and an explanation of the project.


## Help Others by Sharing Your Solutions!

Once you’ve built a real-time search filter, share it on platforms like GitHub. Encourage others to try it out and gain feedback to improve your project further.


This challenge will boost your skills in DOM manipulation, asynchronous data handling, and search filtering with large datasets.