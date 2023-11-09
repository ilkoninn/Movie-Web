let shows = []

axios.get('https://api.tvmaze.com/shows')
    .then(res => {
        let temp = 0;
        let tempShow = {}

        for (let i = 0; i < 25; i++) {

            for (let j = 0; j < res.data.length; j++) {

                if (res.data[j].rating.average > temp) {
                    if (shows.includes(res.data[j])) {
                        continue
                    } else {
                        temp = res.data[j].rating.average
                        tempShow = res.data[j]
                    }
                }

            }
            shows.push(tempShow)
            temp = 0
        }

        document.addEventListener('DOMContentLoaded', function () {
            new Splide('.splide', {
                type: 'loop',
                perPage: 5,
                autoplay: true,
                interval: 5000,
                pagination: false, // Add this line
            }).mount();
        });

        let ul = document.querySelector('.splide__list')
        for (let i = 0; i < shows.length; i++) {
            let li = document.createElement('li')
            let divBackground = document.createElement('div')
            let divImage = document.createElement('div')
            let img = document.createElement('img')
            let divInfo = document.createElement('div')

            img.src = shows[i].image.medium
            divInfo.textContent = `${shows[i].name} - Rating: ${shows[i].rating.average}`

            divImage.appendChild(img)
            divBackground.appendChild(divImage)
            divBackground.appendChild(divInfo)

            li.setAttribute('class', 'splide__slide')
            divBackground.setAttribute('class', 'background')
            divImage.setAttribute('class', 'image')
            divInfo.setAttribute('class', 'info')

            li.appendChild(divBackground)

            ul.appendChild(li)
        }
    })