let itineraries = [];

export const useItinerary = () => {
  return itineraries;
};

export const getItinerary = () => {
  return fetch("http://localhost:3000/itineraries")
    .then(response => response.json())
    .then(parsedItineraries => {
      console.table(parsedItineraries);
      itineraries = parsedItineraries.slice();
    });
};

export const saveItinerary = itinerary => {
  return fetch("http://localhost:3000/itineraries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(itinerary)
  }).then(getItinerary);
};

export const deleteItinerary = itineraryId => {
  return fetch(`http://localhost:3000/itineraries/${itineraryId}`, {
      method: "DELETE"
  })
      .then(getItinerary)
}