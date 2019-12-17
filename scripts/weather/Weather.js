const weatherComponent = (weather) => {
    return `
    <section class="weather__card">

    <div class="weather__header">
      <div class="weather__date">${weather.list.dt}</div>
      <img src="" alt="">
    </div>

    <div class="weather__content">
      <div class="weather__temp">${weather.list.main.temp}</div>
      <div class="weather__tempMin">${weather.list.main.temp_min}</div>
      <div class="weather__tempMax">${weather.list.main.temp_max}</div>
      <div class="weather__condition">${weather.list.weather.main}</div>
      <div class="weather__description">${weather.list.weather.description}</div>
    </div>
  </section>
    `
}



export default weatherComponent