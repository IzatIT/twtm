
const defaultState = {
    error: '',
    movieError: '',
    personError: '',
    searchError: ''
}

export const ErrorReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ERROR_GEN":
            return { ...state, error: action.payload }
        case "ERROR_MOVIE":
            return { ...state, movieError: action.payload }
        case "ERROR_PERSON":
            return { ...state, personError: action.payload }
        case "ERROR_SEARCH":
            return { ...state, searchError: action.payload }
        default:
            return state
    }
}