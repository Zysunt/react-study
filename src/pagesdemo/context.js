import React from 'react'

// 创建一个 Context 对象，组件会从组件树中离自身最近的那个匹配的 Provider 中读取到当前的 context 值。
const MyContext = React.createContext({userName:'肥羊'})// 设置默认值

export default MyContext