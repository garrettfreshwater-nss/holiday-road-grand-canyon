import EaterySelect from "./eateries/EaterySelect.js";
import ParkSelect from "./parks/ParkSelect.js";
import AttractionSelect from "./attractions/AttractionSelect.js";
import { getParks } from "./parks/ParkProvider.js";
import { getAttractions } from "./attractions/AttractionProvider.js";
import { getEateries } from "./eateries/EateryProvider.js";
import StateSelect from "./parks/ParkStateSelector.js";
import ParkListComponent from "./parks/ParkList.js";
import weatherListComponent from "./weather/WeatherList.js";
import AttractionListComponent from "./attractions/AttractionList.js";
import { getWeather } from "./weather/WeatherProvider.js";
import EateryListComponent from "./eateries/EateryList.js";
import initializeSaveItineraryEventListener from "./itinerary/ItineraryList.js";





initializeSaveItineraryEventListener()

StateSelect()
getEateries().then(EaterySelect)
getAttractions().then(AttractionSelect)
ParkListComponent()
weatherListComponent()
AttractionListComponent()
AttractionListComponent()
EateryListComponent()
