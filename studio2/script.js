window.addEventListener('load', function () {
    'use strict';

    const sliderContent = document.querySelector('.a');
    const slider = document.querySelector('.slider');
    const sliderWidth = sliderContent.offsetWidth;
    const cloned = sliderContent.cloneNode(true);// Cloning slider content for infinite loop
    cloned.className = "b";
    slider.appendChild(cloned);
    const root = document.querySelector(':root');
    const endLeftPos = `-${sliderWidth}px`; // Calculating end left position  
    root.style.setProperty('--sliderwidth', endLeftPos);// Setting CSS custom property 

    slider.classList.add("animate");

    slider.addEventListener('mouseover', function(){
        slider.style.animationPlayState = 'paused';
    });

    slider.addEventListener('mouseout', function(){
        slider.style.animationPlayState = 'running';
    });

    document.addEventListener('click', function(event){
        if(event.target.classList.contains('photo')){
            console.log(event.target.src);
            document.getElementById('overlay').className = 'showing'; 
        }
    });
});

(function () {
    'use strict';

    const overlay = document.getElementById('overlay');

    function closeOverlay() {
        overlay.classList.add('hidden'); 
    }//hides overlay initially

    document.querySelector('.close').addEventListener('click', function (event) {
        event.preventDefault();
        closeOverlay();
    });//close overlay when close button is clicked

    overlay.addEventListener('click', function (event) {
        if (event.target === overlay) {
            closeOverlay();
        }
    });//close overlay when background is clicked

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeOverlay();
        }
    });//close overlay when esc key pressed
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
