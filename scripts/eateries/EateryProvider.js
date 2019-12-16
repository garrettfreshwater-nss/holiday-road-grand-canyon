let eatery = []

export const useEateries = () => {
    return eatery
}

export const getEateries = () => {

    return fetch("https://developer.nps.gov/api/v1/parks")

        .then(response => response.json())
        .then(


            parsedEateries => {
                eatery = parsedEateries.slice()
            }

        
        )
}
