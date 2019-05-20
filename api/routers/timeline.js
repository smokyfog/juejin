var express = require("express");
var router = express.Router();
const JueJinUser = require('../mongodb/schema')
//使用router配置子路由  admin模块下的路由

router.get("/", (req, res) => {
    res.send("admin index")
})

router.get("/recommended", (req, res) => {
    console.log(req.query)
    JueJinUser.findOne({}, (err, doc) => {
        console.log(doc)
    })
    res.send("admin register")
})

module.exports = router;