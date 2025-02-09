document.addEventListener('DOMContentLoaded', function() {
    fetch('news.json')
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById('news-container');
            const searchInput = document.getElementById('search-input');

            function displayNews(newsItems) {
                newsContainer.innerHTML = '';
                newsItems.forEach(newsItem => {
                    const newsElement = document.createElement('div');
                    newsElement.classList.add('news-item');
                    newsElement.innerHTML = `
                        <h2>${newsItem.title}</h2>
                        <p>${newsItem.date}</p>
                        <p>${newsItem.content}</p>
                    `;
                    newsContainer.appendChild(newsElement);
                });
            }

            searchInput.addEventListener('input', function() {
                const searchQuery = searchInput.value.toLowerCase();
                const filteredNews = data.filter(newsItem => 
                    newsItem.title.toLowerCase().includes(searchQuery) ||
                    newsItem.content.toLowerCase().includes(searchQuery)
                );
                displayNews(filteredNews);
            });

            displayNews(data);
        })
        .catch(error => console.error('Ошибка загрузки новостей:', error));
});
