document.addEventListener('DOMContentLoaded', function() {
    fetch('news.json')
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById('news-container');
            data.forEach(newsItem => {
                const newsElement = document.createElement('div');
                newsElement.classList.add('news-item');
                newsElement.innerHTML = `
                    <h2>${newsItem.title}</h2>
                    <p>${newsItem.date}</p>
                    <p>${newsItem.content}</p>
                `;
                newsContainer.appendChild(newsElement);
            });
        })
        .catch(error => console.error('Ошибка загрузки новостей:', error));
});
