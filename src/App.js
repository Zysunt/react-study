// import Pages from './pages'
import Nav from './views/nav';
import Header from './views/header'
import Footer from './views/footer'
import { Row,Col } from 'antd'
import './style/common.scss'
// import Home from './pages/home';
import routes from './router/' // 引入全局配置的路由规则
import { renderRoutes } from 'react-router-config' // 引入渲染路由的方法

function App() {
  // console.log(routes,'渲染的路由')
  return (
    <div className="App">
      <Row className="container">
          <Col className='nav-left' span={5}>
              <Nav />
          </Col>
          <Col className='main' span={19}>
              <Header />
              <Row className='content'>
                  {/* <Home /> */}
                  {renderRoutes(routes)}
              </Row>
              <Footer />
          </Col>
      </Row>
      {/* <Pages /> */}
    </div>
  );
}

export default App;
