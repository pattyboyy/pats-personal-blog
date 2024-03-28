// form.js

// Get the form element
const blogForm = document.getElementById('blog-form');

// Add submit event listener to the form
blogForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form input values
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    // Validate form inputs
    if (username.trim() === '' || title.trim() === '' || content.trim() === '') {
        alert('Please fill in all fields');
        return;
    }

    // Create blog post object
    const blogPost = {
        username: username,
        title: title,
        content: content,
        date: new Date().toISOString()
    };

    // Get existing blog posts from localStorage or create an empty array
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    // Add the new blog post to the array
    blogPosts.push(blogPost);

    // Save the updated blog posts array to localStorage
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

    // Redirect to the blog posts page
    window.location.href = 'blog.html';
});