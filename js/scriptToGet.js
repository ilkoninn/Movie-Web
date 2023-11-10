async function fetchShows() {
    if (!shows || shows.length === 0) {
        await axios.get('https://api.tvmaze.com/shows')
            .then(res => {
                console.log("I am fetching shows");
                shows = res.data;
                localStorage.setItem('shows', JSON.stringify(shows));
            });
    }
}

fetchShows();