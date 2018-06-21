function findAll(collection, db) {
	return new Promise((res, rej) => {
		db.collection(collection).find().toArray( (err, results) => {
			res(results)
		});
	})
}

module.exports =  {
	handlerREquest: (app, db) => {
		app.post('/findAll', (req, res) => {
			findAll(req.body.db, db)
				.then( (data) => {
					res.send(data);
				})
		});
	},
	getAll: (collection, db) => findAll(collection, db)
}