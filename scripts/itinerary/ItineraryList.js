import { useParks } from "../parks/ParkProvider.js";
import { useEateries } from "../eateries/EateryProvider.js";
import { useAttractions } from "../attractions/AttractionProvider.js";
import { saveItinerary, useItinerary, getItinerary, deleteItinerary } from "./ItineraryProvider.js";
import itineraryComponent from "./Itinerary.js";
import { getWeather } from "../weather/WeatherProvider.js";

const eventHub = document.querySelector(".container");
const contentElementPark = document.querySelector(".park__card");
const contentElementEatery = document.querySelector(".attraction__card");
const contentElementAttraction = document.querySelector(".eatery__card");
const contentTarget = document.querySelector(".weather");
const contentElement = document.querySelector("#itinerary__container")
const contentError = document.querySelector(".error");

const initializeSaveItineraryEventListener = () => {
  eventHub.addEventListener("click", clickEvent => {
    
    if (
      clickEvent.target.id === "saveItinerary" &&
      document.querySelector(".park__card").innerHTML != "" &&
      document.querySelector(".eatery__card").innerHTML != "" &&
      document.querySelector(".attraction__card").innerHTML != "" &&
      document.querySelector("#itinerary__Name").value != ""
    ) {
      console.log("save button clicked");
      const itineraryName = document.querySelector("#itinerary__Name").value;

      const allParks = useParks();
      const [prefix, parkId] = document
        .querySelector(".park__content").id.split("--");
      const theDisplayedPark = allParks.find(park => (park.id == parkId));

      const allEateries = useEateries();
      const [taco, eateryId] = document
        .querySelector(".eatery__content")
        .id.split("--");
        
      const theDisplayedEatery = allEateries.find(
        eatery => (eatery.id == eateryId)
      );

      const allAttractions = useAttractions();
      const [burrito, attractionId] = document
        .querySelector(".attraction__content")
        .id.split("--");
      const theDisplayedAttraction = allAttractions.find(
        attraction => (attraction.id == attractionId)
      );

      const newItinerary = new CustomEvent("itinerarySaved", {
        detail: {
          itineraryName: itineraryName,

          itineraryDetails: {
            park: theDisplayedPark,
            eatery: theDisplayedEatery,
            attraction: theDisplayedAttraction
          }
        }
      });

      eventHub.dispatchEvent(newItinerary);
    } 
    else 
    if(clickEvent.target.id === "saveItinerary"){
      contentError.innerHTML = `Please Fill Out All Fields...`;
    }
  });

  eventHub.addEventListener("itinerarySaved", event => {
    saveItinerary(event.detail);
    contentTarget.innerHTML = "";
    contentElementPark.innerHTML = "";
    contentElementEatery.innerHTML = "";
    contentElementAttraction.innerHTML = "";
    contentError.innerHTML = "";

    document.querySelector("#itinerary__Name").value = "";
  });

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("itineraryDeleteButton__")) {
        const [prefix, id] = clickEvent.target.id.split("__")
       deleteItinerary(id).then( () => {
         const updatedItineraries = useItinerary()
         render(updatedItineraries)
    })
  }
})};

export const ItineraryListComponent = () => {
  eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.classList.contains('show__itinerary'))
 
    {
      console.log("getting itneraries");
      
      getItinerary().then(
        ()=> {
          const itineraries = useItinerary()
          render(itineraries);
        }
      )

    } 
  })

};

const render = (itineraryCollection) => {
  contentElement.innerHTML = `
${itineraryCollection.map(
  itinerary => {
    return itineraryComponent(itinerary);
  })
  .join(" ")}
`;
};

export default initializeSaveItineraryEventListener;
