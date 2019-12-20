
let directions =[]
let latAndLong =[]
// plug lat & long data pairs into fethc string below

export const getLatLong = (city, state) => {

    return fetch(`https://graphhopper.com/api/1/geocode?q=${city}+${state}&locale=us&debug=true&key=19cf6ec1-6af9-47c0-b38e-4412e9afad34`)

    .then(res => res.json())
.then(parsedDirections => {latAndLong = parsedDirections.hits.slice()
console.log(latAndLong)

})
}

export const useLatLong  = () => {
    // console.log(useLatLong())
    return latAndLong
    
}

// Example Nashville to yosemite:

export const getDirections = (destination_latitude1, destination_longitude1, destination_latitude2, destination_longitude2, destination_latitude3, destination_longitude3 ) => {
return fetch("https://graphhopper.com/api/1/route?&point=36.17709885,-86.7893415298845&point=29.49119005,-98.5759149469069&vehicle=car&locale=us&instructions=true&calc_points=true&key=19cf6ec1-6af9-47c0-b38e-4412e9afad34")
// return fetch("https://graphhopper.com/api/1/route?point=starting_latitude,starting_longitude&point=destination_latitude,destination_longitude&vehicle=car&locale=us&instructions=true&calc_points=true&key=19cf6ec1-6af9-47c0-b38e-4412e9afad34")
// return fetch(`https://graphhopper.com/api/1/route?point=${starting_latitude},${starting_longitude}&point=${destination_latitude1},${destination_longitude1}&point=${destination_latitude2},${destination_longitude2}&point=${destination_latitude3},${destination_longitude3}&vehicle=car&locale=us&instructions=true&calc_points=true&key=19cf6ec1-6af9-47c0-b38e-4412e9afad34`)
// return fetch(`https://graphhopper.com/api/1/route?point=36.17709885,-86.7893415298845&point=${destination_latitude1},${destination_longitude1}&point=${destination_latitude2},${destination_longitude2}&point=${destination_latitude3},${destination_longitude3}&vehicle=car&locale=us&instructions=true&calc_points=true&key=19cf6ec1-6af9-47c0-b38e-4412e9afad34`)

.then(res => res.json())
.then(parsedDirections => {directions = parsedDirections.hints.instructions.slice()
console.log(directions)

})
}

export const useDirections = () => {
    console.log(useDirections())
    return directions
    
}

// https://graphhopper.com/api/1/route?point=starting_latitude,starting_longitude&point=destination_latitude,destination_longitude&vehicle=car&locale=us&instructions=true&calc_points=true&key=19cf6ec1-6af9-47c0-b38e-4412e9afad34"