var express = require("express");
var router = express.Router();
const JueJinUser = require('../mongodb/schema')
//使用router配置子路由  admin模块下的路由

router.get("/", (req, res) => {
    res.send("admin index")
})

router.get("/recommended", (req, res) => {
    JueJinUser.find({}, (err, doc) => {
        res.json(doc)
    })
})

module.exports = router;