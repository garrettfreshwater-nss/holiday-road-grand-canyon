
import { getItinerary, useItinerary } from "../itinerary/ItineraryProvider.js";
import { getDirections, getLatLong, useLatLong } from "../directions/DirectionsProvider.js";
import { DirectionListComponent } from "../directions/DirectionsList.js";

const eventHub = document.querySelector(".container")

export const initializeDirectionsButtonListener = () => {
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id.startsWith("directions__")) {
            console.log("directions button clicked")

            const [prefix, itineraryId] = clickEvent.target.id.split("__");


            getItinerary().then(() => {
                const allItineraries = useItinerary()
                //  debugger
                // Add array here to initialize things so not to have the ID stay the same
                let theChosenItinerary = []

                allItineraries.map(currentItinerary => {
                    if (currentItinerary.id == itineraryId) {
                        theChosenItinerary = currentItinerary
                    }
                });

                // const itineraryParkCode = theChosenItinerary.itineraryDetails.park.parkCode
                // console.log(itineraryParkCode)

                //  pull the lat long or the city state from the object
                //  "latLong": "lat:33.18713877, long:-111.9192737",
                //  "state": "AK",
                //  "city": "Anchorage"

                const attractCity = theChosenItinerary.itineraryDetails.attraction.city
                const attractState = theChosenItinerary.itineraryDetails.attraction.state
                const eateryCity = theChosenItinerary.itineraryDetails.eatery.city
                const eateryState = theChosenItinerary.itineraryDetails.eatery.state

                // console.log(parkLatLong)
                console.log(attractCity)
                console.log(attractState)
                console.log(eateryCity)
                console.log(eateryState)

// SECOND THING TO ASK STEVE ABOUT HERE

                // need to transform the returned items text and numbers into only numbers here
                // feed the 1st Graphopper API the city state pair to get back the latitude and longitude pair of numbers
                const [parkLat, parkLong] = theChosenItinerary.itineraryDetails.park.latLong.split(",")
                const trimmedParkLat = parkLat.split(":")[1]
                const trimmedParkLong = parkLong.split(":")[1]

                console.log(parkLat, parkLong)
                // when it works it shows >>>>> lat:38.971601  long:-76.483355

                // Ah Ha! this log is showing undefined
                console.log(trimmedParkLong)

// FIRST THING TO ASK STEVE ABOUT HERE
                // pointOnePair will return a pair of numbers - need to split into two 
                getLatLong(attractCity, attractState).then(() => {
                    const latLongPair = useLatLong()
                    const latOne = latLongPair[1].point.lat
                    const longOne = latLongPair[1].point.lng


                    console.log(latOne)
                    console.log(longOne)

                    return {
                        latOne, longOne
                    }
                    // return latOne

                }).then((taco) => {
                    getLatLong(eateryCity, eateryState).then(() => {
                        const latLongPair = useLatLong()
                        const latTwo = latLongPair[1].point.lat
                        const longTwo = latLongPair[1].point.lng
                        console.log(taco.latOne)
                        console.log(longTwo)


                        getDirections(taco.latOne,taco.longOne, latTwo, longTwo, trimmedParkLat, trimmedParkLong).then(DirectionListComponent)  
                    })                  

                    
                    // "latLong": "lat:41.26093905, long:-81.57116722",

                }

                )
            }

            )
        }

    })


}

