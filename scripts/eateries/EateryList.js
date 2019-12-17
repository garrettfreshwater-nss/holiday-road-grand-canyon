const eventHub = document.querySelector(".container")

import { eateryComponent } from ./Eatery.js

const EateryListComponent = () => {

    eventHub.addEventListener("eaterySelected", event => {
        const allTheEateries = useEateries()
        render(allTheEateries)
    })

    
    const render = (parksCollection) => {
        contentTarget.innerHTML = 

        `${parksCollection.map(
            (currentPark) => {
                AttractionComponent(currentEatery)
            }
        ).join("") }
        `
      
            
    }

}

export default EateryListComponent