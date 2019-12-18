import { saveItinerary } from "../savedItinerary/SavedProvider.js"
import { useParks } from "../parks/ParkProvider.js";
import { useEateries } from "../eateries/EateryProvider.js";
import { useAttractions } from "../attractions/AttractionProvider.js";

const eventHub = document.querySelector(".container")

const initializeSaveItineraryEventListener = () => {
eventHub.addEventListener("click", clickEvent => {
  if(clickEvent.target.id === "saveItinerary") {
    console.log("save button clicked")
   
    const allParks = useParks()
    const [prefix, parkId] = document.querySelector(".park__content").id.split("--")
    const theDisplayedPark = allParks.find(park => park.id = parkId)

    const allEateries = useEateries()
    const [taco, eateryId] = document.querySelector(".eatery__content").id.split("--")
    const theDisplayedEatery = allEateries.find(eatery => eatery.id = eateryId)

    const allAttractions = useAttractions()
    const [burrito, attractionId] = document.querySelector(".attraction__content").id.split("--")
    const theDisplayedAttraction = allAttractions.find(attraction => attraction.id = attractionId)


    // itineraryDetails.park = theDisplayedPark
    // itineraryDetails.eatery = theDisplayedEatery
    // itineraryDetails.attraction = theDisplayedAttraction
    
    
    const itineraryName = document.querySelector("#itinerary__Name").value
    
    
    

    
    
    
    const newItinerary = new CustomEvent ("itinerarySaved",
    {
      detail: {
        itineraryName: itineraryName,

        itineraryDetails: 
        {
          park: theDisplayedPark,
          eatery: theDisplayedEatery,
          attraction: theDisplayedAttraction
        }
    }
  })
        
  
    
    eventHub.dispatchEvent(newItinerary)
  }})



  eventHub.addEventListener("itinerarySaved", event => {
    saveItinerary(event.detail)})
  }

  export default initializeSaveItineraryEventListener