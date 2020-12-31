import { createContext } from 'react'

const AppContext = createContext()

// ↓各種コンポーネントで使えるようにexportしてあげる
export default AppContext

// prop drilling問題を解消することで顕著に変わってくるのは
// 中継ぎのcompornentになる このアプリでの中継ぎはEventsコンポーネントになる
// Contextを利用することで得られるメリットはPropsとして受け取る
// 余計な引数がなくなったこと そして配下componentに渡すデータを伝搬する責任から
// 解放された為、コードがスッキリした形になる。
