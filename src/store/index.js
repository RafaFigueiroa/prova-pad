import { createStore ,combineReducers} from 'redux'
import { tasks } from './tasks'

const reducers = combineReducers({
  tasks
})

const store = createStore(reducers)

export { store }