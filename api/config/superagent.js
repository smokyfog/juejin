const superagent = require('superagent')

request = (url, method, params, data, cookies, set_json) => {
	return new Promise((resolve, reject) => {
		superagent(method, url)
			.query(params)
			.send(data)
			.set({
				'Content-Type': "application/json",
    			'X-Agent': 'Juejin/Web',
			})
			.end((err, res) => {
				if (err) reject(err)
				resolve(res)
			})
	})
}


module.exports = { request }
