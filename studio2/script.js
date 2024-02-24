window.addEventListener('load', function () {
    'use strict';

    const sliderContent = document.querySelector('.a');
    const slider = document.querySelector('.slider');
    const sliderWidth = sliderContent.offsetWidth;
    const cloned = sliderContent.cloneNode(true); // Cloning slider content for infinite loop
    cloned.className = "b";
    slider.appendChild(cloned);
    const root = document.querySelector(':root');
    const endLeftPos = `-${sliderWidth}px`; // Calculating end left position  
    root.style.setProperty('--sliderwidth', endLeftPos); // Setting CSS custom property 

    slider.classList.add("animate");

    slider.addEventListener('mouseover', function () {
        slider.style.animationPlayState = 'paused';
    });

    slider.addEventListener('mouseout', function () {
        slider.style.animationPlayState = 'running';
    });

    // Add event listener to each photo for click
    const photos = document.querySelectorAll('.photo');
    photos.forEach(function (photo) {
        photo.addEventListener('click', function (event) {
            // Prevent the default action of the click event
            event.preventDefault();

            // Get the ID of the corresponding overlay from the data-overlay attribute
            const overlayId = this.getAttribute('data-overlay');

            // Hide all overlays
            const overlays = document.querySelectorAll('.overlay');
            overlays.forEach(function (overlay) {
                overlay.classList.add('hidden');
            });

            // Show the overlay associated with the clicked image
            const overlay = document.querySelector(overlayId);
            overlay.classList.remove('hidden');
        });
    });
});

(function () {
    'use strict';

    const overlay = document.querySelectorAll('.overlay');

    function closeOverlay() {
        overlay.forEach(function (overlayItem) {
            overlayItem.classList.add('hidden');
        });
    } //hides overlay initially

    document.querySelectorAll('.close').forEach(function (closeButton) {
        closeButton.addEventListener('click', function (event) {
            event.preventDefault();
            closeOverlay();
        }); //close overlay when close button is clicked
    });

    overlay.forEach(function (overlayItem) {
        overlayItem.addEventListener('click', function (event) {
            if (event.target === overlayItem) {
                closeOverlay();
            }
        }); //close overlay when background is clicked
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeOverlay();
        }
    }); //close overlay when esc key pressed
})();


// document.addEventListener('DOMContentLoaded', function () {
//     const container = document.querySelector('body');
//     const backgroundImage = document.querySelector('.background-image');

//     function throttle(callback, limit) {
//         let waiting = false;
//         return function () {
//             if (!waiting) {
//                 callback.apply(this, arguments);
//                 waiting = true;
//                 setTimeout(function () {
//                     waiting = false;
//                 }, limit);
//             }
//         }
//     }

//     container.addEventListener('mousemove', throttle(function (e) {
//         const mouseX = e.clientX;
//         const mouseY = e.clientY;
//         const containerWidth = container.offsetWidth;
//         const containerHeight = container.offsetHeight;

//         const offsetX = mouseX / containerWidth - 0.5;
//         const offsetY = mouseY / containerHeight - 0.5;

//         const moveX = -offsetX * 20;
//         const moveY = -offsetY * 20;

//         backgroundImage.style.transform = `translate(${moveX}px, ${moveY}px)`;
//     }, 16)); // 60fps
// });
