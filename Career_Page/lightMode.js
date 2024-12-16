
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Проверяем сохраненную тему
    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-theme');
        themeToggleBtn.textContent = 'Темная тема';
    }

    // Добавляем обработчик клика
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('light-theme');

        if (body.classList.contains('light-theme')) {
            themeToggleBtn.textContent = 'Темная тема';
            localStorage.setItem('theme', 'light');
        } else {
            themeToggleBtn.textContent = 'Светлая тема';
            localStorage.setItem('theme', 'dark');
        }
    });