import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./reducers";

export const rootReducer = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer
})

