document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, 400); // Задержка 2 секунды
                observer.unobserve(entry.target); // Снимаем наблюдение после появления
            }
        });
    }, { threshold: 0.1 }); // Секция становится видимой, если 10% ее высоты попадает в зону видимости

    sections.forEach(section => {
        observer.observe(section);
    });
});