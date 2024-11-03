# Build Your Own Undo/Redo Functionality 

This challenge introduces you to stack-based data structures, focusing on using **Undo** and **Redo** operations to manage state changes. You'll implement these operations in an **immutable** way to ensure your application state is predictable and unmutated, a key concept in functional programming and React’s state management.

## The Challenge - Implementing Undo/Redo with Immutable State

Your goal is to create a form where users can input values (e.g., `username` and `email`) and use **undo and redo** actions to revert or reapply their changes. By using stack data structures to manage previous and future states, you’ll gain practice with **immutable state management** and learn techniques essential to building user-friendly interfaces.

## Requirements:

- **Undo/Redo Functionality**: Allow users to undo and redo edits made in the form.
- **Immutable Stack Manipulation**: Use JavaScript methods like `concat` and `slice` to preserve state immutability.
- **Basic Form Input Handling**: Create a form with fields such as username and email.


## Step Zero: Set Up Your Development Environment

1. **Choose Your Language/Framework**: You can complete this challenge in React or plain JavaScript, depending on your preference.
2. **Set Up Your Project**: Create a simple HTML structure with a form and Undo/Redo buttons.


## Step One: Define the Data Structure

Create three main pieces of state for tracking form values and history:

- **PreviousStates**: Holds a stack of past form states for undo actions.
- **FutureStates**: Stores the stack of states to restore if a redo action is performed.
- **CurrentForm**: Tracks the present values of the form fields (like `username` and `email`).

In React, this could look like:

```jsx
const [previousStates, setPreviousStates] = useState([]);
const [futureStates, setFutureStates] = useState([]);
const [currentForm, setCurrentForm] = useState({ username: '', email: '' });

```


## Step Two: Update Form and Save Changes to History

Define a function to handle updates to the form fields. This function should:

- Add the current form state to the `previousStates` stack.
- Reset `futureStates` (because new changes mean there’s no “future” state).
- Update `currentForm` with the latest form data.

Here’s an example function:

```jsx
const updateFormData = (newData) => {
  setPreviousStates((prev) => [...prev, currentForm]); // Add current state to previous states
  setFutureStates([]);  // Clear future states on new input
  setCurrentForm(newData);  // Update form with new data
};

```

Connect this function to the form’s `onChange` events, so each change triggers an update.


## Step Three: Implement Undo Functionality

To handle undo actions, define an `undoAction` function:

- Check if `previousStates` contains any entries to revert to. If it does:
    - Retrieve the last form state from `previousStates` and set it as the new `currentForm`.
    - Move the current form state to the `futureStates` stack.
    - Update `previousStates` by removing the last item, keeping the stack immutable.

Here’s an example:

```jsx
const undoAction = () => {
  if (previousStates.length > 0) {
    const lastFormState = previousStates[previousStates.length - 1];
    setPreviousStates((prev) => prev.slice(0, -1));  // Remove last item from previous states
    setFutureStates((next) => [...next, currentForm]);  // Save current state to future states
    setCurrentForm(lastFormState);  // Revert to the previous form state
  }
};

```

Attach `undoAction` to an Undo button in the UI.


## Step Four: Implement Redo Functionality

Define a `redoAction` function to handle redo events:

- If `futureStates` has entries, retrieve the most recent state from `futureStates`.
- Update `currentForm` with this state.
- Push the current form state to the `previousStates` stack.
- Remove the retrieved item from `futureStates`, keeping it immutable.

Example function:

```jsx
const redoAction = () => {
  if (futureStates.length > 0) {
    const nextFormState = futureStates[futureStates.length - 1];
    setFutureStates((next) => next.slice(0, -1));  // Remove last item from future states
    setPreviousStates((prev) => [...prev, currentForm]);  // Save current state to previous states
    setCurrentForm(nextFormState);  // Move to the next form state
  }
};

```

Attach `redoAction` to a Redo button.


## Optional: Step Five - Add ESLint and Unit Testing

1. **Add ESLint**:
    - Install ESLint for code consistency:
        
        ```bash
        npm install eslint --save-dev
        
        ```
        
    - Run ESLint:
        
        ```bash
        npx eslint . --fix
        
        ```
        
2. **Set Up Unit Testing**:
    - Install a testing library (e.g., Jest):
        
        ```bash
        npm install jest --save-dev
        
        ```
        
    - Write tests for each function (`undoAction`, `redoAction`, `updateFormData`) and validate their behavior with different form data.
    - Run your tests:
        
        ```bash
        npm test
        
        ```
        


## Final Step: Documentation and Cleanup

1. **Add Comments**: Document each function and its purpose.
2. **README**: Include a `README.md` with setup instructions, a usage guide, and a description of the challenge.


## Share Your Solution!

When you finish, consider sharing your project on GitHub or other coding platforms. This challenge is an effective exercise in applying stacks, practicing state immutability, and building a functional feature seen in many applications.