let shows = JSON.parse(localStorage.getItem('shows'));

let intervalId = setInterval(() => {
    shows = JSON.parse(localStorage.getItem('shows'));
    if (shows && shows.length > 0) {
        clearInterval(intervalId);
        createPopularSlider(shows, 0);
        createGenreSlider(shows, 'Thriller', 1);
        createGenreSlider(shows, 'Action', 2);
        createGenreSlider(shows, 'Horror', 3);
    }
}, 500);

function createPopularSlider(shows, targetList) {
    let sortedShows = shows.sort((a, b) => b.rating.average - a.rating.average);

    let ul = document.querySelectorAll('.splide__list')[targetList];
    for (let i = 0; i < 25 && i < sortedShows.length; i++) {
        createCard(sortedShows[i], ul);
    }

    // Define the callback function
    let initializeSplide = function () {
        new Splide("#first-slider", {
            type: 'loop',
            perPage: 5,
            autoplay: true,
            interval: 5000,
            pagination: false,
        }).mount();
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeSplide);
    } else {
        initializeSplide();
    }
}
// document.querySelectorAll('.your_class_name').forEach(carousel => new Splide(carousel, {
//     type: 'loop',
//     perPage: 5,
//     autoplay: true,
//     interval: 5000,
//     pagination: false,
// }).mount());



function createGenreSlider(shows, genre, targetList) {
    let filteredShows = shows.filter(show => show.genres.includes(genre));

    let ul = document.querySelectorAll('.splide__list')[targetList];

    for (let i = 0; i < 25 && i < filteredShows.length; i++) {
        createCard(filteredShows[i], ul);
    }

    // Define the callback function
    let initializeSplide = function () {
        let sliderId;
        if (targetList === 1) {
            sliderId = "#second-slider";
        } else if (targetList === 2) {
            sliderId = "#third-slider";
        } else if (targetList === 3) {
            sliderId = "#fourth-slider";
        }

        new Splide(sliderId, {
            type: 'loop',
            perPage: 5,
            autoplay: true,
            interval: 5000,
            pagination: false,
        }).mount();
    };

    // Check if the document is already loaded
    if (document.readyState === 'loading') {
        // If the document is still loading, set up the event listener
        document.addEventListener('DOMContentLoaded', initializeSplide);
    } else {
        // If the document is already loaded, call the callback function directly
        initializeSplide();
    }
}

// function createGenreSlider(shows, genre, targetList) {
//     // Filter the shows by genre
//     let filteredShows = shows.filter(show => show.genres.includes(genre));

//     let ul = document.querySelectorAll('.splide__list')[targetList];
//     for (let i = 0; i < 25 && i < filteredShows.length; i++) {
//         createCard(filteredShows[i], ul);
//     }
// }

function createCard(show, ul) {
    let li = document.createElement('li')
    let divBackground = document.createElement('div')
    let divImage = document.createElement('div')
    let a = document.createElement('a')
    let img = document.createElement('img')
    let divInfo = document.createElement('div')

    img.src = show.image.medium
    console.log(img.src);
    img.alt = `Get More Information About: ${show.name}`
    img.title = `Get More Information About: ${show.name}`
    a.href = show.url
    divInfo.textContent = `${show.name}`

    a.appendChild(img)
    divImage.appendChild(a)
    divBackground.appendChild(divImage)
    divBackground.appendChild(divInfo)

    li.setAttribute('class', 'splide__slide')
    divBackground.setAttribute('class', 'background')
    divImage.setAttribute('class', 'image')
    divInfo.setAttribute('class', 'info')

    li.appendChild(divBackground)

    ul.appendChild(li)
    console.log(img);
}
