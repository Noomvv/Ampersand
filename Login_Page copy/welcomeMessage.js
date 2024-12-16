document.addEventListener('DOMContentLoaded', function () {
    const savedData = localStorage.getItem('userData');
    const welcomeElement = document.getElementById('welcomeMessage');

    if (savedData && welcomeElement) {
        const userData = JSON.parse(savedData);
        const fullName = `${userData.firstName} ${userData.lastName}`;
        welcomeElement.textContent = `Welcome ${fullName}`;
    }
});