document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signupForm');
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');

    function capitalizeFirstLetter(inputField) {
        let value = inputField.value;
        if (value.length > 0) {
            inputField.value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        }
    }

    if (firstNameInput && lastNameInput) {
        firstNameInput.addEventListener('input', function () {
            capitalizeFirstLetter(this);
        });

        lastNameInput.addEventListener('input', function () {
            capitalizeFirstLetter(this);
        });
    }

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const firstName = firstNameInput.value;
            const lastName = lastNameInput.value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Объект с данными
            const userData = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            };

            localStorage.setItem('userData', JSON.stringify(userData));

            alert('Данные успешно сохранены!');
            console.log('Данные, которые были сохранены в localStorage:', userData);
        });
    }

    const savedData = localStorage.getItem('userData');
    if (savedData) {
        console.log('Сохраненные данные при загрузке страницы:', JSON.parse(savedData));
    } else {
        console.log('Нет сохраненных данных в localStorage.');
    }
});