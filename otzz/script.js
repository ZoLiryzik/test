document.addEventListener('DOMContentLoaded', () => {
    const reviewsContainer = document.getElementById('reviews-container');

    // Функция для загрузки отзывов
    function loadReviews() {
        fetch('reviews.json')
            .then(response => response.json())
            .then(data => {
                reviewsContainer.innerHTML = '';
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
    }

    loadReviews();

    // Функция для добавления нового отзыва
    document.getElementById('review-form').addEventListener('submit', function(e) {
        e.preventDefault();

        const newReview = {
            name: document.getElementById('name').value,
            comment: document.getElementById('comment').value,
            rating: document.getElementById('rating').value
        };

        fetch('reviews.json')
            .then(response => response.json())
            .then(data => {
                data.reviews.push(newReview);
                saveReviews(data);
            })
            .catch(error => console.error('Ошибка загрузки данных:', error));
    });

    // Функция для сохранения отзывов
    function saveReviews(data) {
        fetch('save_reviews.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            loadReviews();
        })
        .catch(error => console.error('Ошибка сохранения данных:', error));
    }
});
