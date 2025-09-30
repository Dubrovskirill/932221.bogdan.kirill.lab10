document.addEventListener('DOMContentLoaded', () => {
    const curtain = document.getElementById('curtain');
    const lamp = document.getElementById('lamp');
    const wick = document.getElementById('wick');
    const light = document.getElementById('light');

    // Поднятие занавеса
    curtain.addEventListener('click', () => {
        curtain.classList.add('lifted');
    });

    // Анимация фитиля
    lamp.addEventListener('mousedown', () => {
        wick.style.transform = 'translateX(-50%) translateY(10px)';
    });

    lamp.addEventListener('mouseup', () => {
        wick.style.transform = 'translateX(-50%)';
    });

    // Включение/выключение света по клику на лампу
    lamp.addEventListener('click', () => {
        light.classList.toggle('active');
    });
});