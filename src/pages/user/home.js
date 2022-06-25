import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { decAction, addAction, getHomeAction } from '../../store/action'

class Home extends PureComponent {
  componentDidMount() {
    this.props.getData()
  }

  render() {
    let { userinfo ,money ,subNumber,makeMoney} = this.props
    return (
      <div>
        <h1>主页</h1>
        <h2>余额：{money}</h2>
        <button onClick={e => subNumber(1)}>付钱</button>
        <button onClick={e => makeMoney(50)}>收钱</button>
        <h2>用户信息</h2>
        <ul className='green'>
          {
            userinfo?.map(item => {
              return (
                <li key={item.key}>名字：{item.name}--年纪：{item.age}--手机号：{item.phone}--{item.address}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  // console.log(state, props)
  return {
    money: state.money,
    userinfo: state.userInfo,
    info: props.info
  }
}

const mapDispatchProps = (dispatch) => {
  return {
    subNumber: (num) => {
      dispatch(decAction(num))
    },
    makeMoney: (num) => {
      dispatch(addAction(num))
    },
    getData: () => {
      dispatch(getHomeAction)
    }
  }
}

export default connect(mapStateToProps, mapDispatchProps)(Home)