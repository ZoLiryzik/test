fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const infoContainer = document.getElementById('info-container');

        data.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';

            const title = document.createElement('h2');
            title.innerText = item.title;
            card.appendChild(title);

            const content = document.createElement('p');
            content.innerText = item.content;
            card.appendChild(content);

            infoContainer.appendChild(card);
        });
    })
    .catch(error => console.error('Ошибка загрузки данных:', error));
