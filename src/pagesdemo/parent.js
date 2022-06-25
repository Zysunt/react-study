import React, { Component } from 'react'
import Son from './son'
import MyContext from './context'
import eventBus from './event'
export class Parent extends Component {
    // static contextType = MyContext
    state = {
        level: '高三',
        msg: '这是一个高三的大佬'
    }
    componentDidMount(){
        eventBus.addListener('sayHello',this.getData)// 监听
    }
    getData(a,b,c){
        console.log(a,b,c)
    }
    componentWillUnmount(){
        eventBus.removeAllListeners('sayHello',this.getData)// 移除监听
    }
    // 改变内容的方法
    parentChange(data) {
        this.setState({msg: data})
    }
    render() {
        let {level,msg} = this.state
        return (
            <div >
                父页面
                <h6 className='red'>级别：{level}</h6>
                <h6 className='red'>级别：{msg}</h6>
                <hr />
                

                <h6 className='red'>context传值：{this.context|| this.context.userName}</h6>
                {/* 父组件将所有属性传给子组件  通过parentChange方法修改父组件的信息传递给子组件*/}
                <Son {...this.state} parentChange={this.parentChange.bind(this)} />
                {/* 层层传递 <Son {...this.props}/> */}
            </div>
        )
    }
}
Parent.contextType = MyContext// 这种做法比较方便 等于上面 static contextType = MyContext
export default Parent
