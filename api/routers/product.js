var express = require("express");
var router = express.Router();

//配置路由
router.get("/", (req, res) => {
    res.send("productlist");
})


router.get("/add", (req, res) => {
    res.send("productadd")
})

router.get("/edit", (req, res) => { 
    res.send("productedit")
})

router.get("/delete", (req, res) => {
    res.send("productdelete")
})


module.exports = router;