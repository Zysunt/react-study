import React, { memo, useState,useEffect } from 'react'
import { Card, Table, Button, Modal, message } from 'antd'
import axios from 'axios'

function Index() {
    const columns = [
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
            title: '操作',
            key: 'operaion',
            // text:row的值
            render: (text, record) => {
                return <Button size="small" onClick={() => removeItem(text, record.key)}>删除</Button>
            }
        }
    ]

    const removeItem = (text, key) => {
        console.log(text, key)
        Modal.confirm({
            title: '确认',
            content: '你确定要离开我吗？',
            onOk: () => {
                setState(state.filter(item => item.key !== key))
                message.success('删除成功')
            }
        })
    }
    const [state, setState] = useState([])
    async function fetchData() {
        const {data} = await axios.get('http://localhost:3001/user');
        setState(data.user)        
        // console.log(state,data.user)
      }
    useEffect(() => {
        fetchData();
      }, []);

    return (
        <div>
            <Card title='高度固定的表格'>
                <Button onClick={fetchData}>刷新数据</Button>
                <Table 
                    dataSource={state} 
                    columns={columns}
                    pagination={{pageSize: 20}}
                    scroll={{ y: 260 }} />
            </Card>
        </div>
    )
}
// memo 其他组件变化不影响这个组件，除非这个组件数据有变化才会重新渲染 类似于class组件的React.PureComponent
// memo默认情况下只会对复杂对象做浅层比较，如果需要控制对比过程，需要传入第二个参数
export default memo(Index)

