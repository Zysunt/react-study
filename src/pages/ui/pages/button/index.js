import React, { memo, useState } from 'react'
import { Card, Button, Radio } from 'antd'
import './index.scss'
import {
    PlusOutlined,
    DeleteOutlined,
    EditOutlined,
    SearchOutlined,
    LeftOutlined,
    RightOutlined
 } from '@ant-design/icons'

// memo是一个高阶组件,memo类似于PureComponent,不同的是memo是一个函数组件而非一个类
export default memo(function Index() {
    const [Loading, setLoading] = useState(true)
    const [size, setSize] = useState('default')
    return (
        <div className="wrap">
            <Card title="基础按钮" className="button-wrap">
                <Button type="primary">肥羊</Button>
                <Button type="danger">肥羊</Button>
                <Button type="dashed">肥羊</Button>
                <Button>肥羊</Button>
            </Card>

            <Card title="图形按钮" className="button-wrap">
                <Button icon={<PlusOutlined/>}>添加</Button>
                <Button icon={<DeleteOutlined/>}>删除</Button>
                <Button icon={<EditOutlined/>}>修改</Button>
                <Button icon={<SearchOutlined/>}>查找</Button>
                <Button icon={<EditOutlined/>} shape="circle"></Button>
                <Button icon={<SearchOutlined/>} shape="round"></Button>
            </Card>

            <Card title="Loading按钮" className="button-wrap">
                <Button type='primary' loading={Loading}>加载</Button>
                <Button loading={Loading}>加载</Button>
                <Button type='primary' loading={Loading} shape='round'>加载</Button>
                <Button loading={Loading} shape='round'>加载</Button>
                <Button type='primary' onClick={() => close()}>关闭加载</Button>
                <Button type='primary' onClick={() => open()}>打开加载</Button>
            </Card>

            <Card title='按钮组'>
                <Button.Group>
                    <Button icon={<LeftOutlined/>}>向左</Button>
                    <Button icon={<RightOutlined/>}>向右</Button>
                </Button.Group>
            </Card>

            <Card title='按钮尺寸'>
                <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
                    <Radio.Button value="large">大</Radio.Button>
                    <Radio.Button value="default">中</Radio.Button>
                    <Radio.Button value="small">小</Radio.Button>
                </Radio.Group>
                <Button type='primary' size={size}>肥羊</Button>
                <Button type='danger' size={size}>肥羊</Button>
                <Button type='dashed' size={size}>肥羊</Button>
                <Button size={size}>肥羊</Button>
            </Card>



        </div>
    )
    function close() {
        setLoading(false)
    }
    function open() {
        setLoading(true)
    }
})

/* 
PureComponent实现了shouldComponentUpdate()
PureComponent效益会比较高,如果组件的props和state相同的时候,render的内容也一致,那么就可以使用PureComponent
可以提高组件的性能，memo跟他是一样的功能
*/