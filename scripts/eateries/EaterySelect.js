import { useEateries } from "./EateryProvider.js"

const eventHub = document.querySelector(".container")

const contentElement = document.querySelector(".filters__eat")

const EaterySelect = () => {
  const eateries = useEateries()

eventHub.addEventListener("change", changeEvent => {
  if(changeEvent.target.id === "eaterySelect") {
    const selectedEatery = changeEvent.target.value;
    console.log(selectedEatery)

    const message = new CustomEvent ("eaterySelected", {
      detail: {
        eatery: selectedEatery
      }
    })

    eventHub.dispatchEvent(message)
  }
})




const render = eateriesCollection => {
  contentElement.innerHTML += `
<select class="eateryDropdown" id="eaterySelect">
<option value="0">Please select an eatery...</option>
${eateriesCollection.map(
eatery => `<option id="eaterySelect">${eatery.state} - ${eatery.businessName}</option>`
)}
</select>
`;
};


render(eateries)
}

export default EaterySelect