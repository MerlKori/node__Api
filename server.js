const express 		= require('express');
const bodyParser	= require('body-parser');
const routes		= require('./routes/index');
const port 			= process.env.PORT || 8000;
const MongoClient	= require('mongodb').MongoClient;
const db_url 		= "mongodb://localhost:27017/";
const db__name		= 'new__db';
const app			= express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect(db_url, (err, database) => {
	if (err) return console.log(err);
	const db = database.db(db__name);
	routes(app, db)
})

app.listen(port, () => {
	console.log('server run in port: ' + port);
});