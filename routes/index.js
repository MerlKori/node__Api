const createNotes = require('./modules/createNotes');
const removeNotes = require('./modules/removeNotes');
const findOneNote = require('./modules/findOneNote');
const findAllNotes = require('./modules/findAllNotes');
const updateNotes = require('./modules/updateNotes');

module.exports = (app, db) => {
	createNotes(app, db);
	removeNotes(app, db);
	findOneNote(app, db);
	updateNotes(app, db);
	findAllNotes.handlerREquest(app, db);
}