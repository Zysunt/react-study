import React, { Component,createRef } from 'react'

export class AppRef extends Component {
    constructor(){
        super()
        this.headerRef = createRef()// 下面的也一样 不过这种不要轻易去操作dom
    }
    inputRefs = createRef()
    userRefs = createRef()
    changeText = ()=>{
        console.log(this.headerRef,this.inputRefs.current.value)
        this.userRefs.current.innerHTML = this.inputRefs.current.value
    }
    render() {
        return (
            <div>
                <input type='text' placeholder='输入' ref={this.inputRefs} onChange={this.changeText} />
                createRef App
                <Header ref={this.headerRef} />
                <p className='red' ref={this.userRefs}></p>
            </div>
        )
    }
}
export class Header extends Component {
    state={
        username:'肥羊'
    }
    render() {
        return (
            <div>
                Header state 能拿到
            </div>
        )
    }
}

export default AppRef
