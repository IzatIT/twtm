
const defaultState = {
    language: JSON.parse(localStorage.getItem('language')) || 'ru-RU'
}

export const LanguageReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'LANGUAGE_CHANGE':
            localStorage.setItem('language', JSON.stringify(action.payload))
            return { ...state, language: action.payload }
        default:
            return state
    }
}