let shows = JSON.parse(localStorage.getItem('shows'));

function createPopularSlider(shows, targetList) {
    document.addEventListener('DOMContentLoaded', function () {
        new Splide("#first-slider", {
            type: 'loop',
            perPage: 5,
            autoplay: true,
            interval: 5000,
            pagination: false,
        }).mount();
    });
    let ul = document.querySelectorAll('.splide__list')[targetList];
    for (let i = 0; i < 25 && i < shows.length; i++) {
        createCard(shows[i], ul);
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
    if (targetList === 1) {
        document.addEventListener('DOMContentLoaded', function () {
            new Splide("#second-slider", {
                type: 'loop',
                perPage: 5,
                autoplay: true,
                interval: 5000,
                pagination: false,
            }).mount();
        });
    }

    if (targetList === 2) {
        document.addEventListener('DOMContentLoaded', function () {
            new Splide("#third-slider", {
                type: 'loop',
                perPage: 5,
                autoplay: true,
                interval: 5000,
                pagination: false,
            }).mount();
        });
    }

    if (targetList === 3) {
        document.addEventListener('DOMContentLoaded', function () {
            new Splide("#fourth-slider", {
                type: 'loop',
                perPage: 5,
                autoplay: true,
                interval: 5000,
                pagination: false,
            }).mount();
        });
    }
    let filteredShows = shows.filter(show => show.genres.includes(genre));

    let ul = document.querySelectorAll('.splide__list')[targetList];

    for (let i = 0; i < 25 && i < filteredShows.length; i++) {
        createCard(filteredShows[i], ul);
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
}
