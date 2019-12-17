const attractionComponent = (attraction) => {
    return `
    <div class="attraction__content">
      <div class="attraction__name">${attraction.name}</div>
      <img src="" alt="">
    </div>
  
    <dialog class="dialog__attraction" id="details__${attraction.id}">
      <div class="attraction__name">${attraction.name}</div>
      <div class="attraction__city">${attraction.city}</div>
      <div class="attraction__state">${attraction.state}</div>
      <div class="attraction__description">${attraction.description}</div>
      <div class="attraction__ameneties">${attraction.ameneties}</div>
      <div class="attraction__wifi">${attraction.wifi}</div>
      <div class="attraction__restrooms">${attraction.restrooms}</div>
      
      <button class="close__dialog">hide</button>
    </dialog>
    `
}



export default attractionComponent