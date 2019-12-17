import { getWeather } from "./WeatherProvider.js";


const eventHub = document.querySelector(".container")

const weatherListComponent = () => {

    eventHub.addEventListener("extractZip", event => {
        console.log(event.detail.selectedZip)
    
        getWeather(event.detail.selectedZip).then()
    
    })

}
export default weatherListComponent