let attraction = []

export const useAttractions = () => {
    return attraction
}

export const getAttractions = () => {

    return fetch("http://holidayroad.nss.team/bizarreries")

        .then(response => response.json())
        .then(


            parsedAttractions => {
                attraction = parsedAttractions.slice()
            }

        
        )
}
