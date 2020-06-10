import { TOGGLE_CART_HIDDEN, ADD_ITEM, CLEAR_ITEM_FROM_CART } from '../actionTypes/cart'

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item
})

export const clearItemFromCart = item => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: item
})
