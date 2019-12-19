import { getEvents } from "./EventsProvider.js"

const eventHub = document.querySelector(".container")

export const EventListComponent = () => {

eventHub.addEventListener("parkEventsSelected", event => {
  getEvents(event.detail.parkCode).then(console.log("fetched events"))
})







}