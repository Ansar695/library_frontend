import { actionTypes } from "./constants";

const init= {
    products: []
};
export const productReducer = (state=init, action) => {
    switch(action.type){
        case actionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };
        default:
            return state
    }
}

export const selectedProductReducer = (state={}, action) => {
    switch(action.type){
        case actionTypes.SELECTED_PRODUCTS:
            return {
                ...state,
                ...action.payload
            };
        case actionTypes.REMOVE_SELECTED_PRODUCTS:
            return {};
        default:
            return state
    }
}

