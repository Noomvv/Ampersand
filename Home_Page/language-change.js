document.querySelector('.language-selector').addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;

    const translations = {
        en: {
            'Добро пожаловать в Ampersand Bank': 'Welcome to Ampersand Bank',
            'Соединяем ваши возможности с финансами': 'Connecting your opportunities with finance',
            'Испытайте безупречные финансовые услуги, разработанные, чтобы помочь вам достичь ваших целей. Присоединяйтесь к тысячам клиентов, которые доверяют нам свое будущее.':
                'Experience seamless financial services designed to help you achieve your goals. Join thousands of customers who trust us with their future.',
            'Открыть счёт': 'Open Account',
            'Курсы валют': 'Exchange Rates',
            'Наши продукты': 'Our products',
            'Отзывы': 'Feedback',
            'Все права защищены': 'All Rights Reserved',
            'Политика конфиденциальности': 'Privacy Policy',
        },
        ru: {
            'Welcome to Ampersand Bank': 'Добро пожаловать в Ampersand Bank',
            'Connecting your opportunities with finance': 'Соединяем ваши возможности с финансами',
            'Experience seamless financial services designed to help you achieve your goals. Join thousands of customers who trust us with their future.':
                'Испытайте безупречные финансовые услуги, разработанные, чтобы помочь вам достичь ваших целей. Присоединяйтесь к тысячам клиентов, которые доверяют нам свое будущее.',
            'Open Account': 'Открыть счёт',
            'Exchange Rates': 'Курсы валют',
            'Our products': 'Наши продукты',
            'Feedback': 'Отзывы',
            'All Rights Reserved': 'Все права защищены',
            'Privacy Policy': 'Политика конфиденциальности',
        },
    };

    // Меняем класс для переключения шрифта
    document.body.classList.remove('ru', 'en');
    document.body.classList.add(selectedLanguage);

    // Пройтись по всем текстовым узлам и заменить текст
    const replaceTextContent = (node) => {
        if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== '') {
            const text = node.nodeValue.trim();

            // Сохранить оригинальный текст
            const parent = node.parentNode;
            if (!parent.dataset.originalText) {
                parent.dataset.originalText = text;
            }

            // Выбрать текст из перевода или вернуть оригинал
            const translatedText =
                translations[selectedLanguage][text] || parent.dataset.originalText;
            node.nodeValue = translatedText;
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            node.childNodes.forEach(replaceTextContent);
        }
    };

    document.body.childNodes.forEach(replaceTextContent);
});