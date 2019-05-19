const app = require("express")();
//引入自定义的模块
const admin = require("./routers/admin");
const product = require("./routers/product");
const { request } = require("./config/superagent")
const JueJinUser = require('./mongodb/schema')



//配置路由
// app.get("/admin", (req, res) => {
//     res.send("admin")
// })

let param =  {
    operationName:"",
    query:"",
    variables:{
        first:20,
        after:"",
        order:"POPULAR"
    },
    extensions:{
        query:{
            id:"21207e9ddb1de777adeaca7a2fb38030"
        }
    }
}


JueJinUser.findOne({}, (err, doc) => {
    console.log(doc)
})


async function aaa(){
    let data = await request("https://web-api.juejin.im/query", 'POST','' , JSON.stringify(param))
    // console.log(JSON.parse(data.text))
    var data1 = JSON.parse(data.text);
    data1.data.articleFeed.items.edges.map((item) => {
        // console.log(item)
    })
}
aaa()

//用用中间件配置路由    
app.use("/admin", admin)//当在服务器的根路径下访问localhost:8000/admin

app.use("/product", product)//当在服务器的根路径下访问localhost:8000/product

app.listen(8000, () => {
    console.log("listen 8000...")
})

