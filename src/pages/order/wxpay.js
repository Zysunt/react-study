import React, { Component } from 'react'
import store from '../../store'
import { addAction, subAction } from '../../store/action'

export class Wxpay extends Component {
  state = {
    money: store.getState().money
  }
  componentDidMount() {
    store.subscribe(() => {
      this.setState({ money: store.getState().money })
    })
  }
  render() {
    return (
      <div>
        <h1>微信</h1>
        <h2>余额：{this.state.money}</h2>
        <button onClick={e => this.decrement(50)}>付钱</button>
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

export default Wxpay