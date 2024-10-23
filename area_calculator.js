function calculateArea() {
    const width = document.getElementById('width').value;
    const height = document.getElementById('height').value;

    if (width && height) {
        const area = width * height;
        document.getElementById('result_area_calculator').innerText = `Площадь прямоугольника: ${area} м²`;
    } else {
        document.getElementById('result_area_calculator').innerText = 'Пожалуйста, введите ширину и высоту.';
    }
}