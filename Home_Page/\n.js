products.forEach(product => {
    product.addEventListener('click', () => {
        const title = product.dataset.title;
        const info = product.dataset.info;

        modalTitle.textContent = title;
        modalInfo.textContent = info; // textContent сохраняет переносы строк

        modal.style.display = 'block';
        overlay.style.display = 'block';
    });
});