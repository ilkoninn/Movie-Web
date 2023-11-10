let shows = JSON.parse(localStorage.getItem("shows"));

shows = [];
axios.get("https://api.tvmaze.com/shows").then((res) => {
  let temp = 0;
  let tempShow = {};

  for (let i = 0; i < 236; i++) {
    for (let j = 0; j < res.data.length; j++) {
      if (
        res.data[j].rating.average > temp &&
        !shows.find((show) => show.id === res.data[j].id)
      ) {
        temp = res.data[j].rating.average;
        tempShow = res.data[j];
      }
    }
    shows.push(tempShow);
    temp = 0;
  }

  localStorage.setItem("shows", JSON.stringify(shows));
});
