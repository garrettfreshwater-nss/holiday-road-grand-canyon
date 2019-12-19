import { getEvents, useEvents } from "./EventsProvider.js"
import eventComponent from "./Events.js"
const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".dialog__events")


export const EventListComponent = () => {

eventHub.addEventListener("parkEventsSelected", event => {
  getEvents(event.detail.parkCode).then(() =>
 {
    const allEvents = useEvents()
    // debugger
    render(allEvents)


      const dialogSiblingSelector = `#${event.target.id}+dialog`;
      const theDialog = document.querySelector(dialogSiblingSelector);
      theDialog.showModal();
    if (event.target.classList.contains("close__dialog")) {
      const dialogElement = event.target.parentNode;
      dialogElement.close();
    }

 } )
})





const render = (taco) => {
  contentElement.innerHTML =

      `${taco.map(currentTaco => {
      return eventComponent(currentTaco) }) 
      }  `
}

}