const eateryComponent = (eatery) => {
    return `
    <div class="eatery__content">
      <div class="eatery__name">${eatery.businessName}</div>
      <img src="" alt="">
      <button class="button__details" id="eateryButton__${eatery.id}">Details</button>

  
    <dialog class="dialog__eatery" id="details__${eatery.id}">
      <div class="eatery__name">${eatery.businessName}</div>
      <div class="eatery__city">${eatery.city}</div>
      <div class="eatery__state">${eatery.state}</div>
      <div class="eatery__description">${eatery.description}</div>
      <div class="eatery__wifi">Wifi Available: ${eatery.ameneties.wifi}</div>
      <div class="eatery__restrooms">Restrooms Available: ${eatery.ameneties.restrooms}</div>
      
      <button class="close__dialog">Hide</button>
    </dialog>
    </div>
    `
}



export default eateryComponent