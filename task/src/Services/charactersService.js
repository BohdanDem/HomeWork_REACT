import {apiService} from "./apiServices";
import {EndPoints} from "../API/EndPoints";

const charactersService = {
    getCharacters: (IDs) => apiService.get(EndPoints.characters.byIDs(IDs))
}

export {
    charactersService
}