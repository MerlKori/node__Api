const findAllNotes = require('./findAllNotes');
module.exports = (app, db) => {
	app.post('/create', (req, res) => {
		db.collection(req.body.db).insertOne(req.body.data, (err, result) => {
			if(err){ 
				return console.log(err);
			}
			findAllNotes.getAll(req.body.db, db)
				.then( (data) => {
					res.send(data);
				})
		})
	});
}