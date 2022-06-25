import React, { Component } from 'react'
import { Card, Table } from 'antd'
import axios from 'axios'

export class Index extends Component {
    state = {
        data: []
    }

    async componentDidMount() {
        const { data } = await axios.get('http://localhost:3001/user')
        this.setState({data: data.user})
    }

    render() {
        const columns = [
            {
                title: 'id',
                dataIndex: 'id'
            },
            {
                title: '姓名',
                dataIndex: 'name'
            },
            {
                title: '年龄',
                dataIndex: 'age'
            },
            {
                title: '性别',
                dataIndex: 'isMale',
                // 生成复杂的数据渲染函数
                render(isMale) {
                    return isMale ? '男' : '女'
                }
            },
            {
                title: '地址',
                dataIndex: 'address'
            },
            {
                title: '联系方式',
                dataIndex: 'phone'
            }
        ]
    
        let {data} = this.state
        return (
            <div>
                <Card title='基础表格'>
                    <Table dataSource={data} columns={columns} pagination={false} scroll={{ y: 260 }} />
                </Card>
            </div>
        )
    }
}

export default Index
