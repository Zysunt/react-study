import React, { Component,PureComponent } from 'react'
import Parent from './parent'
import {Parent1} from './parent1'
import MyContext from './context'
import Btn from './btn'
import ChangeArr from './changeArr'
import AppRef from './createRef'
import { Login  } from './login'
import Logout from './logout'
import Propsadd from './增强props'
import HOOC from './HOOC'
export class Index extends Component {
    state = {
        num:1
    }
    handleChangeNum = () => {
        // 之所以要用setState 是因为，react没有双向绑定的Proxy或者Object.defineProperty去做双向绑定
        // 在生命周期里是异步状态
        // 在合成事件如onClick中，异步 并不是异步代码 执行顺序导致异步
        this.setState({
            num : this.state.num+1
        })
    }
    componentDidMount(){
        // 在定时器是同步 执行顺序导致同步
        // 在原生事件也是同步
        setTimeout(() => {
            this.setState({
                num : this.state.num+1
            })
        }, 1000);
    }
    render() {
        return (
            <MyContext.Provider value={'肥羊'}>
                <div>
                    高阶组件 复用获取数据登录时
                    <Login />
                    <Logout />
                    <hr />
                    <HOOC />
                    <hr />
                    <Propsadd />
                    <hr />
                    <AppRef />
                    <hr />
                    <h1>测试生命周期：</h1>
                    <Btn />
                    <hr />
                    <p>非父子组件传值用props层层传递或者用Context</p>
                    <p>或者context</p>
                    <Parent></Parent> 
                    <hr />
                    <button onClick={this.handleChangeNum}>更新父</button>
                    <hr />
                    组件优化shouldComponentUpdate：{this.state.num}
                    <hr />
                    组件优化PureComponent1：{this.state.num}
                    <PureComponent1 {...this.state}></PureComponent1>
                    <hr />
                    <Parent1 {...this.state}></Parent1>
                    <hr />
                    <ChangeArr />
                </div>
            </MyContext.Provider>
        )
    }
}

export class PureComponent1 extends PureComponent {
    render() {
        console.log('PureComponent优化组件更新')
        return (
            <div>
                PureComponent优化组件更新
            </div>
        )
    }
}


export default Index
