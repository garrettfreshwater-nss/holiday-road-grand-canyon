const weatherComponent = (weather) => {
    const icon = `${weather.weather.map(
        taco =>`${taco.icon}`
    )}`
    return `
    <section class="weather__card">

    <div class="weather__header">
      <div class="weather__date">${new Date(weather.dt_txt).toLocaleDateString('en-US')}</div>
      <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="">
    </div>

    <div class="weather__content">
      <div class="weather__temp">temp ${weather.main.temp}° F</div>
      <div class="weather__condition">${weather.weather.map(
          taco => `
          ${taco.description}`
      ).join("")}
      </div>
    </div>
  </section>
    `
}



export default weatherComponent