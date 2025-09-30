document.addEventListener('DOMContentLoaded', () => {
    const curtain = document.getElementById('curtain');

    curtain.addEventListener('click', () => {
        curtain.classList.add('lifted');
    });
});