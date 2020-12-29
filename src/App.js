import React, {useState} from 'react';

const App = props => {
                                  // ↓ オブジェクトを丸ごと渡すことができる
  const [state, setState] = useState(props)
  const { name, price } = state

  // 状態は個々のvalue(値)で持つだけじゃくて、オブジェクトと言う形でも持てる
  // propsを丸ごと渡してそのpropsと言うものを全部まるっとstateオブジェクトで管理する

  return (
    <>
      <p>現在の{name}は、{price}円です。</p>
      <button onClick={() => setState({...state, price: price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: price - 1})}>-1</button>
      <button onClick={() => setState(props)}>Reset</button>
      <input value={name} onChange={e => setState({ ...state, name: e.target.value })}/>
    </>
  )
}

App.defaultProps = {
  name: '',
  price: 1000
}

export default App;
