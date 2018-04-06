import * as Types from '../action-types'
let todos = (state = JSON.parse(localStorage.getItem('TODO') || '[]'), action) => {
  state = [...state]
  switch (action.type) {
    case Types.ADD_TODO:
    // 增加某个任务
      state.push({id: Date.now(), title: action.title, completed: false})
      break;
    case Types.DEL_TODO:
    // 删除某个任务
      state = state.filter(item => item.id !== action.id)
      break;
    case Types.TOGGE_TODO:
    // 修改任务状态
      state.forEach(item => {
        if (item.id === action.id) {
          item.completed = !item.completed
        }
      })
      break;
    case Types.TOGGLE_ALL:
    // 全选
      state.forEach(item => item.completed = action.completed)
      break;
    case Types.CHANGW_TITLE:
      let index = state.findIndex(item => item.id === action.id)
      let cur = state[index]
      state[index] = {...cur, title: action.title}
  }
  localStorage.setItem('TODO', JSON.stringify(state))
  return state
}
export default todos
