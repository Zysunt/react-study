import React, { PureComponent } from 'react'
import Alipay from './alipay'
import Wxpay from './wxpay'
import axios from 'axios'
export class Index extends PureComponent {
    state={
        user:[]
    }
    async componentDidMount(){
        const {data} = await axios.get('http://localhost:3001/user');
        let user = [...data.user]
        this.setState({user})        
        console.log(this.state,data.user)
    }
    render() {
        let { user } = this.state
        return (
            <div>
                <Alipay />
                <hr />
                <Wxpay />
                <h3>用户信息</h3>
                {
                    user.map(item=>{
                        return <div key={item.key}>{item.name}</div>
                    })
                }
            </div>
        )
    }
}

export default Index
