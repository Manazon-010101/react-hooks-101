import {
  ADD_OPERATION_LOG,
  DELETE_ALL_OPARATION_LOGS
} from '../actions'

                      // ↓reducerなのでstateが丸ごと渡ってくる。
const oparationLogs = (state= [], action) => {
  switch (action.type) {
    case ADD_OPERATION_LOG:
      const operationLog = {
        dasecription: action.dasecription,
        operatedAt: action.operatedAt
      }
      return [operationLog, ...state]
    case DELETE_ALL_OPARATION_LOGS:
      return []
    default:
      return state
  }
}

export default oparationLogs
