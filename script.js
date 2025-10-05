document.addEventListener('DOMContentLoaded', () => {
    const curtain = document.getElementById('curtain');
    const lamp = document.getElementById('lamp');
    const wick = document.getElementById('wick');
    const light = document.getElementById('light');
    
    const magicContainer = document.getElementById('magic-container');
    const hat = document.getElementById('hat');
    const rabbit = document.getElementById('rabbit');
    const bird = document.getElementById('bird');
    const wizard = document.getElementById('wizard');

    let isRabbitVisible = true;
    let isAnimating = false;
    let isMagicVisible = false;

    rabbit.classList.remove('hidden');
    rabbit.classList.add('visible');
    bird.classList.remove('visible');
    bird.classList.add('hidden');

    curtain.addEventListener('click', () => {
        curtain.classList.add('lifted');
    });

    lamp.addEventListener('mousedown', () => {
        wick.style.transform = 'translateX(-50%) translateY(10px)';
    });
    lamp.addEventListener('mouseup', () => {
        wick.style.transform = 'translateX(-50%)';
    });
    lamp.addEventListener('mouseleave', () => {
        wick.style.transform = 'translateX(-50%)';
    });

    lamp.addEventListener('click', () => {
        light.classList.toggle('active');

        if (light.classList.contains('active')) {
            setTimeout(() => {
                magicContainer.classList.add('visible');
                isMagicVisible = true;
            }, 200);
        } else {
            magicContainer.classList.remove('visible');
            isMagicVisible = false;
            resetAnimals();
        }
    });

    rabbit.addEventListener('click', (e) => {
        if (!isMagicVisible || isAnimating || !isRabbitVisible) return;
        e.stopPropagation();
        performMagicTransition(true);
    });

    bird.addEventListener('click', (e) => {
        if (!isMagicVisible || isAnimating || isRabbitVisible) return;
        e.stopPropagation();
        performMagicTransition(false);
    });

    hat.addEventListener('click', (e) => {
        if (!isMagicVisible || isAnimating) return;
        e.stopPropagation();
        performMagicTransition(isRabbitVisible);
    });

    function performMagicTransition(toBird) {
        isAnimating = true;

        if (toBird) {
            rabbit.style.transform = 'translateX(-50%) translateY(100px)';
            rabbit.style.opacity = '0';
            rabbit.classList.remove('visible');

            setTimeout(() => {
                rabbit.classList.add('hidden');
                bird.classList.remove('hidden');
                bird.classList.add('visible');
                bird.style.transform = 'translateX(-50%) translateY(0)';
                bird.style.opacity = '1';

                isRabbitVisible = false;
                isAnimating = false;
            }, 500);
        } else {
            bird.style.transform = 'translateX(-50%) translateY(100px)';
            bird.style.opacity = '0';
            bird.classList.remove('visible');

            setTimeout(() => {
                bird.classList.add('hidden');
                rabbit.classList.remove('hidden');
                rabbit.classList.add('visible');
                rabbit.style.transform = 'translateX(-50%) translateY(0)';
                rabbit.style.opacity = '1';

                isRabbitVisible = true;
                isAnimating = false;
            }, 500);
        }
    }

    function resetAnimals() {
        rabbit.classList.remove('hidden');
        rabbit.classList.add('visible');
        rabbit.style.transform = 'translateX(-50%) translateY(0)';
        rabbit.style.opacity = '1';

        bird.classList.remove('visible');
        bird.classList.add('hidden');
        bird.style.transform = 'translateX(-50%) translateY(100px)';
        bird.style.opacity = '0';

        isRabbitVisible = true;
        isAnimating = false;
    }

    magicContainer.addEventListener('click', (e) => {
        if (!isMagicVisible) e.stopPropagation();
    });
});