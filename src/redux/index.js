import { createStore, combineReducers  } from "redux"
import { ModeReducer } from "./store/ModeReducer"
import { LanguageReducer } from "./store/LanguageReducer"
import { SubmenuReducer } from "./store/ShowedSubmenuReducer"
import { composeWithDevTools } from "redux-devtools-extension"
import { ActiveCategoryReducer } from "./store/ActiveCategoryReducer"
import { inputReducer } from "./store/InputReducer"
import { ErrorReducer } from "./store/ErrorReducer"
import { DataReducer } from "./store/DataReducer"

const rootReducer = combineReducers({
    mode: ModeReducer,
    language: LanguageReducer,
    submenu: SubmenuReducer,
    activeCategory: ActiveCategoryReducer,
    inputValue: inputReducer,
    error: ErrorReducer,
    data: DataReducer
})

export const store = createStore(rootReducer, composeWithDevTools())
