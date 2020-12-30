import React, { useReducer } from 'react'
              // ↑useStateはEventFormでやってるので不要

import 'bootstrap/dist/css/bootstrap.min.css'

import EventForm from './EventForm'

import Events from './Events'
import reducer from '../reducers'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <div className="container-fluid">
      {/* ↓EventFormにeventとdispatchがpropとして渡される(Reactの超基本) */}
      <EventForm state={state} dispatch={dispatch}/>
      <Events state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
