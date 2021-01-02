// ↓状態を知る必要があるので、useContextが必要
import React, { useContext } from 'react'

import OperationLog from './OperationLog'

import AppContext from '../contexts/AppContext'

// OperationLogsはstateに存在するOperationLogsを参照して
// mapで回して、レンダリングする
const OperationLogs = () => {
  // compornentのトップレベルでuseContextを使って
  // その引数にAppContextを渡してあげれば状態を参照することが出来る。
  const { state } = useContext(AppContext)
  return (
    <>
      <h4>操作ログ一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>内容</th>
            <th>日時</th>
          </tr>
        </thead>
        <tbody>
        {/* operationLogというstateの中にある1件1件の操作ログを元に
        <OperationLog>コンポーネントを実際に入っている内容とタイムスタンプを表示してもらう */}
          {
                            // ↓JSXでmapを使う時は引数にmapが提供しているindexをユニークなkeyとして使う。
            state.operationLogs.map((operationLog, index) => {
              return <OperationLog key={index} operationLog={operationLog}/>
                                            // ↑operationLogをpropで渡す。
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default OperationLogs
