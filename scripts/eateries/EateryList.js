import eateryComponent from "./Eatery.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".eatery__card")


const EateryListComponent = () => {

    eventHub.addEventListener("eaterySelected", event => {
        const eateryCollection = useEateries()
        const eatery = event.detail.eatery
        console.log(eatery)
         const matchingEatery = eateryCollection.filter(
             (currentEatery) => {
                 if (currentEatery.fullName === eatery) {
                   return currentEatery
            
                }
             }      
         )
         console.log(matchingEatery)
         render(matchingEatery)
    })


    const render = (taco) => {
        contentTarget.innerHTML =

            `${taco.map(currentTaco => {
            return eateryComponent(currentTaco) }) 
            }  `
    }
}
export default EateryListComponent