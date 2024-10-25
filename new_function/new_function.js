document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function() {
        const content = this.nextElementSibling;

        // Закрываем все открытые элементы, кроме текущего
        document.querySelectorAll('.accordion-content').forEach(item => {
            if (item !== content) {
                item.style.display = 'none';
            }
        });

        // Переключаем отображение текущего элемента
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});
