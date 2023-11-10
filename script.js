let shows = JSON.parse(localStorage.getItem('shows'));

if (!shows) {
    shows = []; // Initialize shows as an empty array
    axios.get('https://api.tvmaze.com/shows')
        .then(res => {
            let temp = 0;
            let tempShow = {}

            for (let i = 0; i < 25; i++) {
                for (let j = 0; j < res.data.length; j++) {
                    if (res.data[j].rating.average > temp && !shows.find(show => show.id === res.data[j].id)) {
                        temp = res.data[j].rating.average
                        tempShow = res.data[j]
                    }
                }
                shows.push(tempShow)
                temp = 0
            }

            localStorage.setItem('shows', JSON.stringify(shows));
            createSlider(shows);
        });
} else {
    createSlider(shows);
}

function createSlider(shows) {
    document.addEventListener('DOMContentLoaded', function () {
        new Splide('.splide', {
            type: 'loop',
            perPage: 5,
            autoplay: true,
            interval: 5000,
            pagination: false,
        }).mount();
    });

    let ul = document.querySelector('.splide__list')
    for (let i = 0; i < shows.length; i++) {
        let li = document.createElement('li')
        let divBackground = document.createElement('div')
        let divImage = document.createElement('div')
        let a = document.createElement('a')
        let img = document.createElement('img')
        let divInfo = document.createElement('div')

        img.src = shows[i].image.medium
        img.alt = `Get More Information About: ${shows[i].name}`
        img.title = `Get More Information About: ${shows[i].name}`
        a.href = shows[i].url
        divInfo.textContent = `${shows[i].name}`

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
}

