# Build Your Own Custom State Management System

In modern web applications, effective state management is crucial for maintaining a smooth user experience and ensuring data consistency. This challenge invites you to build your own custom state management system from scratch, providing deep insights into how state management libraries work while enhancing your JavaScript skills.

## The Challenge - Building a Custom State Management System

The functional requirements for your state management system include:

- **Centralized State Store**: Create a store that holds the application's state.
- **Get State Method**: Implement a method to retrieve the current state.
- **Set State Method**: Allow state updates through a dedicated method.
- **Subscription System**: Enable components to subscribe to state changes and be notified when the state updates.
- **Middleware Support**: Integrate middleware for handling asynchronous actions and logging state changes.

## Step Zero: Set Up Your Environment

- **Choose Your Language**: Implement this challenge in plain JavaScript or use a framework/library like React or Vue for integration.
- **Set Up Your Project**: Create a basic HTML file structure and link a JavaScript file for your state management library.

## Step One: Build the State Store

- Create a class for your state management system that initializes with a default state and holds a list of listeners for state changes.

**Example**:

```javascript
class StateManager {
    constructor(initialState) {
        this.state = initialState;
        this.listeners = [];
    }

    // Methods will be added here
}
```

## Step Two: Implement Get State Method

- Add a method to retrieve the current state from the state store.

**Example**:
```javascript
getState() {
    return this.state;
}
```
## Step Three: Implement Set State Method

- Create a method to update the state. Ensure that it triggers a notification to all subscribers when the state changes.

**Example**:

```javascript
setState(newState) {
    this.state = { ...this.state, ...newState };
    this.notify();
}
```
## Step Four: Add Subscription System

- Develop a subscription system that allows components to listen for state changes. Subscribers should receive the updated state when changes occur.

**Example**:

```javascript
subscribe(listener) {
    this.listeners.push(listener);
    return () => {
        this.listeners = this.listeners.filter(l => l !== listener);
    };
}

notify() {
    this.listeners.forEach(listener => listener(this.state));
}
```
## Step Five: Implement Middleware Support

- Extend your state management system to support middleware for handling asynchronous actions or logging state transitions.


## Step Six: Build a Demo Application

- Create a simple demo application (e.g., a to-do list) that uses your state management system. Connect UI components to the state store using subscriptions and state updates.


## Step Seven: Optional - Testing Your Code

- **Unit Testing**: Write unit tests for your state management logic using a testing framework like Jest or Mocha. Ensure that your methods behave as expected and handle edge cases correctly.
- **Example Test**:
    
    ```jsx
    
    test('setState should update the state and notify listeners', () => {
        const manager = new StateManager({ count: 0 });
        const listener = jest.fn();
        manager.subscribe(listener);
        manager.setState({ count: 1 });
        expect(manager.getState()).toEqual({ count: 1 });
        expect(listener).toHaveBeenCalledWith({ count: 1 });
    });
    
    ```


## Step Eight: Optional - Code Quality with ESLint

- **Set Up ESLint**: Use ESLint to enforce code quality and consistency. Configure it to check for common JavaScript issues and best practices.
- **Integrate with Your Workflow**: Add ESLint scripts to your package.json file to run linting checks as part of your development process.



## The Final Step: Clean Up and Document

In this step, ensure your code is clean, well-organized, and documented.

- Write comments explaining your code and its functionality.
- Consider writing a README file if you’re sharing your project on GitHub.


## Help Others by Sharing Your Solutions!

If your solution is an example that other developers can learn from, please share it on platforms like GitHub or GitLab. Let others know about your work, and don’t hesitate to reach out for feedback!