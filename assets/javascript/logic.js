// logic.js

// Get the theme toggle button
const themeToggle = document.getElementById('theme-toggle');

// Add click event listener to the theme toggle button
themeToggle.addEventListener('click', function() {
    // Toggle the 'dark-mode' class on the body element
    document.body.classList.toggle('dark-mode');
});

// Get the back button
const backButton = document.getElementById('back-button');

// Add click event listener to the back button
backButton.addEventListener('click', function() {
    // Redirect to the landing page
    window.location.href = 'index.html';
});