import EaterySelect from "./eateries/EaterySelect.js";
import ParkSelect from "./parks/ParkSelect.js";
import AttractionSelect from "./attractions/AttractionSelect.js";
import { getParks } from "./parks/ParkProvider.js";
import { getAttractions } from "./attractions/AttractionProvider.js";
import { getEateries } from "./eateries/EateryProvider.js";
import StateSelect from "./parks/ParkStateSelector.js";

StateSelect()
getEateries().then(EaterySelect)
getAttractions().then(AttractionSelect)
