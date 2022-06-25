import React, { Component } from 'react'
import Hooks from './Hooks'


// 登录组件
class Login extends Component {
    render() {
        return (
            <div>
                <h1 className='green'>Login登录页面</h1>
                <Hooks />
            </div>
        )
    }
}

// 管理员组件
class Admin extends Component {
    render() {
        return (
            <div>
                <h1 className='red'>Admin管理员页面</h1>
            </div>
        )
    }
}

// 高阶组件去实现登录鉴权
function AuthComponent(Component1,Component2){
    const NewComp = (props) => {
        const { isLogin } = props
        if(isLogin){
            return <Component1 {...props} />
        } else{
            return <Component2 {...props} />
        }
    }
    return NewComp
}

const AuthAdmin = AuthComponent(Login,Admin)

export class HOOC extends Component {
    state = {
        isLogin:true
    }
    handleLogin = (e) => {
        let { isLogin } = this.state
        this.setState({
            isLogin:!isLogin
        })
    }
    render() {
        let { isLogin } = this.state
        return (
            <div>
                {isLogin ? <Admin/> : <Login/>}
                <button onClick={this.handleLogin}>登录鉴权</button>
                <AuthAdmin isLogin={isLogin} />
            </div>
        )
    }
}

export default HOOC
