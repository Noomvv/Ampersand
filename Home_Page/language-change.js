document.querySelector('.language-selector').addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;

    const translations = {
        en: {
            'Добро пожаловать в Ampersand Bank': 'Welcome to Ampersand Bank',
            'Соединяем ваши возможности с финансами': 'Connecting your opportunities with finance',
            'Испытайте бесшовные финансовые услуги, разработанные, чтобы помочь вам достичь ваших целей. Присоединяйтесь к тысячам клиентов, которые доверяют нам свое будущее.':
                'Experience seamless financial services designed to help you achieve your goals. Join thousands of customers who trust us with their future.',
            'Открыть счёт': 'Open Account',
            'Курсы обмена': 'Exchange Rates',
            'Наши продукты': 'Our products',
            'Отзывы': 'Feedback',
            'Мы ценим доверие наших клиентов и стремимся предоставлять исключительные услуги и финансовые решения. Ваши отзывы помогают нам расти и улучшаться каждый день. Вот что некоторые из наших клиентов говорят о своем опыте с нами:':
                'We value the trust our customers place in us and strive to provide exceptional service and financial solutions. Your feedback helps us grow and improve every day. Here’s what some of our customers have to say about their experiences with us:',
            'Все права защищены': 'All Rights Reserved',
            'Политика конфиденциальности': 'Privacy Policy',
            'Открытие сберегательного счета было одним из лучших решений, которые я принял. Процесс был настолько гладким, и команда обслуживания клиентов помогала мне на каждом этапе. Я в восторге от того, как мои сбережения выросли благодаря конкурентоспособным процентным ставкам!':
                'Opening a Savings Account was one of the best decisions I’ve made. The process was so smooth, and the customer service team guided me every step of the way. I’m thrilled with how my savings have grown thanks to the competitive interest rates!',
            'Я использую текущий счет уже более года, и мне нравится удобство, которое он предлагает. Мобильное приложение делает управление моими финансами легким, и у меня никогда не было проблем с доступом к моим средствам. Настоятельно рекомендую!':
                'I’ve been using the Checking Account for over a year now, and I love the convenience it offers. The mobile app makes managing my finances a breeze, and I’ve never had any issues with accessing my funds. Highly recommend!',
            'Когда мне понадобилась ипотека, этот банк сделал процесс настолько простым. Кредитный специалист был невероятно полезен, объясняя все условия в деталях и находя план погашения, который подходил моему бюджету. Я не могу быть счастливее с моим новым домом! Спасибо!':
                'When I needed a mortgage, this bank made the process so straightforward. The loan officer was incredibly helpful, explaining all the terms in detail and finding a repayment plan that fit my budget. I couldn’t be happier with my new home! Thank you!',
            'Достигайте своих мечт с нашим ассортиментом кредитов и ипотек. От личных кредитов до финансирования жилья, мы предлагаем настраиваемые решения с конкурентоспособными ставками и гибкими условиями погашения. Позвольте нам направить вас к финансовой свободе с экспертной поддержкой на каждом этапе.':
                'Achieve your dreams with our range of Loans and Mortgages. From personal loans to home financing, we offer customizable solutions with competitive rates and flexible repayment terms. Let us guide you toward financial freedom with expert support every step of the way.',
            'Закрыть': 'Close',
            'Maksim': 'Maksim',
            'Stanislav': 'Stanislav',
            'Danil': 'Danil',
            // Добавьте больше переводов по мере необходимости
        },
        ru: {
            'Welcome to Ampersand Bank': 'Добро пожаловать в Ampersand Bank',
            'Connecting your opportunities with finance': 'Соединяем ваши возможности с финансами',
            'Experience seamless financial services designed to help you achieve your goals. Join thousands of customers who trust us with their future.':
                'Испытайте бесшовные финансовые услуги, разработанные, чтобы помочь вам достичь ваших целей. Присоединяйтесь к тысячам клиентов, которые доверяют нам свое будущее.',
            'Open Account': 'Открыть счёт',
            'Exchange Rates': 'Курсы обмена',
            'Our products': 'Наши продукты',
            'Feedback': 'Отзывы',
            'We value the trust our customers place in us and strive to provide exceptional service and financial solutions. Your feedback helps us grow and improve every day. Here’s what some of our customers have to say about their experiences with us:':
                'Мы ценим доверие наших клиентов и стремимся предоставлять исключительные услуги и финансовые решения. Ваши отзывы помогают нам расти и улучшаться каждый день. Вот что некоторые из наших клиентов говорят о своем опыте с нами:',
            'All Rights Reserved': 'Все права защищены',
            'Privacy Policy': 'Политика конфиденциальности',
            'Opening a Savings Account was one of the best decisions I’ve made. The process was so smooth, and the customer service team guided me every step of the way. I’m thrilled with how my savings have grown thanks to the competitive interest rates!':
                'Открытие сберегательного счета было одним из лучших решений, которые я принял. Процесс был настолько гладким, и команда обслуживания клиентов помогала мне на каждом этапе. Я в восторге от того, как мои сбережения выросли благодаря конкурентоспособным процентным ставкам!',
            'I’ve been using the Checking Account for over a year now, and I love the convenience it offers. The mobile app makes managing my finances a breeze, and I’ve never had any issues with accessing my funds. Highly recommend!':
                'Я использую текущий счет уже более года, и мне нравится удобство, которое он предлагает. Мобильное приложение делает управление моими финансами легким, и у меня никогда не было проблем с доступом к моим средствам. Настоятельно рекомендую!',
            'When I needed a mortgage, this bank made the process so straightforward. The loan officer was incredibly helpful, explaining all the terms in detail and finding a repayment plan that fit my budget. I couldn’t be happier with my new home! Thank you!':
                'Когда мне понадобилась ипотека, этот банк сделал процесс настолько простым. Кредитный специалист был невероятно полезен, объясняя все условия в деталях и находя план погашения, который подходил моему бюджету. Я не могу быть счастливее с моим новым домом! Спасибо!',
            'Achieve your dreams with our range of Loans and Mortgages. From personal loans to home financing, we offer customizable solutions with competitive rates and flexible repayment terms. Let us guide you toward financial freedom with expert support every step of the way.':
                'Достигайте своих мечт с нашим ассортиментом кредитов и ипотек. От личных кредитов до финансирования жилья, мы предлагаем настраиваемые решения с конкурентоспособными ставками и гибкими условиями погашения. Позвольте нам направить вас к финансовой свободе с экспертной поддержкой на каждом этапе.',
            'Close': 'Закрыть',
            'Maksim': 'Maksim',
            'Stanislav': 'Stanislav',
            'Danil': 'Danil',
            // Добавьте больше переводов по мере необходимости
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