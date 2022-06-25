import React, { memo } from 'react'
import { Card, Table } from 'antd'

export default memo(function Index() {
    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            width: 120
        },
        {
            title: '年龄',
            dataIndex: 'age'
        },
        {
            title: '地址',
            dataIndex: 'address'
        }
    ]

    const data = []

    // 模拟数据
    for(let i = 0; i < 101; i++) {
        data.push({
            key: i,
            name: `casey${i}`,
            age: 18,
            address: `幸福里街道${i}`
        })
    }

    return (
        <div>
            <Card title='高度固定的表格'>
                <Table 
                    dataSource={data} 
                    columns={columns}
                    pagination={{pageSize: 20}}
                    scroll={{ y: 260 }} />
            </Card>
        </div>
    )
})

