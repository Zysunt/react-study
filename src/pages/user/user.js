import React from 'react'
import { connect } from 'react-redux'
import { decAction, addAction } from '../../store/action'

function User(props) {
  let { money,info,subNumber,makeMoney} = props
  // console.log('user page',props,subNumber,makeMoney)
  return (
    <div>
        <h1>{info?.name}的页面：</h1>
        <h2>余额：{money}</h2>
        <button onClick={e => subNumber(1)}>付钱</button>
        <button onClick={e => makeMoney(50)}>收钱</button>
        <h2 className='red'>姓名：{info?.name}--年龄:{info?.age}--性别:{info?.sex}</h2>
    </div>
  )
}


const mapStateToProps = (state, props) => {
  // 建立组件自身的state和store的state的映射关系
  // console.log(state, props)
  return {
    money: state.money,
    userinfo: state.userInfo,
    info: props.info
  }
}
// mapStateToProps作用就是把state都转成当前组件的props属性,供当前组件或者子组件来进行使用

// 用于建立组件跟dispatch的映射关系
const mapDispatchProps = (dispatch) => {
  return {
    subNumber: (num) => {
      dispatch(decAction(num))
    },
    makeMoney: (num) => {
      dispatch(addAction(num))
    },
  }
}
// connect:本身是一个函数,返回一个高阶组件,它有两个参数:mapStateToProps和mapDispatchProps
const foo = connect(mapStateToProps, mapDispatchProps)

export default foo(User)
