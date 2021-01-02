// 1件つづ操作ログをレンダリングする 責任を持つコンポーネント
import React from 'react'
                    // ↓OperationLogs.jsから1件つづpropで渡ってくるこれを受け取ってあげる必要がある。
const OperationLog = ({ operationLog }) => {
  return (
    <tr>
      {/* これで内容と日時が表示される */}
      <td>{operationLog.description}</td>
      <td>{operationLog.operatedAt}</td>
    </tr>
  )
}

export default OperationLog
