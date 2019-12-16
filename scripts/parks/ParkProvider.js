let Park = []

export const useParks = () => {
    return Park
}

export const getParks = () => {

    return fetch("https://developer.nps.gov/api/v1/parks")

        .then(response => response.json())
        .then(


            parsedParks => {
                Parks = parsedParks.slice()
            }

        
        )
}
