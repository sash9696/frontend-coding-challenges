# Build Your Own Router Tool

This challenge is to build your own version of a client-side router for Single Page Applications (SPAs). A router allows you to navigate between different views or pages without refreshing the entire web page, enhancing the user experience.

The design of this router will follow good software engineering principles, ensuring clean and maintainable code.

## The Challenge - Building a Router

The functional requirements for your router include:

- **Basic Routing**: Ability to navigate to different views based on URL hashes.
- **Dynamic Route Handling**: Support for dynamic routes with parameters.
- **404 Handling**: Gracefully handle undefined routes with a 404 page.
- **History Management**: Implement browser history management for navigation.

## Step Zero

1. **Set up your environment** to begin developing and testing your solution.

   - **Choose Your Language**: You can implement this in plain JavaScript or with a framework/library like React, Vue, or Angular.
   - **Set Up Your Project**: Create a basic HTML file structure and link a JavaScript file for your router.

## Step One: Basic Hash Routing

In this step, your goal is to implement a basic hash-based routing mechanism.

1. Create a simple router that listens for changes in the URL hash.
2. Based on the hash, render different content in a specified DOM element.

### Example:

```javascript
// router.js
const routes = {
    home: '<h1>Home</h1><p>Welcome to the home page!</p>',
    about: '<h1>About</h1><p>This is the about page.</p>',
    contact: '<h1>Contact</h1><p>Get in touch!</p>'
};

function router() {
    const hash = window.location.hash.substring(1) || 'home';
    document.getElementById('view').innerHTML = routes[hash] || '<h1>404 Not Found</h1>';
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);


## Step Two: Dynamic Route Handling

Enhance your router to support dynamic routes.

1. Allow for routes that can accept parameters (e.g., `/user/:id`).
2. Update the content displayed based on the parameter values.

### Example:

```javascript
const routes = {
    home: '<h1>Home</h1>',
    about: '<h1>About</h1>',
    user: (id) => `<h1>User: ${id}</h1>` // Dynamic route
};

// Update router function to handle dynamic routing

## Step Three: 404 Handling

Improve your router by adding a 404 page for undefined routes.

1. When a user navigates to an unknown route, display a friendly 404 message.

### Example Update to Router:

```javascript
function router() {
    const hash = window.location.hash.substring(1) || 'home';
    const route = routes[hash];

    if (typeof route === 'function') {
        // Handle dynamic route
        const id = hash.split('/')[1]; // Extract id from route
        document.getElementById('view').innerHTML = route(id);
    } else {
        document.getElementById('view').innerHTML = route || '<h1>404 Not Found</h1>';
    }
}

## Step Four: History Management

Integrate browser history management to allow users to navigate back and forth between pages.

1. Use the History API (e.g., `pushState`, `replaceState`) to manage the history stack.
2. Implement browser back and forward functionality.

### Example Update to Router:

```javascript
function navigateTo(hash) {
    window.location.hash = hash;
    const route = routes[hash] || '<h1>404 Not Found</h1>';
    document.getElementById('view').innerHTML = typeof route === 'function' ? route() : route;
    window.history.pushState({ hash }, '', `#${hash}`);
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

// Example of a back and forward button handling
document.getElementById('backButton').addEventListener('click', () => {
    window.history.back();
});

document.getElementById('forwardButton').addEventListener('click', () => {
    window.history.forward();
});

## The Final Step: Clean Up and Document

In this step, ensure your code is clean, well-organized, and documented.

1. Write comments explaining your code and its functionality.
2. Consider writing a README file if you’re sharing your project on GitHub.

### Help Others by Sharing Your Solutions!

If your solution is an example that other developers can learn from, please share it on platforms like GitHub or GitLab. Let others know about your work, and don’t hesitate to reach out for feedback!

