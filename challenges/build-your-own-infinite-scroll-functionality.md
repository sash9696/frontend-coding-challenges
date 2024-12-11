# Build Your Own Infinite Scroll with Dynamic API Integration

Infinite scroll is a widely-used technique in web applications that loads content dynamically as the user scrolls down. This challenge will help you implement an infinite scrolling mechanism while fetching data from an API, managing state, and providing a seamless user experience.

## The Challenge - Implement Infinite Scroll with API Integration

Your task is to create a simple web page that loads data from an API incrementally as the user scrolls toward the bottom. This feature will test your skills in **API interaction**, **event handling**, and **efficient state management**.

## Requirements:

- **Dynamic Content Loading**: Fetch more data as the user scrolls near the end of the current content.
- **API Pagination**: Track and request the correct page of data from the API.
- **Loading Indicator**: Show a loading spinner or message while fetching new data.
- **Error Handling**: Gracefully display errors or retry if the API request fails.

## Step Zero: Set Up Your Environment

1. **Choose Your Tech Stack**:
    - Use plain JavaScript or a library/framework like React, Vue, or Angular.
2. **Pick an API**:
    - For this challenge, you can use <a href="https://jsonplaceholder.typicode.com/posts" target="_blank">JSONPlaceholder</a>
    to fetch mock data.
    - Feel free to use any other paginated API.
3. **Create a Basic Page Structure**:
    - Build a simple HTML structure with a container for the content and basic styling.


## Step One: Basic API Integration

Start by implementing a function to fetch data from the API.

1. Fetch the first page of data when the page loads.
2. Display the data in a list or grid format.

Example function to fetch and display data:

```jsx

let currentPage = 1;
const apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // API endpoint
const contentContainer = document.getElementById('content'); // Container for posts

async function fetchData(page) {
  try {
    const response = await fetch(`${apiUrl}?_page=${page}&_limit=10`); // Fetch 10 items per page
    if (!response.ok) throw new Error('Error fetching data');
    const data = await response.json();
    appendData(data);
  } catch (error) {
    console.error('API Error:', error);
    showError('Unable to load more content.');
  }
}

function appendData(data) {
  data.forEach((item) => {
    const post = document.createElement('div');
    post.className = 'post';
    post.innerHTML = `<h3>${item.title}</h3><p>${item.body}</p>`;
    contentContainer.appendChild(post);
  });
}

fetchData(currentPage);

```

## Step Two: Add Infinite Scroll Logic

Implement a scroll event listener to detect when the user reaches the bottom of the page. When detected:

1. Increment the `currentPage` counter.
2. Fetch the next page of data and append it to the existing content.

Example:

```jsx

window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    currentPage++;
    fetchData(currentPage);
  }
});

```

## Step Three: Show a Loading Indicator

Add a spinner or message to indicate that new content is being loaded.

1. Display the spinner when fetching data.
2. Hide the spinner once data is loaded.

Example:

```jsx

const loadingIndicator = document.getElementById('loading');

async function fetchDataWithLoading(page) {
  loadingIndicator.style.display = 'block';
  await fetchData(page);
  loadingIndicator.style.display = 'none';
}

```

Update the scroll logic to call `fetchDataWithLoading`.

## Step Four: Handle Edge Cases

1. **No More Data**: Stop fetching when the API returns no new data.
2. **Error Handling**: Display an error message if the API request fails.

Update `fetchData` to check if data is empty:

```jsx

async function fetchData(page) {
  try {
    const response = await fetch(`${apiUrl}?_page=${page}&_limit=10`);
    if (!response.ok) throw new Error('Error fetching data');
    const data = await response.json();
    if (data.length === 0) {
      window.removeEventListener('scroll', handleScroll);
      showError('No more content to load.');
      return;
    }
    appendData(data);
  } catch (error) {
    console.error('API Error:', error);
    showError('Unable to load more content.');
  }
}

```

## Step Five: Optional Enhancements

1. **Throttle Scroll Events**: Use a throttling library (e.g., `lodash.throttle`) to improve performance.
2. **Custom Styles**: Style the content container and loading spinner for better UX.
3. **Testing**: Write unit tests to validate data fetching and scroll behavior.

## Share Your Solution!

Once completed, share your infinite scroll solution on platforms like GitHub. This challenge demonstrates skills relevant to building dynamic web applications and optimizing user experiences.