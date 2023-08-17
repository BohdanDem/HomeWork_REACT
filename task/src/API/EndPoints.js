export const baseURL = 'https://rickandmortyapi.com/api'

export const EndPoints = {
    episodes: "/episode",
    characters: {
        byIDs: (IDs) => `/character/${IDs}`
    }
}