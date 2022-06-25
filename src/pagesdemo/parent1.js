import React, { Component } from 'react'
import eventBus from './event'
export class Parent1 extends Component {
    send = ()=>{
        let name = '肥羊兄弟组件传值初始版本',arr = ['A','B',1,2],obj = {a:1,b:2,c:3}
        eventBus.emit('sayHello',name,arr,obj)
    }
    shouldComponentUpdate(nextProps,nextState){
        if(this.props.num !== nextProps.num){
            return true;// 更新
        }
        return false// 不更新
    }
    render() {
        console.log('num不更新时，子组件不更新。父组件更新时，子组件更新 shouldComponentUpdate优化')
        return (
            <div>
                兄弟组件传值测试
                <button onClick={this.send}>发送给parent组件</button>
                
            </div>
        )
    }
}



export default Parent1
