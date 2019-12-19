import settings from "../Settings.js";

let events = []

export const useEvents = () => {
    return events.slice()
}

export const getEvents = (parkCode) => {

    return fetch(`https://developer.nps.gov/api/v1/events?parkCode=${parkCode}&limit=2&api_key=${settings.npsKey}`)

        .then(response => response.json())
        .then(


            parsedEvents => {
                console.table(parsedEvents)
                events = parsedEvents.data.slice()})}