import React from 'react'
import { Card, Button, message } from 'antd'

export default function Index() {
    // function showMessage(type) {
    //     message[type]('hello message')
    // }

    const showMessage = (type) => {
        message[type]('hello message')
    }

    return (
        <div>
            <Card title="全局提示框">
                <Button type="info" onClick={() => showMessage('info')}>info</Button>
                <Button type="success" onClick={() => showMessage('success')}>success</Button>
                <Button type="warning" onClick={() => showMessage('warning')}>warning</Button>
                <Button type="error" onClick={() => showMessage('error')}>error</Button>
                <Button type="loading" onClick={() => showMessage('loading')}>loading</Button>
            </Card>
        </div>
    )
}
