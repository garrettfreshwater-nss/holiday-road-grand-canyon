import { useParks } from "./ParkProvider.js"

const eventHub = document.querySelector(".container")

const contentElement = document.querySelector(".filters__parks")

const ParkSelect = () => {
  const parks = useParks()

eventHub.addEventListener("change", changeEvent => {
  if(changeEvent.target.id === "parkSelect") {
    const selectedPark = changeEvent.target.value;
    console.log(selectedPark)

    const message = new CustomEvent ("parkSelected", {
      detail: {
        park: selectedPark
      }
    })

    eventHub.dispatchEvent(message)
  }
})




const render = parksCollection => {
  contentElement.innerHTML += `
<select class="parkDropdown" id="parkSelect">
<option value="0">Please select a park...</option>
${parksCollection.map(
park => `<option id="parkSelect">${park.states}-${park.fullName}</option>`
)}
</select>
`;
};


render(parks)
}

export default ParkSelect