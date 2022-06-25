import React, { Component } from 'react'

export class ChangeArr extends Component {
    state = {
        stu:[{name:'肥羊',id:1}]
    }
    shouldComponentUpdate(nextProps,nextState){
        if(nextState.stu !== this.state.stu){
            return true
        }
        return false
    }
    addData = ()=>{
        let newStu = [...this.state.stu]// 重新拿个数组来操作
        let id = Math.random()
        newStu.push({name:'肥羊'+id,id})
        this.setState({
            stu:newStu
        })
    }
    render() {
        let {stu} = this.state
        return (
            <div>
                <ul>
                    {
                        stu.map(item => {
                            return (
                                <li key={item.id}>
                                    <span className='red'>名字:{item.name}</span>
                                    <span>id:{item.id}</span>
                                </li>
                            )
                        })
                    }
                </ul>
                <button onClick={this.addData}>添加</button>
            </div>
        )
    }
}

export default ChangeArr
