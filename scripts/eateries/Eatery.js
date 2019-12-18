const eateryComponent = (eatery) => {
    return `
    <div class="eatery__content">
      <div class="eatery__name">${eatery.businessName}</div>
      <img class="icon fork_icon" src="/images/fork.svg" alt="">

      <button class="button__details" id="eateryButton__${eatery.id}">Details</button>

  
    <dialog class="dialog__eatery" id="details__${eatery.id}">
      <div class="eatery__name" id="eatery__name">${eatery.businessName}</div>
      <div class="eatery__city" id="eatery__city">${eatery.city}</div>
      <div class="eatery__state" id="eatery__state">${eatery.state}</div>
      <div class="eatery__description" id="eatery__description">${eatery.description}</div>
      <div class="eatery__wifi" id="eatery__wifi">Wifi Available: ${eatery.ameneties.wifi}</div>
      <div class="eatery__restrooms" id="eatery__restrooms">Restrooms Available: ${eatery.ameneties.restrooms}</div>
      
      <button class="close__dialog">Hide</button>
    </dialog>
    </div>
    `
}



export default eateryComponent