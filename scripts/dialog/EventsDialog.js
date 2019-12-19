import { getItinerary, useItinerary } from "../itinerary/ItineraryProvider.js";

const eventHub = document.querySelector(".container")

export const initializeEventsButtonListener = () => {
eventHub.addEventListener("click", clickEvent => {
  if(clickEvent.target.id.startsWith("eventsButton__")) {
    console.log("events button clicked")

    const [prefix, itineraryId] = document
        .querySelector(".itinerary__content").id.split("--");

       getItinerary().then( () => {
        const allItineraries = useItinerary()
        
        const theChosenItinerary = allItineraries.find(itinerary => (itinerary.id = itineraryId));

        const itineraryParkCode = theChosenItinerary.itineraryDetails.park.parkCode
        console.log(itineraryParkCode)

        const newParkCode = new CustomEvent ("parkEventsSelected", {
          detail: {
            parkCode: itineraryParkCode
          }
        })
        eventHub.dispatchEvent(newParkCode);

      })
  }
})



}