import * as Types from '../action-types'

let todos = {
  addTodo (title) {
    return {type: Types.ADD_TODO, title}
  },
  deleteOneTodo (id) {
    return {type: Types.DEL_TODO, id}
  },
  changeOneTodo (id) {
    return {type: Types.TOGGE_TODO, id}
  },
  deleteAllCompleted () {
    return {type: Types.DELETE_ALL_COMPLETED}
  },
  changeAllTodo (completed) {
    return {type: Types.TOGGLE_ALL, completed}
  },
  changeTitle (id, title) {
    return {type: Types.CHANGW_TITLE, id, title}
  }
}
export default todos
