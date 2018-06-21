const ObjectID = require('mongodb').ObjectID;
const findAllNotes = require('./findAllNotes');

module.exports = (app, db) => {
	app.post('/update/:id', (req, res) => {
		const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
		
		db.collection(req.body.db).update(details, req.body.data, (err, result) => {
			if (err) {
				res.send({'error':'An error has occurred'});
			  } else {
				findAllNotes.getAll(req.body.db, db)
					.then( (data) => {
						res.send(data);
					})
			}
		})
	});
}
