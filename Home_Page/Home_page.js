// script.js

// URL для API (можно заменить на другой API)
const apiUrl = "https://api.exchangerate-api.com/v4/latest/USD";

// Элемент, куда будут загружаться курсы
const exchangeRatesContainer = document.getElementById("exchange-rates");

// Функция для получения и отображения данных
async function fetchExchangeRates() {
    try {
        // Получаем данные с API
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Курсы валют
        const rates = data.rates;

        // Обновляем курсы валют в элементах списка
        const listItems = exchangeRatesContainer.querySelectorAll('li');
        listItems[0].querySelector('strong').textContent = rates.UZS;
        listItems[1].querySelector('strong').textContent = rates.EUR;
        listItems[2].querySelector('strong').textContent = rates.RUB;
    } catch (error) {
        // Обработка ошибок
        exchangeRatesContainer.innerHTML = `<p>Error loading exchange rates. Please try again later.</p>`;
        console.error("Error fetching exchange rates:", error);
    }
}

// Вызываем функцию при загрузке страницы
fetchExchangeRates();