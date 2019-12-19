import { getItinerary, useItinerary } from "../itinerary/ItineraryProvider.js";

const eventHub = document.querySelector(".container")

export const initializeEventsButtonListener = () => {
eventHub.addEventListener("click", clickEvent => {
  if(clickEvent.target.id.startsWith("eventsButton__")) {
    console.log("events button clicked")

    const [prefix, itineraryId] = clickEvent.target.id.split("__");

       getItinerary().then( () => {
        const allItineraries = useItinerary()
        let theChosenItinerary=[]
           allItineraries.map(currentItinerary => 
          {
            if(currentItinerary.id == itineraryId){
          theChosenItinerary= currentItinerary}
        });

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