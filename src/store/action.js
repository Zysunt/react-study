import { INCREMENT, DECREMENT, ADD_NUMBER, SUB_NUMBER, GET_USERINFO } from './canstance'
import axios from 'axios'

export const incAction = num =>({ type: INCREMENT, num })
export const decAction = num =>({ type: DECREMENT, num })
export const addAction = num =>({ type: ADD_NUMBER, num })
export const subAction = num =>({ type: SUB_NUMBER, num })
export const getUserInfoAction = (userInfo) => ({
    type: GET_USERINFO,
    userInfo
})
// 通过指定中间件来进行处理
export const getHomeAction = async (dispatch) => {
    const { data } = await axios.get('http://localhost:3001/user');
    // console.log(data,'返回的数据')
    dispatch(getUserInfoAction(data.user))
}