const Koa = require('koa')
const Router = require('koa-router')
let mock = require('mockjs')
const app = new Koa()
const router = new Router()

// 允许跨域
app.use(async (ctx, next) => {
    const allowOrigin = {
        "http://localhost:3000": true
    }

    const { origin } = ctx.request.headers
    if (allowOrigin) {
        ctx.set("Access-Control-Allow-Origin", "*")
    }
    ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, DELETE")
    ctx.set(
        "Access-Control-Allow-Headers",
        "x-requested-with, accept, origin, content-type"
    )
    ctx.set("Content-Type", "application/json;charset=utf-8")
    ctx.set("Access-Control-Allow-Credentials", true)
    ctx.set("Access-Control-Max-Age", 300)
    await next()
})

router.get('/user', ctx => {
    const data = mock.mock({
        // 属性user的值是一个数组,其中含有1到25个元素
        'user|1-25': [
            {
                // 属性 id 是一个自增数,起始值为1,每次增1
                'id|+1': 1,
                'key|+1': 1,
                /* 
                Mock.Random是一个工具类,用于生成各种随机数据
                Mock.Random的方法在数据模板中称为[占位符],书写格式为@占位符(参数[,参数])
                */
                'name': '@cname', 
                'age|11-29': 1, // 随机年龄
                'isMale': '@boolean', // 随机性别
                'address': '@county(true)',
                'phone': /^1[34578]\d{9}$/ // 随机电话号码
            }
        ]
    })
    ctx.body = data
})

app.use(router.routes())
app.listen(3001, () => {
    console.log('app start at port 3001')
})
