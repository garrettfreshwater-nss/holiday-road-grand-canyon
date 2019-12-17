const parkComponent = (park) => {
  
    return `
   
    <div class="park__content">
      <div class="park__name">${park.fullName}</div>
      <img src="" alt="">
    </div>
  
    <dialog class="dialog__Park" id="details__${park.id}">
      <div class="park__name">${park.fullName}</div>
      <div class="park__state">${park.states}</div>
      <div class="park__description">${park.description}</div>
      <div class="park__url">${park.url}</div>
      
      <button class="close__dialog">Hide</button>
    </dialog>
  
    `
}



export default parkComponent