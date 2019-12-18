const eventHub = document.querySelector(".container")



export const initializeDialogDetailEventListeners = () => {
eventHub.addEventListener("click", event => {
  if (event.target.id.startsWith("itineraryDetailsButton__")) {
    const dialogSiblingSelector = `#${event.target.id}+dialog`;
    const theDialog = document.querySelector(dialogSiblingSelector);
    theDialog.showModal();
  } else if (event.target.classList.contains("close__itineraryDialog")) {
    const dialogElement = event.target.parentNode;
    dialogElement.close();
  }
});
}