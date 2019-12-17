import settings from "../Settings.js";
import ParkSelect from "./ParkSelect.js";

let Park = []

export const useParks = () => {
    return Park
}

export const getParks = (selectedState) => {

    return fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${selectedState}&limit=25&sort=states&api_key=${settings.npsKey}`)

        .then(response => response.json())
        .then(


            parsedParks => {
                console.table(parsedParks)
                Park = parsedParks.data.slice()
                .sort(function(a, b) {
                    var nameA = a.states.toUpperCase(); // ignore upper and lowercase
                    var nameB = b.states.toUpperCase(); // ignore upper and lowercase
                    if (nameA < nameB) {
                      return -1;
                    }
                    if (nameA > nameB) {
                      return 1;
                    }
                  
                    // names must be equal
                    return 0;
                  });;
            }

        
        )
}


const contentElement = document.querySelector(".filters__parks")

const eventHub = document.querySelector(".container")
eventHub.addEventListener("stateSelected", event => {
    contentElement.innerHTML = ""

    getParks(event.detail.state).then(ParkSelect)
    //   .then(() => {
    //     contentElement.innerHTML = `
    //       ${parks.map(park => {
    //               return ParksComponent(park)
    //             }).join(" ")}
    //         `
    //   })
    })
