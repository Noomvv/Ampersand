const products = document.querySelectorAll('.product'); // Все блоки продуктов
const modal = document.getElementById('modal'); // Модальное окно
const overlay = document.getElementById('overlay'); // Затемняющий фон
const modalTitle = document.getElementById('modal-title'); // Заголовок модального окна
const modalInfo = document.getElementById('modal-info'); // Описание модального окна
const closeModal = document.getElementById('close-modal'); // Кнопка закрытия

const sections = document.querySelectorAll('section'); // Все теги section

// Обработчик для каждого блока продукта
products.forEach(product => {
    product.addEventListener('click', () => {
        // Получаем данные из атрибутов
        const title = product.getAttribute('data-title');
        const info = product.getAttribute('data-info');

        // Устанавливаем данные в модальное окно
        modalTitle.textContent = title;
        modalInfo.textContent = info;

        // Размытие всех section и отключение скроллинга
        sections.forEach(section => section.classList.add('blurred'));
        document.body.classList.add('no-scroll');

        // Показ модального окна и overlay
        modal.style.display = 'block';
        overlay.style.display = 'block';
    });
});

// Функция закрытия модального окна
function closeModalHandler() {
    // Убираем размытие и восстанавливаем скроллинг
    sections.forEach(section => section.classList.remove('blurred'));
    document.body.classList.remove('no-scroll');

    modal.style.display = 'none';
    overlay.style.display = 'none';
}

closeModal.addEventListener('click', closeModalHandler);
overlay.addEventListener('click', closeModalHandler);