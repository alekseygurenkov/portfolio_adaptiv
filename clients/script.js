const areas = document.querySelectorAll('area');
areas.forEach(area => {
    area.addEventListener('mouseover', () => {
        area.style.outline = '2px solid red'; // Пример выделения
    });
    area.addEventListener('mouseout', () => {
        area.style.outline = 'none';
    });
});