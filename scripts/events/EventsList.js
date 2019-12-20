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
          eventHub.addEventListener("click", event => {
            if (event.target.classList.contains("close__dialog")) {
              const dialogElement = event.detail.buttonID.parentNode;
              dialogElement.close();
            }
          });
        }
      });
  });

  const render = (contentElement, taco) => {
    contentElement.innerHTML = `${taco.map(currentTaco => {
      return eventComponent(currentTaco);
    })}  `;
  };
};
