const JueJinUser = require('./schema')
const JueJinSearch = require('./searchSchema')
module.exports = {
	recommended: {
		insert: (conditions) => { // 添加新用户信息
			return new Promise((resolve, reject) => {
				JueJinUser.updateOne({"id": conditions.id}, conditions, {"upsert": true}, (err, doc) => {
					if (err) return reject(err)
					return resolve(doc)
				})
			})
		},
	}
}
