const express = require("express");
const bodyParser = require("body-parser");
//const cors = require("cors");
const mysql = require("mysql");
const app = express();

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', '*');
	if (req.method == 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE, GET');
		return res.status(200).json({});
	}
	next();
});


/*const corsOptions = {
	methods: 'GET,POST,OPTIONS',
	allowedHeaders: 'Content-Type,Accept,Origin',
	origin: 'http://dannygao.site',
	credentials: true
}*/
db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'OlympusStylusEpicZoom1!',
	database: 'collector'
})

db.connect(error => {
	if (error) throw error;
	console.log("Successfully connected to database");
});

//app.use(cors())

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
	res.json({ message: "Welcome to bezkoder application." });
});

// set port, listen for requests
app.listen(3002, () => {
	console.log("Server is running on port 3002.");
});

//get all entries from initialBrowserData
app.get("/browsers", (req, res, next) => {
	let sql = `SELECT * FROM initialBrowserData`;
	db.query(sql, function(err, data, fields) {
		if (err) throw err;
		res.json({status:200,
			data,
			message: "Retrieved successfully"
		})
	})
});

//get an entries from initialBrowserData
app.get("/browsers/:id", (req, res, next) => {
	let sql = `SELECT * FROM initialBrowserData WHERE id = ?`;
	db.query(sql, [req.params.id], function(err, data, fields) {
		if (err) throw err;
		res.json({status:200,
			data,
			message: "Retrieved successfully"
		})
	})
});

//delete entry
app.delete("/browsers/:id", (req, res, next) => {
	let sql = `DELETE FROM initialBrowserData WHERE id = ?`;
	db.query(sql, [req.params.id], function(err, data, fields) {                                                                                                                                                                                         if (err) throw err;
		res.json({status:200,
			message: "Deleted successfully"
		})
	})
});

//post new entry
app.post("/browsers", (req, res, next) => {
	let sql = `INSERT INTO initialBrowserData (cookieEnabled, innerHeight, innerWidth, language, outerHeight, outerWidth) \
	VALUES (?, ?, ?, ?, ?, ?)`;
	db.query(sql,[req.body.cookieEnabled, req.body.innerHeight, req.body.innerWidth, req.body.language, req.body.outerHeight, req.body.outerWidth], function(err, data, fields) {
		if (err) throw err;
		res.json({status:200,
			message: "Posted successfully"
		})
	})
});

app.put("/browsers/:id", (req, res, next) => {
	let sql = `UPDATE initialBrowserData SET cookieEnabled = ?, innerHeight = ?, innerWidth = ?, language = ?, outerHeight = ?, outerWidth = ? \
	WHERE id = ?`;
	db.query(sql,[req.body.cookieEnabled, req.body.innerHeight, req.body.innerWidth, req.body.language, req.body.outerHeight, req.body.outerWidth, req.params.id], function(err, data, fields) {
		if (err) throw err;
		res.json({status:200,
			message: "Updated successfully"
		})
	})
});
