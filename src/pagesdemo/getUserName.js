import React , { Component } from 'react'
// 高阶函数 => 参数是函数，返回新函数 比如map reduce等
// 高阶组件 => 函数 参数是组件，返回新组件
function GetUserName(OldComponent) {
    class NewComponent extends Component{
        state ={
            userName:''
        }
        // 获取name，使用axios，在生命周期函数里面获取
        componentDidMount(){
            const userName = '肥羊'// 接口获取，还有token什么什么的
            this.setState({userName})
        }
        render(){
            return <OldComponent userName={this.state.userName} />
        }
    }
    return NewComponent
}

export class Person extends Component {
    render() {
        return (
            <div>
                Person
                {this.props.userName}
            </div>
        )
    }
}

// 增强props
export class Boy extends Component {
    render() {
        return (
            <div>
                Boy{this.props.userName}
            </div>
        )
    }
}
// 高阶组件
const PropsComponent = (OldComponent) => {
    // 传入组件，返回新组件
    const NewComponent = (props) => {
        return <OldComponent {...props} work='开发人员' />
    }
    return NewComponent
}
const PropsPerson = PropsComponent(Person)
const PropsBoy = PropsComponent(Boy)



export class App extends Component {
    render() {
        return (
            <div>
                <PropsPerson userName='肥羊' />
                <PropsBoy userName='平平' />
            </div>
        )
    }
}


export default GetUserName
