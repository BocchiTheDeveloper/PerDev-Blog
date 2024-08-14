document.addEventListener('DOMContentLoaded', function () {
    const continueButtons = document.querySelectorAll('.continue-btn');
    const previousButtons = document.querySelectorAll('.previous-btn');
    let currentSectionIndex = 0;
    const sections = document.querySelectorAll('section');

    continueButtons.forEach((btn) => {
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

    previousButtons.forEach((btn) => {
        btn.addEventListener('click', function () {
            fadeOut(sections[currentSectionIndex], function () {
                sections[currentSectionIndex].classList.add('hidden');
                currentSectionIndex--;
                if (currentSectionIndex >= 0) {
                    fadeIn(sections[currentSectionIndex]);
                }
            });
        });
    });

    function fadeOut(element, callback) {
        element.style.animation = 'fadeOut 0.5s forwards';
        setTimeout(callback, 500);
    }

    function fadeIn(element) {
        element.classList.remove('hidden');
        element.style.animation = 'fadeIn 0.5s forwards';
    }

    // Toggle Table of Contents
    const toggleTocButton = document.getElementById('toggle-toc');
    const closeTocButton = document.getElementById('close-toc');
    const tableOfContents = document.getElementById('table-of-contents');

    toggleTocButton.addEventListener('click', function () {
        tableOfContents.classList.remove('hidden');
        toggleTocButton.classList.add('hidden');
        closeTocButton.classList.remove('hidden');
    });

    closeTocButton.addEventListener('click', function () {
        tableOfContents.classList.add('hidden');
        toggleTocButton.classList.remove('hidden');
        closeTocButton.classList.add('hidden');
    });

    // Navigate to section
    const tocLinks = document.querySelectorAll('#table-of-contents a');
    tocLinks.forEach((link, index) => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            fadeOut(sections[currentSectionIndex], function () {
                sections[currentSectionIndex].classList.add('hidden');
                currentSectionIndex = index;
                fadeIn(sections[currentSectionIndex]);
                tableOfContents.classList.add('hidden'); // Close the TOC after selection
                toggleTocButton.classList.remove('hidden'); // Show the TOC button again
                closeTocButton.classList.add('hidden'); // Hide the Close button
            });
        });
    });
});
