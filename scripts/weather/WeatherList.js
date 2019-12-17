import { getWeather, useWeather } from "./WeatherProvider.js";
import weatherComponent from "./Weather.js";


const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".weather")

const weatherListComponent = () => {

    eventHub.addEventListener("extractZip", event => {
        console.log('going to get weather')
        getWeather(event.detail.selectedZip).then(
          () => {
            //   the useWether array is in the .then function because we need to use the array AFTER the fetch call so that it is in sync
              const weather = useWeather()
              render(weather)   
        
        } 
              
        )
    
    })

    const render = (taco) => {
        contentTarget.innerHTML =  `${
            taco.map(currentTaco => {
            return weatherComponent(currentTaco) 
        }).join("")}`


    }

}
export default weatherListComponent

