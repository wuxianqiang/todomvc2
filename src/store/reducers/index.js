import {combineReducers} from 'redux'
import todos from './todos'
import filters from './filter'

const reducers = combineReducers({todos,filters})
export default reducers