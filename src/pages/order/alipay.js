import React, { PureComponent } from 'react'
import store from '../../store'
import { addAction, subAction } from '../../store/action'

export class Alipay extends PureComponent {
  state = {
    money: store.getState().money
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({money: store.getState().money})
    })
  }

  render() {
    return (
      <div>
        <h1>支付宝</h1>
        <h2>余额：{this.state.money}</h2>
        <button onClick={e => this.decrement(1)}>付钱</button>
        <button onClick={e => this.makemoney(100)}>收钱</button>
      </div>
    )
  }
  decrement(num) {
    store.dispatch(subAction(num))
  }
  makemoney(num) {
    store.dispatch(addAction(num))
  }
}

export default Alipay