const eventComponent = (event) => {
  
  return `
  <div class="event__content" id="event--${event.id}">

  
    
  
    <div class="event__title" id="event__title">${event.title}</div>
    <div class="event__dateStart" id="event__dateStart">${event.datestart}</div>
    <div class="event__dateend" id="event__dateend">${event.dateend}</div>

    
    ${event.times.map(time => 
      `<div class="event__timeStart" id="event__timeStart">${time.timestart}</div>
    <div class="event__timeend" id="event__timeend">${time.timeend}</div>`).join("")}
    <div class="event__description" id="event__description">${event.description}</div>
    <div class="event__feeinfo" id="event__feeinfo">${event.feeinfo}</div>
    <button class="close__dialog">Hide</button>
  </div>
  `
}



export default eventComponent