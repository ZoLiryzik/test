document.addEventListener('DOMContentLoaded', function() {
    const reviewsElement = document.getElementById('reviews');
    const reviewForm = document.getElementById('reviewForm');
    
    // Загружаем отзывы из JSON-файла
    fetch('reviews.json')
        .then(response => response.json())
        .then(data => {
            data.reviews.forEach(review => {
                const reviewElement = document.createElement('div');
                reviewElement.innerHTML = `<strong>${review.name}</strong><p>${review.text}</p>`;
                reviewsElement.appendChild(reviewElement);
            });
        });

    // Обрабатываем форму добавления нового отзыва
    reviewForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const review = document.getElementById('review').value;

        const reviewElement = document.createElement('div');
        reviewElement.innerHTML = `<strong>${name}</strong><p>${review}</p>`;
        reviewsElement.appendChild(reviewElement);

        // Отправляем новый отзыв на сервер
        fetch('addReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, text: review })
        });

        reviewForm.reset();
    });
});
