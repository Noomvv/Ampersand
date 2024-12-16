document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Получаем введенные данные
        const email = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;

        // Проверяем данные в localStorage
        const storedData = JSON.parse(localStorage.getItem("userData"));

        if (storedData) {
            if (storedData.email === email && storedData.password === password) {
                // alert("Login successful!");
                window.location.href = "../PersonalAccount_Page.html"; // Перенаправляем на страницу после входа
            } else {
                alert("Invalid email or password. Please try again.");
            }
        } else {
            alert("No account found. Please sign up first.");
        }
    });
});