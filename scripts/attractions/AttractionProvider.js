let attraction = []

export const useAttractions = () => {
    return attraction
}

export const getAttractions = () => {

    return fetch("https://developer.nps.gov/api/v1/parks")

        .then(response => response.json())
        .then(


            parsedAttractions => {
                attractions = parsedAttractions.slice()
            }

        
        )
}
