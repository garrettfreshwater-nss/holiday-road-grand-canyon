import { saveItinerary } from "../savedItinerary/SavedProvider.js"

const eventHub = document.querySelector(".container")

const initializeSaveItineraryEventListener = () => {
eventHub.addEventListener("click", clickEvent => {
  if(clickEvent.target.id === "saveItinerary") {
    console.log("save button clicked")
   
    const itineraryName = document.querySelector("#itinerary__Name").value
    const parkName = document.querySelector("#park__name").value
    const parkState = document.querySelector("#park__state").value
    const parkDescript = document.querySelector("#park__description").value
    const parkUrl = document.querySelector("#park__url").value

    const eateryName = document.querySelector("#eatery__name").value
    const eateryCity = document.querySelector("#eatery__city").value
    const eateryState = document.querySelector("#eatery__state").value
    const eateryDescript = document.querySelector("#eatery__description").value
    const eateryWifi = document.querySelector("#eatery__wifi").value
    const eateryRestrooms = document.querySelector("#eatery__restrooms").value

    const attractionName = document.querySelector("#attraction__name").value
    const attractionCity = document.querySelector("#attraction__city").value
    const attractionState = document.querySelector("#attraction__state").value
    const attractionDescript = document.querySelector("#attraction__description").value
    const attractionSouvenirs = document.querySelector("#attraction__souvenirs").value
    const attractionRestrooms = document.querySelector("#attraction__restrooms").value

    
    
    
    const newItinerary = new CustomEvent ("itinerarySaved",
    {
      detail: {
        itineraryName: itineraryName,

        itineraryDetails: [
        {
          park:
          {
            parkName: parkName,
            parkState: parkState,
            parkDescript: parkDescript,
            parkUrl: parkUrl
          },
          eatery:
          {
            eateryName: eateryName,
            eateryCity: eateryCity,
            eateryState: eateryState,
            eateryDescript: eateryDescript,
            eateryWifi: eateryWifi,
            eateryRestrooms: eateryRestrooms
          },
          attraction:
          {
            attractionName: attractionName,
            attractionCity: attractionCity,
            attractionState: attractionState,
            attractionDescript: attractionDescript,
            attractionSouvenirs: attractionSouvenirs,
            attractionRestrooms: attractionRestrooms
          }
      

      }
    ]}})
        
  
    
    eventHub.dispatchEvent(newItinerary)
  }})



  eventHub.addEventListener("itinerarySaved", event => {
    saveItinerary(event.detail)})
  }

  export default initializeSaveItineraryEventListener