var express = require("express");
var router = express.Router();

//使用router配置子路由  admin模块下的路由

router.get("/", (req, res) => {
    res.send("admin index")
})

router.get("/login", (req, res) => {
    res.send("admin login")
})

router.get("/register", (req, res) => {
    res.send("admin register")
})


module.exports = router;