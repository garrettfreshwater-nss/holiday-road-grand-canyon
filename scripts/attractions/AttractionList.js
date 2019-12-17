import { useAttractions } from "./AttractionProvider.js";
import attractionComponent from "./Attraction.js";

const eventHub = document.querySelector(".container");
const contentElement = document.querySelector(".attraction__card");

const AttractionListComponent = () => {
  eventHub.addEventListener("attractionSelected", event => {
    const attractionsCollection = useAttractions();
    const attraction = event.detail.attraction;
    console.log(attraction);
    const matchingAttraction = attractionsCollection.filter(
      currentAttraction => {
        if (currentAttraction.name === attraction) {
          return currentAttraction;
        }
      }
    );
    console.log(matchingAttraction);
    render(matchingAttraction);
  });

  eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("attractionButton__")) {
      const dialogSiblingSelector = `#${event.target.id}+dialog`;
      const theDialog = document.querySelector(dialogSiblingSelector);
      theDialog.showModal();
    } else if (event.target.classList.contains("close__dialog")) {
      const dialogElement = event.target.parentNode;
      dialogElement.close();
    }
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
