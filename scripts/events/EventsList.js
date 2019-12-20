import { getEvents, useEvents } from "./EventsProvider.js";
import eventComponent from "./Events.js";
const eventHub = document.querySelector(".container");

export const EventListComponent = () => {
  eventHub.addEventListener("parkEventsSelected", event => {
    getEvents(event.detail.parkCode)
      .then(() => {
        const contentElement = document.querySelector(".dialog__events");

        const allEvents = useEvents();
        // debugger
        render(contentElement, allEvents);
        return event;
      })
      .then(event => {
      
        if (event.detail.buttonID.startsWith("eventsButton__")) {
      
          const theDialog = document.querySelector(".dialog__events")
          theDialog.showModal();
         
        }
      });
  });

  eventHub.addEventListener("click", event => {
    if (event.target.classList.contains("close__eventsDialog")) {
      const dialogElement = event.target.parentNode;
      dialogElement.close();
    }
  });
  const render = (contentElement, events) => {
    if(events.length != 0){
    contentElement.innerHTML = `${events.map(currentEvent => {
      return eventComponent(currentEvent);
    }).join("")}`
  }else{
    contentElement.innerHTML = `
    <div>No Events</div>
    <button class="close__eventsDialog">HIDE</button>
    `
  }
}
}
