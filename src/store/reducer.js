import { INCREMENT, DECREMENT, ADD_NUMBER, SUB_NUMBER, GET_USERINFO } from './canstance'

const initState = {
    money: 0,
    userInfo: []
}

const reducer = (state=initState, action) => {
    switch(action.type) {
        case INCREMENT:
            return {...state, money: state.money + 1}
        case DECREMENT:
            return {...state, money: state.money - 1}
        case ADD_NUMBER:
            return {...state, money: state.money + action.num}
        case SUB_NUMBER:
            return {...state, money: state.money - action.num}
        case GET_USERINFO:
            return {...state, userInfo: action.userInfo}
        default: 
        return state
    }
}

export default reducer