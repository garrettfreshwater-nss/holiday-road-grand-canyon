const attractionComponent = (attraction) => {
    return `
    <section class="attraction__card">
    <div class="attraction__content">
      <div class="attraction__name">${attraction.businessName}</div>
      <img src="" alt="">
    </div>
  
    <dialog class="dialog__attraction" id="details__${attraction.id}">
      <div class="attraction__name">${attraction.businessName}</div>
      <div class="attraction__city">${attraction.city}</div>
      <div class="attraction__state">${attraction.state}</div>
      <div class="attraction__description">${attraction.description}</div>
      <div class="attraction__ameneties">${attraction.ameneties}</div>
      <div class="attraction__wifi">${attraction.wifi}</div>
      <div class="attraction__restrooms">${attraction.restrooms}</div>
      
      <button class="close__dialog">hide</button>
    </dialog>
  </section>
    `
}



export default attractionComponent