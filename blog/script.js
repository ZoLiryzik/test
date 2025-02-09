document.addEventListener('DOMContentLoaded', () => {
    fetch('posts.json')
        .then(response => response.json())
        .then(data => {
            const postsContainer = document.getElementById('posts-container');
            data.posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.className = 'post';
                postElement.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.content}</p>
                `;
                postsContainer.appendChild(postElement);
            });
        })
        .catch(error => console.error('Ошибка загрузки данных:', error));
});
