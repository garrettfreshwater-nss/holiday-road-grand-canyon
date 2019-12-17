import { useAttractions } from "./AttractionProvider.js"

const eventHub = document.querySelector(".container")

const contentElement = document.querySelector(".filters__attract")

const AttractionSelect = () => {
  const attractions = useAttractions()

eventHub.addEventListener("change", changeEvent => {
  if(changeEvent.target.id === "attractionSelect") {
    const selectedAttraction = changeEvent.target.value;
    console.log(selectedAttraction)

    const message = new CustomEvent ("attractionSelected", {
      detail: {
        attraction: selectedAttraction
      }
    })

    eventHub.dispatchEvent(message)
  }
})




const render = attractionsCollection => {
  contentElement.innerHTML += `
<select class="attractionDropdown" id="attractionSelect">
<option value="0">Please select an attraction...</option>
${attractionsCollection.map(
attraction => `<option id="attractionSelect">${attraction.state} - ${attraction.name}</option>`
)}
</select>
`;
};


render(attractions)
}

export default AttractionSelect