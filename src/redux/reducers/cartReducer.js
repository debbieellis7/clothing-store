import { TOGGLE_CART_HIDDEN, ADD_ITEM } from '../actionTypes/cart'
import { addItemToCart } from '../utilities/cart'

const initialState = {
  hidden: true,
  cartItems: []
}

const cartReducer = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }

    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }

    default:
      return state
  }
}

export default cartReducer
