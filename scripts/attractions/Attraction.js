const attractionComponent = (attraction) => {
    
  const yesSouvenirs = () => {
    
    if (`${attraction.ameneties.souvenirs}` === "false") {
      console.log(attraction.ameneties.souvenirs)
   
      return "Souvenirs are not available"
   
   
    } else {  
      console.log(attraction.ameneties.souvenirs)
      
      return "Souvenirs are available"
    
      }
    
    }
    const souvenirs = yesSouvenirs()
    
    
    const yesRestrooms = () => {
      
      if (`${attraction.ameneties.restrooms}` === "false") {
        console.log(attraction.ameneties.restrooms)
     
        return "Restrooms are not available"
     
     
      } else {  
        console.log(attraction.ameneties.restrooms)
        
        return "Restrooms are available"
    
        }
      
      }
      const restrooms = yesRestrooms()
  
  
  
  
  
  return `
    <div class="attraction__content" id="attraction--${attraction.id}">
      <div class="attraction__name">${attraction.name}</div>
    <button class="button__details" id="attractionButton__${attraction.id}">Details</button>
  
    <dialog class="dialog__attraction" id="details__${attraction.id}">
      <div class="attraction__name" id="attraction__name"value="${attraction.name}">${attraction.name}</div>
      <div class="attraction__city" id="attraction__city">${attraction.city}</div>
      <div class="attraction__state" id="attraction__state">${attraction.state}</div>
      <div class="attraction__description" id="attraction__description">${attraction.description}</div>
      <div class="attraction__souvenirs" id="attraction__souvenirs">Souvenirs Available: ${attraction.ameneties.souvenirs}</div>
      <div class="attraction__restrooms" id="attraction__restrooms">Restrooms Available: ${attraction.ameneties.restrooms}</div>
      <div class="attraction__name">${attraction.name}</div>
      <div class="attraction__city">${attraction.city}</div>
      <div class="attraction__state">${attraction.state}</div>
      <div class="attraction__description">${attraction.description}</div>
      <div class="attraction__souvenirs">Souvenirs Available: ${souvenirs}</div>
      <div class="attraction__restrooms">Restrooms Available: ${restrooms}</div>
      
      <button class="close__dialog">hide</button>
    </dialog>
    </div>
    `
}



export default attractionComponent