import React, { useContext } from 'react'

import Event from './Event'
import AppContext from '../contexts/AppContext'

const Events = ({state, dispatch}) => {
  // 共有したいものをProviderに渡せばそのProviderでラップされた任意のコンポーネント上で
  // Propsを返さずにバケツリレーみたいな事をせずに共有物を参照することができる
  const value = useContext(AppContext)
  return (
    <>
      <div>{value}</div>
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
            { state.map((event, index) => (<Event key={index} event={event} dispatch={dispatch}/>)) }
          </tbody>
        </table>
    </>
  )
}

export default Events
