const modeToggle = document.getElementById('modeToggle');
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle dark mode
    modeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        navbar.classList.toggle('dark-mode');
        navLinks.forEach(link => {
            link.classList.toggle('dark-mode');
        });

        // Switch the icon and update the title attribute based on the mode
        if (body.classList.contains('dark-mode')) {
            modeToggle.classList.remove('fa-sun'); // Change to dark mode icon
            modeToggle.classList.add('fa-moon'); // Use moon icon for dark mode
            modeToggle.setAttribute('title', 'Switch to Light Mode'); // Update title
            localStorage.setItem('theme', 'dark'); // Save dark mode preference
        } else {
            modeToggle.classList.remove('fa-moon'); // Change to light mode icon
            modeToggle.classList.add('fa-sun'); // Use sun icon for light mode
            modeToggle.setAttribute('title', 'Switch to Dark Mode'); // Update title
            localStorage.setItem('theme', 'light'); // Save light mode preference
        }
    });

   
    