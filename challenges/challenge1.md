# Challenge 1: Reverse a String

## Instructions:
Create a function that accepts a string as input and returns the reversed version of that string.

**Example**:
- Input: `"hello"`
- Output: `"olleh"`

## Code Snippet:
Here’s a sample implementation in JavaScript:

```javascript
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage
console.log(reverseString("hello")); // Output: "olleh"
