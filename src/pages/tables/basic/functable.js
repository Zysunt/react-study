import React, { memo, useState, useEffect } from 'react'
import { Card, Table } from 'antd'
import axios from 'axios'

export default memo(function Index() {
    const [data, setData] = useState()

    useEffect(() => {
        // 请求接口
        const fetchData = async () => {
            const { data } = await axios.get('http://localhost:3001/user')
            console.log(data)
            const { user } = {...data}
            setData(user)
        }
        fetchData()
    }, []) // 传入一个空数组让它只渲染一次

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

    return (
        <div>
            <Card title='基础表格'>
                <Table dataSource={data} columns={columns} pagination={false} />
            </Card>
        </div>
    )
})
