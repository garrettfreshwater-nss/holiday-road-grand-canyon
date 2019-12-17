const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
  if(clickEvent.target.id === "saveItinerary") {
   
    const itineraryName = document.querySelector("#itinerary__Name").value
    // const suspect = document.querySelector("#suspect").value
    // const noteText = document.querySelector("#noteEntry").value

    const newNote = new CustomEvent ("noteSaved",
    {
      detail: {
        itineraryName: itineraryName,

        itineraryDetails: [
        {
          park:
          {
            parkName: parkName,
            parkState: parkState,
            parkDescript: parkDescript
          },
          eatery:
          {
            eateryName: eateryName,
            eateryState: eateryState,
            eateryDescript: eateryDescript
          },
          attraction:
          {
            attractionName: attractionName,
            attractionState: attractionState,
            attractionDescript: attractionDescript
          }
      

      }
    ]}})
        
  
    
    eventHub.dispatchEvent(newNote)
  }})