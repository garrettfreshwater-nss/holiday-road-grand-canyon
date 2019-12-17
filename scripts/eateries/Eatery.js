const eateryComponent = (eatery) => {
    return `
   
    <div class="eatery__content">
      <div class="eatery__name">${eatery.businessName}</div>
      <img src="" alt="">
    </div>
  
    <dialog class="dialog__eatery" id="details__${eatery.id}">
      <div class="eatery__name">${eatery.businessName}</div>
      <div class="eatery__city">${eatery.city}</div>
      <div class="eatery__state">${eatery.state}</div>
      <div class="eatery__description">${eatery.description}</div>
      <div class="eatery__ameneties">${eatery.ameneties}</div>
      <div class="eatery__souvenirs">${eatery.souvenirs}</div>
      <div class="eatery__restrooms">${eatery.restrooms}</div>
      
      <button class="close__dialog">Hide</button>
    </dialog>
 
    `
}



export default eateryComponent