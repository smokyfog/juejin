const app = require("express")();
//引入自定义的模块
const admin = require("./routers/admin");
const product = require("./routers/product");
const timeline = require("./routers/timeline");
const { request } = require("./config/superagent")
const JueJinUser = require('./mongodb/schema')
const model = require("./mongodb/model")



//配置路由
// app.get("/admin", (req, res) => {
//     res.send("admin")
// })




async function recommended_list(data){
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
    let insertData = {
        id:data.id,
        commentsCount:data.commentsCount,
        hot:data.hot,
        content: data.content,	//内容
        createdAt: data.createdAt,	//创建时间
        eventInfo: data.eventInfo,	
        hotIndex: data.hotIndex,	//
        lastCommentTime: data.lastCommentTime,	//最后一次评论时间
        likeCount: data.likeCount,	//点赞数
        original: data.original,	
        originalUrl: data.originalUrl,
        rankIndex: data.rankIndex,
        screenshot: data.screenshot,
        summaryInfo: data.summaryInfo,
        tags: data.tags,
        title: data.title,	//标题
        type: data.type,	//类型
        updatedAt: data.updatedAt,
        user: data.user,	//用户
        viewerHasLiked: data.viewerHasLiked
    }
    await model.recommended.insert(insertData)
}



async function aaa(){
    let data = await request("https://web-api.juejin.im/query", 'POST','' , JSON.stringify(param))
    // console.log(JSON.parse(data.text))
    var data1 = JSON.parse(data.text);
    data1.data.articleFeed.items.edges.map((item) => {
        // console.log(item)
        recommended_list(item.node)
    })
}
// aaa()

//用用中间件配置路由    
app.use("/admin", admin)//当在服务器的根路径下访问localhost:8000/admin

app.use("/product", product)//当在服务器的根路径下访问localhost:8000/product

app.use("/timeline", timeline)

app.listen(8000, () => {
    console.log("listen 8000...")
})

