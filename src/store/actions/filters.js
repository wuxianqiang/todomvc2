import * as Types from '../action-types'
let filters = {
  changeType (filter) {
    return {type: Types.CHANGE_FILTER, filters:filter}
  }
}
export default filters
