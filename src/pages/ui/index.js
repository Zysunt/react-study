import React ,{memo} from 'react'
import { renderRoutes } from 'react-router-config';
import './index.scss'

function UI(props) {
    // console.log(props)// history ,location,match,route,staticContext
    let { route } = props
    let routes = route.routes.map(item=>{
        return { ...item ,key:item.path}
    })
    // console.log(routes)// component,path,routes
    return (
        <div className='ui-wrap'>
            {renderRoutes(routes)}
        </div>
    )
}
// memo 高阶组件，类似class组件的PureComponent shouldComponentUpdate 指定组件渲染
export default memo(UI)
