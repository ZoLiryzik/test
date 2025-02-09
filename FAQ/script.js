document.addEventListener('DOMContentLoaded', () => {
    fetch('faq.json')
        .then(response => response.json())
        .then(data => {
            const faqContainer = document.getElementById('faq-container');
            data.faq.forEach(item => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <div class="faq-question">${item.question}</div>
                    <div class="faq-answer">${item.answer}</div>
                `;
                faqContainer.appendChild(listItem);
            });
        })
        .catch(error => console.error('Ошибка загрузки данных:', error));
});
