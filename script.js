document.addEventListener('DOMContentLoaded', function () {
    const continueButtons = document.querySelectorAll('.continue-btn');
    let currentSectionIndex = 0;
    const sections = document.querySelectorAll('section');

    continueButtons.forEach((btn, index) => {
        btn.addEventListener('click', function () {
            fadeOut(sections[currentSectionIndex], function () {
                sections[currentSectionIndex].classList.add('hidden');
                currentSectionIndex++;
                if (currentSectionIndex < sections.length) {
                    fadeIn(sections[currentSectionIndex]);
                }
            });
        });
    });

    function fadeOut(element, callback) {
        element.style.animation = 'fadeOut 1s forwards';
        setTimeout(callback, 2000);
    }

    function fadeIn(element) {
        element.classList.remove('hidden');
        element.style.animation = 'fadeIn 1s forwards';
    }
});
