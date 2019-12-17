import { useAttractions } from "./AttractionProvider.js"
import attractionComponent from "./Attraction.js"


const eventHub = document.querySelector(".container");
const contentElement = document.querySelector(".attraction__card")


const AttractionListComponent = () => {

  eventHub.addEventListener("attractionSelected", event => {
    const attractionsCollection = useAttractions();
    const attraction = event.detail.attraction;
    console.log(attraction);
    const matchingAttraction = attractionsCollection.filter(
(currentAttraction) => {
    if (currentAttraction.name === attraction) {
        return currentAttraction
    }
}
    )
    console.log(matchingAttraction)
    render(matchingAttraction)
  });

  const render = attractionsCollection => {
    contentElement.innerHTML = `${attractionsCollection
      .map(currentAttraction => {
        return attractionComponent(currentAttraction);
      })
      .join("")}
        `;
  };
};
export default AttractionListComponent;
