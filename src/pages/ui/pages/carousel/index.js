import React, { Component } from 'react'
import { Card, Carousel } from 'antd'
import './index.scss'

export class Index extends Component {
    state = {
        carouselList: [
            {src:'/assets/carousel-img/carousel-1.jpg',key:1},
            {src:'/assets/carousel-img/carousel-2.jpg',key:2},
            {src:'/assets/carousel-img/carousel-3.jpg',key:3},
            {src:'/assets/carousel-img/carousel-4.jpg',key:4},
            {src:'/assets/carousel-img/carousel-5.jpg',key:5}
         ]
    }
    render() {
        let { carouselList } = this.state
        return (
            <div className="carousel">
                <Card title="文字轮播" className="card-wrap">
                    <Carousel autoplay effect="fade">
                        <div>
                            <h3>周一出去玩</h3>
                        </div>
                        <div>
                            <h3>周二看电影</h3>
                        </div>
                        <div>
                            <h3>周三打游戏</h3>
                        </div>
                        <div>
                            <h3>周四撸代码</h3>
                        </div>
                        <div>
                            <h3>周五陪对象</h3>
                        </div>
                    </Carousel>
                </Card>

                <Card title="图片轮播" className="card-wrap">
                    <Carousel autoplay >
                        {
                            carouselList.map(item=>{
                                return <div key={item.key}>
                                    <img src={item.src}  alt='' className='img'/>
                                </div>
                            })
                        }
                    </Carousel>
                </Card>
            </div>
        )
    }
}

export default Index
