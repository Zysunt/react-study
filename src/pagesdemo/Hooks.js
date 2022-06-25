import React ,{ useState} from 'react'
import UseEffect from './useEffect'
/* 
useState本身是一个函数,来自于react,有参数和返回值
调用useState返回的是一个数组
数组第一个元素是：当前的状态state
第二个元素：是一个函数，这个函数的作用就是去修改和设置我们的状态
*/
function Hooks() {
    let [state,setState] = useState(0)
    const [movies, setMovies] = useState([
        {id: 1, name: '你好，李焕英', price: 35},
        {id: 2, name: '哆啦A梦', price: 45},
        {id: 3, name: '守岛人', price: 50},
        {id: 4, name: '1921', price: 60},
        {id: 5, name: '中国医生', price: 55}
    ])
    function changePrice(index){
        const movieList = [...movies]
        movieList[index].price += 1
        setMovies(movieList)
    }
    return (
        <div>
            <h1>useEffect</h1>
            <UseEffect />
            <hr />
            <h1>hooks</h1>
            <p>{state}</p>
            <button onClick={()=>{setState(state+1)}}>点击+1</button>
            <button onClick={()=>{setState(state-1)}}>点击-1</button>
            <hr />
            <ul>
                {
                    movies.map((item,index) => {
                        return (
                            <li key={item.id}>
                                <span>电影名《{item.name}》</span>
                                <span>票价：{item.price}</span>
                                <button onClick={() => changePrice(index)}>涨价了 + 1</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Hooks
