fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const tabsContainer = document.getElementById('tabs-container');
        const contentContainer = document.getElementById('content-container');

        data.forEach((item, index) => {
            // Создаем вкладки
            const tabLink = document.createElement('button');
            tabLink.className = 'tab-link';
            tabLink.innerText = item.tab;
            tabLink.onclick = () => openTab(index);
            tabsContainer.appendChild(tabLink);

            // Создаем контент для каждой вкладки
            const tabContent = document.createElement('div');
            tabContent.className = 'tab-content';
            tabContent.id = `tab${index}`;
            tabContent.innerHTML = `<h2>${item.title}</h2><p>${item.content}</p>`;
            contentContainer.appendChild(tabContent);
        });

        // Функция для открытия вкладки
        function openTab(index) {
            const tabContents = document.getElementsByClassName('tab-content');
            const tabLinks = document.getElementsByClassName('tab-link');

            for (let i = 0; i < tabContents.length; i++) {
                tabContents[i].style.display = 'none';
                tabLinks[i].classList.remove('active');
            }

            document.getElementById(`tab${index}`).style.display = 'block';
            tabLinks[index].classList.add('active');
        }

        // Открыть первую вкладку по умолчанию
        openTab(0);
    })
    .catch(error => console.error('Ошибка загрузки данных:', error));
