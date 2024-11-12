# Build Your Own UI Library

This challenge will guide you through creating a **basic UI library** using **React** or **vanilla JavaScript**. You’ll develop reusable components like buttons, modals, tooltips, and more, packaged for easy integration into other projects. By the end of this challenge, you’ll have a published UI library that you can share and use in your own applications.

## The Challenge - Create and Publish a Basic UI Library

Your goal is to build a simple, customizable UI component library from scratch, package it for distribution, and publish it to npm or a similar platform. This challenge will enhance your skills in component development, modular code structuring, and package management.

## Requirements:

- **Core Components**:
    - Build essential UI components (e.g., button, modal, tooltip, input field).
    - Ensure each component has customizable properties (e.g., size, color, text).
- **Modular Design**:
    - Structure your library so that each component can be imported individually.
- **Responsive and Accessible**:
    - Make sure components are responsive and follow accessibility best practices (`aria` attributes, keyboard navigation).
- **Documentation**:
    - Create a simple guide for developers to understand how to use your library.
- **Publishing**:
    - Package your library and publish it to **npm** or another package registry.


## Step Zero: Set Up Your Environment

1. **Choose Your Development Path**:
    - Use **React** for a component-based approach or **vanilla JavaScript** for flexibility.
2. **Initialize Your Project**:
    - Set up your project using tools like **Create React App** or a basic **HTML/CSS/JS** setup.
3. **Prepare for Packaging**:
    - If using React, set up **Rollup.js** or **Webpack** for bundling.


## Step One: Build Basic Components

1. **Create a Button Component**:
    - Develop a customizable button with props for size, color, and onClick behavior.
2. **Build a Modal Component**:
    - Implement a modal that can be opened and closed, with customizable content.
3. **Develop a Tooltip Component**:
    - Create a tooltip that can be positioned and styled via props or attributes.

**Example React Button Component**:

```jsx
// Button.js
import React from 'react';

const Button = ({ label, onClick, style }) => {
  return (
    <button style={style} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;

```

**Vanilla JavaScript Button Component**:

```jsx
// button.js
function createButton({ label, onClick, style }) {
  const button = document.createElement('button');
  button.textContent = label;
  Object.assign(button.style, style);
  button.addEventListener('click', onClick);
  return button;
}

```


## Step Two: Ensure Responsiveness and Accessibility

1. **Add CSS Styling**:
    - Use media queries for responsive design.
2. **Accessibility Enhancements**:
    - Implement `aria` attributes and keyboard interactions for modals and buttons.


## Step Three: Bundle and Publish Your Library

1. **Bundle Your Code**:
    - Use **Rollup.js** or **Webpack** for creating a distributable build.
2. **Create `package.json`**:
    - Ensure your `package.json` has the necessary information for publishing.
3. **Publish to npm**:
    - Run `npm publish` to make your library available for public use.

```bash
npm init
npm install rollup --save-dev
npm publish

```


## Optional: Step Four - Documentation and Demo Page

1. **Create a Demo Page**:
    - Develop a simple webpage showcasing the use of each component.
2. **Write Documentation**:
    - Include usage examples, props descriptions, and installation instructions in your `README.md`.


## The Final Step: Share and Iterate

1. **Gather Feedback**:
    - Share your published library and gather feedback from other developers.
2. **Iterate**:
    - Improve your library based on feedback and add more components or features.


## Share Your Solution!

Once you’ve completed your library, share it on GitHub or npm, and tag me or your network for feedback. This challenge will strengthen your understanding of reusable component design, library packaging, and publishing.