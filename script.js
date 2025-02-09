document.addEventListener('DOMContentLoaded', () => {
    fetch('users.json')
        .then(response => response.json())
        .then(data => {
            const userList = document.getElementById('user-list');
            data.users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = `${user.name} (${user.age} лет) - ${user.city}`;
                userList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Ошибка загрузки данных:', error));
});
