let eatery = []

export const useEateries = () => {
    return eatery
}

export const getEateries = () => {

    return fetch("http://holidayroad.nss.team/eateries")

        .then(response => response.json())
        .then(


            parsedEateries => {
                eatery = parsedEateries.slice()
                .sort(function(a, b) {
                    var nameA = a.state.toUpperCase(); // ignore upper and lowercase
                    var nameB = b.state.toUpperCase(); // ignore upper and lowercase
                    if (nameA < nameB) {
                      return -1;
                    }
                    if (nameA > nameB) {
                      return 1;
                    }
                  
                    // names must be equal
                    return 0;
                  });;
            }

        
        )
}
