import { types } from '../types/types'

export const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case types.getitems:
      return action.payload
    default:
      return state
  }
}
