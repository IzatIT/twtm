
const defaultState = {
    homeDataOne: [],
    homeDataTwo: [],
    homeDataThree: [],
    movieDetails: {},
    movieCredits: {},
    movieSocialMedias: {},
    movieKeywords: [],
    personDetails: {},
    personSocialMedias: {},
    personCredits: {},
    personTvCredits: {},

}

export const DataReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_HOME_DATA_ONE':
            return { ...state, homeDataOne: action.payload }
        case 'ADD_HOME_DATA_TWO':
            return { ...state, homeDataTwo: action.payload }
        case 'ADD_HOME_DATA_THREE':
            return { ...state, homeDataThree: action.payload }
        case 'ADD_MOVIE_DETAILS':
            return { ...state, movieDetails: action.payload }
        case 'ADD_MOVIE_CREDITS':
            return { ...state, movieCredits: action.payload }
        case 'ADD_MOVIE_SOCIAL_MEDIA':
            return { ...state, movieSocialMedias: action.payload }
        case 'ADD_MOVIE_KEYWORDS':
            return { ...state, movieKeywords: action.payload }
        case 'ADD_PERSON_DETAILS':
            return { ...state, personDetails: action.payload }
        case 'ADD_PERSON_SOCIAL_MEDIA':
            return { ...state, personSocialMedias: action.payload }
        case 'ADD_PERSON_CREDITS':
            return { ...state, personCredits: action.payload }
        case 'ADD_PERSON_TV_CREDITS':
            return { ...state, personTvCredits: action.payload }
        default:
            return state
    }
}