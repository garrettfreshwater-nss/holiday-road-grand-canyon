const eventHub = document.querySelector(".container")

const AttractionListComponent = () => {

    eventHub.addEventListener("attractSelected", event => {
        const allTheAttractions = useAttractions()
        render(allTheAttractions)
    })

    const render = (attractionsCollection) => {
        contentTarget.innerHTML = 

        `${attractionsCollection.map(
            (currentAttraction) => {
                AttractionComponent(currentAttraction)
            }
        ).join("") }
        `
      
            
    }

}
export default AttractionListComponent