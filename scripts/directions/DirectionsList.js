import { useDirections } from "./DirectionsProvider.js"
import directionComponent from "./Directions.js"

const eventHub = document.querySelector(".container")
export const DirectionListComponent = () => {

const contentElement = document.querySelector(".dialog__directionsInner")


const directionsCollection = useDirections()



    const render = directionsCollection => {
        debugger
        contentElement.innerHTML += `${directionsCollection
          .map(currentDirection => {
            return directionComponent(currentDirection);
          })
          .join("")}
            `;
      };

      render(directionsCollection)


      const theDialog = document.querySelector(".dialog__directions")
      theDialog.showModal();

      eventHub.addEventListener("click", event => {
        if (event.target.classList.contains("close__directionsDialog")) {
          const dialogElement = event.target.parentNode;
          dialogElement.close();
        }
      });
} 


