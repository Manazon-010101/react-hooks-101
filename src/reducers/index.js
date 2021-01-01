import { combineReducers } from 'redux'

import events from './events'
import oparationLogs from './oparationLogs'

export default combineReducers({
  events,
  oparationLogs
})
