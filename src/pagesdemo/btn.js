import React, { Component } from 'react'

export class Btn extends Component {
    constructor(props) {
        // 我们需要执行第一个阶段，就是初始化阶段
        super(props)
        this.state = {
            cout: 0
        }
        console.group('%c 1-初始化阶段constructor', 'color: green', props, this.state)
    }
    handleClick(e) {
        console.log(e.target)
        // setState会触发render
        this.setState({ cout: 10+this.state.cout })
    }
    UNSAFE_componentWillReceiveProps(){
        console.group('%c componentWillReceiveProps','color:#0c9ab4')
    }
    UNSAFE_componentWillMount(){
        // 严格模式下已经被抛弃了 18版本
        // 在组件挂载,redner之前调用,这里可以发起请求
        // 可以在这个方法里面调用setState改变状态,不会导致额外调用一次render
        console.group('%c 2-组件加载前WillMount','color:#be0e24')
    }
    componentDidMount(){
        console.group('%c 4-组件加载后tDidMount','color:#0681d0')
    }
    componentDidUpdate(){
        console.group('%c 7-组件更新后DidUpdate','color:#ec7259')
    }
    shouldComponentUpdate(){
        console.group('%c 5-是否更新组件页面shouldComponentUpdate,不能跟PureComponent一起存在','color:#2c801f')
        return false
        // return true
    }
    UNSAFE_componentWillUpdate(){
        console.group('%c 6-组件将要更新WillUpdate','color:#970ebe')// 后就走render-组件加载或者数据更新
    }
    componentWillUnmount() {
        // 这里完成组件的卸载和数据的销毁，清除组件所有的setTimeout以及移除所有的事件监听
        console.group('%c 8-组件销毁WillUnmount')
    }
    render() {
        // 只要状态发生变化，一定会执行render方法
        // render函数会插入jsx生成的dom结构,react会生成一个虚拟的dom树,在每一次组件更新时
        // 通过其diff算法比较更新前后的新旧DOM树
        // 比较以后，会找到最小的有差异的DOM节点,并重新渲染。
        console.group('%c 3-组件加载或者数据更新render', 'color: blue')
        let {cout} = this.state
        return (
            <div>
                 <button onClick={this.handleClick.bind(this)}>
                    你操作DOM变化{cout}次
                </button>
            </div>
        )
    }
}

export default Btn
