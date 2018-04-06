import * as Types from '../action-types'

let filters = (state='all', action) => {
  switch (action.type) {
    case Types.CHANGE_FILTER:
      return state = action.filters
  
    default:
      return state
  }
}
export default filters
