var ObjectID = require('mongodb').ObjectID;
module.exports = (app, db) => {
	app.post('/findOne/:id', (req, res) => {
		const id = req.params.id;
		const details = { '_id': new ObjectID(id) };
		
		db.collection(req.body.db).findOne(details, (err, item) => {
			if (err) {
				res.send({'error':'An error has occurred'});
			} else {
				res.send(item);
			}
		})
	});
}
