import {apiService} from "./apiServices";
import {EndPoints} from "../API/EndPoints";

const episodesService = {
    getEpisodes: (page) => apiService.get(EndPoints.episodes, {params:{page}})
}

export {
    episodesService
}