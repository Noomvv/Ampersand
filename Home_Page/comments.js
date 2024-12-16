const feedback2 = document.querySelector('.feedback2');
const comments = document.querySelectorAll('.comment');
const totalComments = comments.length;

// Клонируем все элементы для бесконечной прокрутки
const clone = (elem) => {
    const clonedElems = elem.cloneNode(true);
    feedback2.appendChild(clonedElems);
};

// Клонируем блок с комментариями для создания зацикленной карусели
clone(feedback2);

let currentIndex = 0;

function moveSlide() {
    // Если все комментарии прокручены, возвращаем в начало без анимации
    if (currentIndex >= totalComments) {
        feedback2.style.transition = 'none'; // Отключаем анимацию
        feedback2.style.transform = `translateX(0)`; // Перемещаем в начало
        currentIndex = 0;
        setTimeout(() => {
            feedback2.style.transition = 'transform 0.5s ease-in-out'; // Включаем анимацию снова
        }, 50);
    } else {
        feedback2.style.transform = `translateX(-${(currentIndex + 1) * 33.33}%)`;
        currentIndex++;
    }
}

// Используем setInterval для автоматического сдвига с интервалом 3 секунды
setInterval(moveSlide, 3000);