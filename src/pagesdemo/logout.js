import React, { Component } from 'react'
import GetUserName from './getUserName'

export class Login extends Component {
    render() {
        return (
            <div className='red'>
                <h1>平平</h1>
                <p>{this.props.username}登出了</p>
            </div>
        )
    }
}

// 在应用组价之前,使用高阶函数对组件进行一次劫持,可以对组件进行更多的操作
export default GetUserName(Login)
