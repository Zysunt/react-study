import React, { PureComponent } from 'react'
import HomeRedux from './home'
import User from './user'

export class Index extends PureComponent {
    state = {
        name: '肥羊',
        age: 20,
        sex: '女',
        money: 30
      }
    render() {
        return (
            <div>
                react-redux中间件请求数据
                <HomeRedux />
                <hr />
                <User info={this.state} />
            </div>
        )
    }
}

export default Index
