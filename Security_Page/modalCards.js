const applyButtons = document.querySelectorAll('.cards .visa a'); // Кнопки "Apply for a card"
const modal = document.getElementById('modal'); // Модальное окно
const overlay = document.getElementById('overlay'); // Затемняющий слой
const closeModalButton = document.getElementById('close-modal'); // Кнопка закрытия модального окна

// Открытие модального окна
function openModal() {
    modal.style.display = 'block'; // Показываем модальное окно
    overlay.style.display = 'block'; // Показываем затемняющий слой
    // Добавляем блюр на страницу и блокируем прокрутку
    document.body.classList.add('modal-open');
}

// Закрытие модального окна
function closeModal() {
    modal.style.display = 'none'; // Скрываем модальное окно
    overlay.style.display = 'none'; // Скрываем затемняющий слой
    // Убираем блюр и восстанавливаем прокрутку
    document.body.classList.remove('modal-open');
}

// Добавляем обработчики для всех кнопок "Apply for a card"
applyButtons.forEach(button => {
    button.addEventListener('click', openModal);
});

// Обработчик для закрытия модального окна
closeModalButton.addEventListener('click', closeModal);

// Закрытие окна при клике на затемняющий слой
overlay.addEventListener('click', closeModal);