let itinerary = []

export  const useItinerary = () => {
    return itinerary
}

export const getItineraries = () => {


    return fetch('http://localhost:3000/db')

        .then(response => response.json())
        .then(
            parsedItineraries => {
                itinerary = parsedItineraries.slice()
            }

        )
}


export const saveItinerary = (note) => {

    fetch('http://localhost:3000/db', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(note)

    })

    .then(getItineraries)

}

const deleteItinerary = itineraryId => {
    return fetch(`http://localhost:3000/db/${itineraryId}`, {
        method: "DELETE"
    })
        .then(getNotes)
}