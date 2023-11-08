document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        type: 'loop',
        perPage: 3,
        autoplay: true,
        interval: 5000,
        pagination: false, // Add this line
    }).mount();
});