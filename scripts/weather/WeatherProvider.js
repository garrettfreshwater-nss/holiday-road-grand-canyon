import settings from "../Settings.js";
// import ParkSelect from "./ParkSelect.js";

let Weather = []

export const useWeather = () => {
    return Weather
}

export const getWeather = (selectedZip) => {

    return fetch(`http://api.openweathermap.org/data/2.5/forecast?APPID=${settings.weatherKey}&zip=${selectedZip}&units=imperial`)

        .then(response => response.json())
        .then(


            parsedWeather => {
                console.table(parsedWeather)
                Weather = parsedWeather.slice()
                
            }

        
        )
}

