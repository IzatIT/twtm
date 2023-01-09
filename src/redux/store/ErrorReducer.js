
const defaultState = {
    error: '',
    movieError: '',
    personError: '',
    searchError: ''
}

export const ErrorReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ERROR":
            return { ...state, error: action.payload }
        case "ERRORMOVIE":
            return { ...state, movieError: action.payload }
        case "ERRORPERSON":
            return { ...state, personError: action.payload }
        case "ERRORSEARCH":
            return { ...state, searchError: action.payload }
        default:
            return state
    }
}