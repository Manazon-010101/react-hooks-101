import React, { useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import EventForm from './EventForm'
import Events from './Events'
import AppContext from '../contexts/AppContext'
import reducer from '../reducers'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    // このvalueに対してオブジェクトを渡していく、
    // 実際にこれを渡せばいい物は今現在配下コンポーネントに対してpropで渡しているものになる。
    // それはstateとdispatch

    // ↓こうする事で配下コンポーネントはcontextはuseContextを使う事によって
    //  tateとdispatchを受け取ることが出来るので以下2行のpropは不要になる
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        {/* <EventForm state={state} dispatch={dispatch}/>
        <Events state={state} dispatch={dispatch}/> */}
        <EventForm />
        <Events />
      </div>
    </AppContext.Provider>
  );
}

export default App;
