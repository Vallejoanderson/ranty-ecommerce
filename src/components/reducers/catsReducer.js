import { types } from '../types/types'

export const catsReducer = (state = [], action) => {
  switch (action.type) {
    case types.getcats:
      return action.payload
    default:
      return state
  }
}
