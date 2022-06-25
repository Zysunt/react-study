import React, { Component } from 'react'

export class Person extends Component {
    render() {
        let { name , age ,hobby } = this.props
        return (
            <div>
                Person
                <h1>名字：{name}</h1>
                <h1>年纪：{age}</h1>
                <h1>爱好：{hobby}</h1>
            </div>
        )
    }
}


export class Boy extends Component {
    render() {
        let { name , age ,hobby } = this.props
        return (
            <div className='green'>
                Boy
                <h1>名字：{name}</h1>
                <h1>年纪：{age}</h1>
                <h1>爱好：{hobby}</h1>
            </div>
        )
    }
}


export class Bigprops extends Component {
    render() {
        return (
            <div>
                <Person name='肥羊' age='20' hobby='看电视拍照片' />
                <Boy name='平平' age='19' hobby='看电影玩游戏'/>
                {/* 通过高阶组件去增强props */}
                <PropsPerson name='肥羊'/>
                <PropsBoy name='平平'/>
            </div>
        )
    }
}


// 需求：给每个组件多传一些props 假设爱好和年纪都一样
// 用高阶组件实现
const PropsComponent = (Component) => {
    // 返回一个函数式组件
    const newComponent = (props) => {
        return <Component {...props} age='30' hobby='生活' />
    }
    return newComponent
}

const PropsPerson = PropsComponent(Person)
const PropsBoy = PropsComponent(Boy)

export default Bigprops
