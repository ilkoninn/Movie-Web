let shows = JSON.parse(localStorage.getItem('shows'));
let container = document.querySelector('.container');
let row;

let showsEndingIn2023 = shows.filter(show => show.ended && show.ended.includes('2023'));

for (let i = 0; i < showsEndingIn2023.length; i++) {
    if (i % 5 === 0) {
        row = document.createElement('div');
        row.className = 'row justify-content-center';
        container.appendChild(row);
    }

    let card = document.createElement('div');
    card.className = 'card h-100';
    card.style = 'color : aliceblue;';
    card.innerHTML = `
        <img src="${showsEndingIn2023[i].image.medium}" class="card-img-top" alt="${showsEndingIn2023[i].name}">
        <div class="card-body">
            <h5 class="card-title">${showsEndingIn2023[i].name}</h5>
            <p class="card-text">${showsEndingIn2023[i].summary.substring(0, 100)}...</p>
            <a href="${showsEndingIn2023[i].url}" class="btn btn-primary">More Info</a>
        </div>
    `;

    let col = document.createElement('div');
    col.className = 'col mt-4';
    col.appendChild(card);
    row.appendChild(col);
}