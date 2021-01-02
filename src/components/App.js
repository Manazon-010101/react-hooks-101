import React, { useEffect,useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import EventForm from './EventForm'
import Events from './Events'
import OperationLogs from './OperationLogs'
import AppContext from '../contexts/AppContext'
import reducer from '../reducers'

const APP_KEY = 'appWithRedux'

const App = () => {
  const appState = localStorage.getItem(APP_KEY)
  // このinitialStateはJSのオブジェクトである必要がある
  // なのでこのappStateはJSONの構造を成すstringとしてstringifyで文字列化しているので
  // それを元に戻す処理が必要になる
  // 元に戻してあげてJSのオブジェクトに元に戻す処理をやるのは JSON.parseメソッド
  const initialState = appState ? JSON.parse(appState) : {
    events: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  // ↓stateを監視させて 何か状態がかわったときにコールバックを実行させる
  useEffect(() => {
    // stateはローカルストレージに保存できる形式ではないので文字列化させる必要がある
    // ↓MDNから          // ↓キーを設定する    //↓sttingifyメソッドを使って文字列化する
    localStorage.setItem(APP_KEY, JSON.stringify(state))
  }, [state])
  // こうすることでこのstateの状態遷移が発生する度にsetItemが実行される

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  );
}
export default App;
