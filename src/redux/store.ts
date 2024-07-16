import { combineReducers, configureStore } from "@reduxjs/toolkit";
import attributeReducer from './features/attributeSlice'
const Reducers = combineReducers({
    attribute: attributeReducer
})

const store = configureStore({
    reducer: Reducers
})

export default store