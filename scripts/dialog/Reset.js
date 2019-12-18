const eventHub = document.querySelector(".container")

const contentElementPark = document.querySelector(".park__card")
const contentElementEatery = document.querySelector(".attraction__card")
const contentElementAttraction = document.querySelector(".eatery__card")
const contentTarget = document.querySelector(".weather")
const contentError = document.querySelector(".error");



export const initializeResetButton = () => {
eventHub.addEventListener("click", clickEvent => {
  if(clickEvent.target.id === "resetForm") {
    console.log ("reset button clicked")
    contentTarget.innerHTML = ""
    contentElementPark.innerHTML = ""
    contentElementEatery.innerHTML=""
    contentElementAttraction.innerHTML=""
    contentError.innerHTML ="";

    document.querySelector("#itinerary__Name").value = ""
  }
})}