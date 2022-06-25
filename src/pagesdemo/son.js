import React, { Component } from 'react'
import PropTypes from 'prop-types' // 使用props校验的第一步，引入 下载完成后在子组件中
export class Son extends Component {
    constructor(props) {
        super()// 继承Component 改变this执行
        this.state = {
            level: '高一的',
            msg: '这是一个高一的小白',
            parentMsg:props.msg// 收到父的属性
        }
    }
    // 改变子组件的输入和展示信息 调用父组件的改变方法，单向数据流，不能直接改变
    handleChange = (e)=>{
        let { value } = e.target
        this.setState({
            parentMsg:value
        })
       this.props.parentChange(value)// 将数据传递给父组件的方法去改变
    }
    render() {
        let {level,msg,parentMsg} = this.state
        let { level: pName, msg: pMsg } = this.props// 传入的数据 别名
        return (
            <div>
                子页面
                <h3>级别：{level}</h3>
                <h3>级别：{msg}</h3>
                <hr />
                <p className='red'>父页面的数据：{parentMsg}---{pName}---{pMsg}</p>
                <input type="text" value={parentMsg} onChange={this.handleChange} />
            </div>
        )
    }
}
// 使用props校验
Son.propTypes ={
    level:PropTypes.string.isRequired,// 必填
    msg: PropTypes.string// string类型
}
// 如果parent传的是number就会报错
// Warning: Failed prop type: Invalid prop `level` of type `number` supplied to `Son`, expected `string`.

// 默认值 
Son.defaultProps = {
    name: '肥羊',
    msg: '高三的'
}
export default Son
