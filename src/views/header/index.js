import React, { Component } from 'react'
import { Row,Col } from 'antd'
import './index.scss'
import request from '../../axios/request'
import Utils from '../../utils/utils'

export class Header extends Component {
    state={
        username:'',
        time:'',
        weather:'',
        week:''
    }
    async componentDidMount(){
        this.setState({username:'肥羊'})
        setInterval(() => {
            let time = Utils.formateTime(new Date())
            this.setState({time})
        }, 1000)
        // 请求天气 axios
        let resp = await request({
            // 参数
            params: {
                app: 'weather.today',
                weaId: 94, // 城市天气id，1是北京 94杭州
                appkey: 10003,
                sign: 'b59bc3ef6191eb9f747dd4e83c99f2a4',
                format: 'json'
            }
        })
        let { citynm,temperature_curr,weather_curr,week,wind } = resp?.data?.result
        this.setState({
            weather:citynm+'-'+temperature_curr+'-'+ weather_curr+'-'+ wind
        })
        this.setState({week})
        // console.dir(request) https://www.nowapi.com/api/weather.today
        // console.log(resp?.data?.result)
    }
    render() {
        let { username,time,weather,week } = this.state
        return (
            <div className='header'>
                <Row className='header-top'>
                    <Col span="24">
                        <span>欢迎，{username}</span>
                        <a href="/#">退出</a>
                    </Col>
                </Row>
                <Row className='breadcrumb'>
                    <Col span='4' className='breadcrumb-title'>
                        首页
                    </Col>
                    <Col span='20' className='weather'>
                        <span className='date'>{week} {time}</span>
                        <span className='weather-detail'>{weather}</span>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Header
