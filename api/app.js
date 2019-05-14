const app = require("express")();
//引入自定义的模块
const admin = require("./routers/admin");
const product = require("./routers/product");

//配置路由
// app.get("/admin", (req, res) => {
//     res.send("admin")
// })


//用用中间件配置路由    
app.use("/admin", admin)//当在服务器的根路径下访问localhost:8000/admin

app.use("/product", product)//当在服务器的根路径下访问localhost:8000/product

app.listen(8000, () => {
    console.log("listen 8000...")
})