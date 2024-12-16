// Обработчик кликов для переворота конкретной карточки
document.querySelectorAll('.person').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped'); // Переключаем класс "flipped" для переворота
    });
});