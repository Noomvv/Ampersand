const dialog = document.getElementById('myDialog');
const openLinks = document.querySelectorAll('.openDialog'); // Все ссылки для открытия
const closeButton = document.getElementById('closeDialog'); // Кнопка закрытия

// Элемент, который будем блюрить
const bodyContent = document.body;

// Открыть модальное окно
openLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Отключаем стандартное действие ссылки

        // Открываем диалог и блокируем скроллинг
        dialog.showModal();
        document.body.classList.add('no-scroll'); // Блокируем скроллинг
        bodyContent.classList.add('blur-background'); // Блюрим фон
    });
});

// Закрыть модальное окно
closeButton.addEventListener('click', () => {
    dialog.close(); // Закрываем диалог

    // Убираем блокировку скроллинга и блюр
    document.body.classList.remove('no-scroll');
    bodyContent.classList.remove('blur-background');
});