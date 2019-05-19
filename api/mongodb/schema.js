const mongoose = require('./config')
const Schema = mongoose.Schema

let jueJinUser = new Schema({
	id:{type:String,unique:true,index: true,},	// ID
	commentsCount: Number,	//回复数量
	content: String,	//内容
	createdAt: Date,	//创建时间
	eventInfo: String,	
	hot: Boolean,	//是否热门
	hotIndex: Number,	//
	lastCommentTime: Date,	//最后一次评论时间
	likeCount: Number,	//点赞数
	original: Boolean,	
	originalUrl: String,
	rankIndex: Number,
	screenshot: String,
	summaryInfo: String,
	tags: {type:Array,default: []},
	title: String,	//标题
	type: String,	//类型
	updatedAt: String,
	user: {type:Array,default: []},	//用户
	viewerHasLiked: Boolean
})

module.exports = mongoose.model('JueJinUser', jueJinUser)
