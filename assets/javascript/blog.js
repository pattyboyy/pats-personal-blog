// blog.js

// Get the blog posts container element
const blogPostsContainer = document.getElementById('blog-posts');

// Get blog posts from localStorage
const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

// Render blog posts
function renderBlogPosts() {
    // Clear the blog posts container
    blogPostsContainer.innerHTML = '';

    // Loop through the blog posts array and create HTML elements for each post
    blogPosts.forEach(function(post) {
        const blogPostElement = document.createElement('div');
        blogPostElement.classList.add('blog-post');

        const titleElement = document.createElement('h3');
        titleElement.textContent = post.title;

        const metaElement = document.createElement('p');
        metaElement.classList.add('meta');
        metaElement.textContent = `By ${post.username} | ${new Date(post.date).toLocaleString()}`;

        const contentElement = document.createElement('p');
        contentElement.textContent = post.content;

        blogPostElement.appendChild(titleElement);
        blogPostElement.appendChild(metaElement);
        blogPostElement.appendChild(contentElement);

        blogPostsContainer.appendChild(blogPostElement);
    });
}

// Render blog posts on page load
renderBlogPosts();