document.addEventListener('DOMContentLoaded', () => {
    fetch('reviews.json')
        .then(response => response.json())
        .then(data => {
            const reviewsContainer = document.getElementById('reviews-container');
            data.reviews.forEach(review => {
                const reviewElement = document.createElement('div');
                reviewElement.className = 'review';
                reviewElement.innerHTML = `
                    <h2>${review.name}</h2>
                    <p>${review.comment}</p>
                    <div class="rating">Рейтинг: ${review.rating}</div>
                `;
                reviewsContainer.appendChild(reviewElement);
            });
        })
        .catch(error => console.error('Ошибка загрузки данных:', error));
});
