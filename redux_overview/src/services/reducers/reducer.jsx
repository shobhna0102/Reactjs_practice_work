import { ADD_TO_CART, REMOVE_TO_CART } from "../constant";

// const initialState = {
//     cartData: []
// }
const cartItem = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.log(action);
            return [
                ...state,
                { cartData: action.data }
            ]
        case REMOVE_TO_CART:
            console.log(action);
            state.pop();
            return [
                ...state,
            ]
        default:
            return state;
    }
}
export default cartItem;
