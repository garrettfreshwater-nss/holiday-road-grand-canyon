import states from "/api/states.js"

const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".filters__states")
const useStates = () => {
  return states
}

const StateSelect = () => {
  const states = useStates()

eventHub.addEventListener("change", changeEvent => {
  if(changeEvent.target.id === "stateSelect") {
    const selectedState = changeEvent.target.value;
    console.log(selectedState)

    const message = new CustomEvent ("stateSelected", {
      detail: {
        state: selectedState
      }
    })

    eventHub.dispatchEvent(message)
  }
})




const render = statesCollection => {
  contentElement.innerHTML += `
<select class="stateDropdown" id="stateSelect">
<option value="0">Please select a state...</option>
${statesCollection.map(
state => `<option id="stateSelect" value="${state.abbreviation}">${state.abbreviation}-${state.name}</option>`
)}
</select>
`;
};


render(states)
}

export default StateSelect