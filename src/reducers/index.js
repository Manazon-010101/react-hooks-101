// action = {
//   type: 'CREATE_EVENT',
//   title: '2020東京オリンピックのお知らせ',
//   body: '2020年に東京でオリンピックを開催します！つきましては.....'
// }
// ↑ タイトルとボディーで打った内容がactionで受け取る


// #before 最初は何も書いていない状態から始まるので空白
// state = []
// ↓
// #after 入力フォームから入ってきたものをそのまま活用する
// state = [
//   {
//     id: 1
//     title: '2020東京オリンピックのお知らせ',
//     body: '2020年に東京でオリンピックを開催します！つきましては.....'
//   }
// ]


// #before
// state = [
//   { id:1, title:'タイトル1', body: 'ボディー１' },
//   { id:2, title:'タイトル2', body: 'ボディー２' },
//   { id:3, title:'タイトル3', body: 'ボディー３' },
// ]
// ↓
// #after 既存のidを拾って 最後のidの値を+1する
// state = [
//   { id:1, title:'タイトル1', body: 'ボディー１' },
//   { id:2, title:'タイトル2', body: 'ボディー２' },
//   { id:3, title:'タイトル3', body: 'ボディー３' },
// {
//   id: 4,
//   title: '2020東京オリンピックのお知らせ',
//   body: '2020年に東京でオリンピックを開催します！つきましては.....'
// }



// ↓無い時
// state = []
// ↓有る時
// state = [
//   { id:1, title:'タイトル1', body: 'ボディー１' },
//   { id:2, title:'タイトル2', body: 'ボディー２' },
//   { id:3, title:'タイトル3', body: 'ボディー３' },
// ]


                // ↓stateが未定義だった場合に[]で設定してる物によって初期化される
const events = (state = [], action) => {
  // ↓ actionは常にtype属性が渡ってくるのでそのtypeを常に監視する
  switch(action.type) {
    case 'CREATE_EVENT':
      const event = { title: action.title, body: action.body }
      // ↓非常に重要なパラメータ 配列の長さを取得できる
      const length = state.length
      // ↓三項演算子を使って1行にまとめて 0だったらidを1にして そうじゃない時は最後尾の値に+1する
      const id = length === 0 ? 1 : state[length - 1].id + 1
      // ↓この配列に一旦前の状態を展開して この状態の最後の要素に今回作成したイベント情報を返してあげる
      return [...state, { id: id, ...event }]
    case 'DELETE_EVENT':
      return state
    case 'DELETE_ALL_EVENTS':
      return []
    default:
      return state
  }
}

export default events
