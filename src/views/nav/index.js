import { React, useState,useEffect } from 'react'
import { Button, Menu } from 'antd'
import { DownCircleOutlined } from  '@ant-design/icons'
import menu from '../../config/menu'
import { withRouter } from 'react-router-dom'

// const { SubMenu } = Menu;// <4.20.0 可用，>=4.20.0 时不推荐
function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label//:<Link to={key}>{label}</Link>
    };
  }
  
function Nav(props) {
    const [collapsed, setCollapsed] = useState(false);
    const [menuItem,setMenuItem] = useState([])
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    useEffect(()=>{
        console.log(menu,'menu')
        let menus = getMenuItem(menu)// dom结构
        setMenuItem(menus)// 设置，渲染
    },[])// 只执行一次 [],这是有问题的
    // useEffect 是同步的
    // 状态是捕获的当前 props 和 state
    // 可以通过 useRef 获取改变后的 props 和 state
    // 依赖项 [] 不能欺骗
    // 复杂的状态变化应该使用 useReducer
    // 可以使用 useCallback 设置依赖
    // 可以使用 useMemo 让复杂对象做动态改变

    // 在class组件中，函数属性本身并不是数据流的一部分，this并不能确定不变
    // 使用 useCallback ，函数完全可以参与到数据流中
    // 解决对Effect撒谎的方法1.在getMenuItem函数外套一层useCallback（但是不要滥用useCallback）
    const getMenuItem1 = useCallback((menus)=>{
            return menus.map(item=>{
                if(item.children){
                    // let child = getMenuItem(item.children)// 递归处理子节点
                    return getItem(item.title,item.key,<DownCircleOutlined />,getMenuItem(item.children))
                } else{
                    return getItem(item.title,item.key)
                }
            })
        },[menu]) 
    // 解决对Effect撒谎的方法2.请求写在Effect里面，用一个布尔值来跟踪它（推荐这样的方法）
    // 递归写法（递归的本质：自己调用自己）
    // 在用递归的时候一定要给判断或者结束的条件，否则会导致栈溢出的错误
    const getMenuItem = (menus)=>{
        return menus.map(item=>{
            if(item.children){
                // let child = getMenuItem(item.children)// 递归处理子节点
                return getItem(item.title,item.key,<DownCircleOutlined />,getMenuItem(item.children))
            } else{
                return getItem(item.title,item.key)
            }
        })
    }
    const changeRoute = (e) => {
        // console.log('click ', e,props);
        // 除了<Link to={key}>{label}</Link>跳转还可以通过withRouter提供的history跳转
        props.history.push(e.key)
    }
    // <4.20.0 可用，>=4.20.0 时不推荐
    // const getMenuItem = (menus)=>{
    //     return menus.map(item=>{
    //         if(item.children){
    //             return <SubMenu icon={<DownCircleOutlined />} key={item.key} title={item.title}>
    //                 {
    //                     getMenuItem(item.children)// 递归
    //                     // item.children.map(i=>{
    //                     //     return <Menu.Item key={i.key} title={i.title}>{i.title}</Menu.Item>
    //                     // })
    //                 }
    //             </SubMenu>
    //         } else{
    //             return <Menu.Item key={item.key}>{item.title}</Menu.Item>
    //         }
    //     })
    // }
    
    return (
        <div className='nav-left'>
            <Button  type="primary"  onClick={toggleCollapsed}>
                {collapsed ? '展开' : '收起'}
            </Button>
            <Menu
                onClick={changeRoute} inlineCollapsed={collapsed}
                defaultSelectedKeys={[menu[0].key]}
                defaultOpenKeys={[menu[0].key]}
                mode="inline" theme='dark'
                items={menuItem}
                />
            {/* <4.20.0 可用，>=4.20.0 时不推荐 */}
            {/* <Menu theme='dark' mode="inline" inlineCollapsed={collapsed}>
                    {menuItem}
            </Menu> */}
        </div>
    )
}

export default withRouter(Nav)// withRouter让Nav组件传入props （history，location，match，staticContext）

