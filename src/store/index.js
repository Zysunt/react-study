

import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'

// applyMiddleware是redux是原生方法，能把所有中间件组成一个数组,依次执行,返回一个store对象
const storeEnhancer = applyMiddleware(thunk)

// storeEnhancer增强型store,其实就是一个高阶函数
const store = createStore(reducer, storeEnhancer)

export default store
