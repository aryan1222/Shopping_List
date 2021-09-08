import { ADD_ITEM, DELETE_ITEM, GET_ITEMS, ITEMS_LOADING } from "./itemActionTypes"

const initialState = {
    items : [],
    isLoading : false
}

export const itemReducer = (state = initialState, action) => {

    switch(action.type) {
        case GET_ITEMS :
            return {
                ...state,
                items : action.payload,
                isLoading : false
            };
        case DELETE_ITEM :
            return {    
                ...state,
                items : state.items.filter(item => item._id !== action.payload._id)
            };
        case ADD_ITEM:
            return {
                items : [action.payload, ...state.items]
            };
        case ITEMS_LOADING:
            return {
                ...state,
                isLoading : true
            }
        default :
            return state;
    }
}