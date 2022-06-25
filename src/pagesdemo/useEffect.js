import React , {useEffect,useState} from 'react'

function UseEffect() {
    const [state,setState] = useState(0)
    /* 
        默认情况下,useEffect会在第一次渲染之后和每次更新之前都会执行
        useEffect每一次渲染(不管是第一次或者是更新)完都会去执行
    */
   useEffect(()=> {
    document.title = `你点击了${state}次`
   })
    return (
        <div>
            <p>{state}</p>
            <SetInterval/>
            <button onClick={()=>setState(state + 1)}>点击</button>
        </div>
    )
}
// 定时器清除
 function SetInterval() {
    const [state, setstate] = useState(0)
    const timer = useEffect(() => {
        setInterval(() => {
            setstate((prev) => prev + 1)
        }, 500)
        // 清除定时器
        return () => clearInterval(timer)
    }, [])

    return (
        <div>
            <h1>{state}</h1>
        </div>
    )
}

export default UseEffect
