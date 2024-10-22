const challengeList = document.getElementById('challenge-list');
const contentArea = document.getElementById('content-area');
let challenges = []; // Declare challenges array in a higher scope

// Fetch and display the challenge list from JSON
async function fetchChallengeList() {
    try {
        const response = await fetch('challenges.json'); // Path to your JSON file
        if (!response.ok) {
            throw new Error(`Failed to fetch challenges: ${response.statusText}`);
        }

        challenges = await response.json(); // Store the fetched challenges in the global array

        challenges.forEach(challenge => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');

            // Format the challenge name for the link
            const challengeNameFormatted = challenge.name.toLowerCase().replace(/\s+/g, '-');

            link.href = `#${challengeNameFormatted}`; // Use hash routing
            link.innerText = challenge.name;

            // Add an event listener to load the challenge when clicked
            link.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent default anchor behavior
                loadChallenge(challenge.file); // Load the corresponding static file
                window.location.hash = challengeNameFormatted; // Update the hash
            });

            listItem.appendChild(link);
            challengeList.appendChild(listItem);
        });

        // Initial load based on current hash
        if (window.location.hash) {
            const currentChallenge = window.location.hash.slice(1);
            loadChallengeFromHash(currentChallenge);
        }
    } catch (error) {
        console.error('Error fetching challenge list:', error);
        contentArea.innerHTML = '<p>Error fetching challenges. Please try again later.</p>';
    }
}

// Load Markdown content based on the challenge file
async function loadChallenge(file) {
    try {
        const response = await fetch(file);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        contentArea.innerHTML = marked(text); // Convert Markdown to HTML
    } catch (error) {
        console.error('Error loading challenge content:', error);
        contentArea.innerHTML = '<p>Error loading challenge content. Please try again later.</p>'; // Display an error message
    }
}

// Load challenge based on the current hash
function loadChallengeFromHash(hash) {
    const challengeName = hash.replace(/-/g, ' '); // Reverse formatting
    const challenge = challenges.find(ch => ch.name.toLowerCase() === challengeName.toLowerCase());
    if (challenge) {
        loadChallenge(challenge.file);
    } else {
        contentArea.innerHTML = '<p>Challenge not found.</p>'; // Handle not found case
    }
}


// Initialize
document.addEventListener('DOMContentLoaded', () => {
    fetchChallengeList();

    if(window.location.hash == ''){
        loadChallenge('challenges/challenges.md')
    }
    
    window.addEventListener('hashchange', () => {
        const currentChallenge = window.location.hash.slice(1);
        loadChallengeFromHash(currentChallenge);
    });
});

