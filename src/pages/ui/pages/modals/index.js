import React, { Component } from 'react'
import { Card, Button, Modal } from 'antd'

export class Index extends Component {
    state = {
        showModal: false,
        showModal2: false,
    }

    handleOpen(type) {
        this.setState({[type]: true})
    }

    render() {
        return (
            <div>
                <Card title="基础对话框">
                    <Button type="primary" onClick={() => this.handleOpen('showModal')}>Open</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal2')}>自定义</Button>
                </Card>

                <Modal
                    title="React"
                    visible={this.state.showModal}
                    onOk={() => {
                        this.setState({showModal: false})
                    }}
                    onCancel={() => {
                        this.setState({showModal: false})
                    }}
                >
                    <p>快来搞学习，学习使我快来</p>
                </Modal>

                <Modal
                    title="React"
                    visible={this.state.showModal2}
                    okText="好的"
                    cancelText="关闭"
                    onOk={() => {
                        this.setState({showModal2: false})
                    }}
                    onCancel={() => {
                        this.setState({showModal2: false})
                    }}
                >
                    <p>快来搞学习，学习使我快来</p>
                </Modal>

                <Card title="信息确认框">
                    <Button type="primary" onClick={() => this.handleConfirm('confirm')}>confirm</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('warning')}>warning</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('success')}>success</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('info')}>info</Button>
                </Card>
            </div>
        )
    }

    handleConfirm(type) {
        Modal[type]({
            title: '确认？',
            content: '好好学习天天向上',
            onOk() {
                console.log('ok')
            },
            onCancel() {
                console.log('Cancel')
            }
        })
    }

}

export default Index
