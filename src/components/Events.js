import React, { useContext } from 'react'

import Event from './Event'
import AppContext from '../contexts/AppContext'

const Events = () => {
  // Eventに必要なdispatchは実はこのEventsコンポーネントでは直接的には必要ではない
  // EventコンポーネントもこのEventsと同じようにContextを使えば直接dispatchを受け取ることが出来るので、
  // このEventsコンポーネントでuseContextでdispatchを受け取ると書いたが、実は不要
  const { state } = useContext(AppContext)
  return (
    <>
      <h4>イベント一覧</h4>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>タイトル</th>
              <th>ボディー</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* そして配下コンポーネントであるEventに対して、prop経由で渡っていたdispatchも不要になる */}
            { state.map((event, index) => (<Event key={index} event={event} />)) }
          </tbody>
        </table>
    </>
  )
}

export default Events
