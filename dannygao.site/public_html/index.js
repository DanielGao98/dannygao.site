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


/*       BROWSERS       */

//get all entries from initialBrowserData
app.get("/browsers", (req, res, next) => {
	let sql = `SELECT * FROM initialBrowserData`;
	db.query(sql, function(err, data, fields) {
		if (err) throw err;
		res.json(
			data
			//message: "Retrieved successfully"
		)
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


/*       NAVIGATION       */


//get all entries from initialBrowserData
app.get("/navigation", (req, res, next) => {
	let sql = `SELECT * FROM navigationTiming`;
	db.query(sql, function(err, data, fields) {
		if (err) throw err;
		res.json(
			data
			//message: "Retrieved successfully"
		)
	})
});

//get an entries from initialBrowserData
app.get("/navigation/:id", (req, res, next) => {
	let sql = `SELECT * FROM navigationTiming WHERE id = ?`;
	db.query(sql, [req.params.id], function(err, data, fields) {
		if (err) throw err;
		res.json({status:200,
			data,
			message: "Retrieved successfully"
		})
	})
});

//delete entry
app.delete("/navigation/:id", (req, res, next) => {
	let sql = `DELETE FROM navigationTiming WHERE id = ?`;
	db.query(sql, [req.params.id], function(err, data, fields) {                                                                                                                                                                                         if (err) throw err;
		res.json({status:200,
			message: "Deleted successfully"
		})
	})
});

//post new entry
app.post("/navigation", (req, res, next) => {
	let sql = `INSERT INTO navigationTiming (data) \
	VALUES (?)`;
	db.query(sql,[req.body.data], function(err, data, fields) {
		if (err) throw err;
		res.json({status:200,
			message: "Posted successfully"
		})
	})
});

app.put("/navigation/:id", (req, res, next) => {
	let sql = `UPDATE navigationTiming SET data = ? \
	WHERE id = ?`;
	db.query(sql,[req.body.data, req.params.id], function(err, data, fields) {
		if (err) throw err;
		res.json({status:200,
			message: "Updated successfully"
		})
	})
});



/*       NETWORK       */



//get all entries from initialBrowserData
app.get("/network", (req, res, next) => {
	let sql = `SELECT * FROM networkInfo`;
	db.query(sql, function(err, data, fields) {
		if (err) throw err;
		res.json(
			data
			//message: "Retrieved successfully"
		)
	})
});

//get an entries from initialBrowserData
app.get("/network/:id", (req, res, next) => {
	let sql = `SELECT * FROM networkInfo WHERE id = ?`;
	db.query(sql, [req.params.id], function(err, data, fields) {
		if (err) throw err;
		res.json({status:200,
			data,
			message: "Retrieved successfully"
		})
	})
});

//delete entry
app.delete("/network/:id", (req, res, next) => {
	let sql = `DELETE FROM networkInfo WHERE id = ?`;
	db.query(sql, [req.params.id], function(err, data, fields) {                                                                                                                                                                                         if (err) throw err;
		res.json({status:200,
			message: "Deleted successfully"
		})
	})
});

//post new entry
app.post("/network", (req, res, next) => {
	let sql = `INSERT INTO networkInfo (data) \
	VALUES (?)`;
	db.query(sql,[req.body.data], function(err, data, fields) {
		if (err) throw err;
		res.json({status:200,
			message: "Posted successfully"
		})
	})
});

app.put("/network/:id", (req, res, next) => {
	let sql = `UPDATE networkInfo SET data = ? \
	WHERE id = ?`;
	db.query(sql,[req.body.data, req.params.id], function(err, data, fields) {
		if (err) throw err;
		res.json({status:200,
			message: "Updated successfully"
		})
	})
});


/*       STORAGE       */



//get all entries from initialBrowserData
app.get("/storage", (req, res, next) => {
	let sql = `SELECT * FROM storageEst`;
	db.query(sql, function(err, data, fields) {
		if (err) throw err;
		res.json(
			data
			//message: "Retrieved successfully"
		)
	})
});

//get an entries from initialBrowserData
app.get("/storage/:id", (req, res, next) => {
	let sql = `SELECT * FROM storageEst WHERE id = ?`;
	db.query(sql, [req.params.id], function(err, data, fields) {
		if (err) throw err;
		res.json({status:200,
			data,
			message: "Retrieved successfully"
		})
	})
});

//delete entry
app.delete("/storage/:id", (req, res, next) => {
	let sql = `DELETE FROM storageEst WHERE id = ?`;
	db.query(sql, [req.params.id], function(err, data, fields) {                                                                                                                                                                                         if (err) throw err;
		res.json({status:200,
			message: "Deleted successfully"
		})
	})
});

//post new entry
app.post("/storage", (req, res, next) => {
	let sql = `INSERT INTO storageEst (data) \
	VALUES (?)`;
	db.query(sql,[req.body.data], function(err, data, fields) {
		if (err) throw err;
		res.json({status:200,
			message: "Posted successfully"
		})
	})
});

app.put("/storage/:id", (req, res, next) => {
	let sql = `UPDATE storageEst SET data = ? \
	WHERE id = ?`;
	db.query(sql,[req.body.data, req.params.id], function(err, data, fields) {
		if (err) throw err;
		res.json({status:200,
			message: "Updated successfully"
		})
	})
});



/*       FP       */



//get all entries from initialBrowserData
app.get("/fp", (req, res, next) => {
	let sql = `SELECT * FROM fp`;
	db.query(sql, function(err, data, fields) {
		if (err) throw err;
		res.json(
			data
			//message: "Retrieved successfully"
		)
	})
});

//get an entries from initialBrowserData
app.get("/fp/:id", (req, res, next) => {
	let sql = `SELECT * FROM fp WHERE id = ?`;
	db.query(sql, [req.params.id], function(err, data, fields) {
		if (err) throw err;
		res.json({status:200,
			data,
			message: "Retrieved successfully"
		})
	})
});

//delete entry
app.delete("/fp/:id", (req, res, next) => {
	let sql = `DELETE FROM fp WHERE id = ?`;
	db.query(sql, [req.params.id], function(err, data, fields) {                                                                                                                                                                                         if (err) throw err;
		res.json({status:200,
			message: "Deleted successfully"
		})
	})
});

//post new entry
app.post("/fp", (req, res, next) => {
	let sql = `INSERT INTO fp (data, vitalsScore) \
	VALUES (?, ?)`;
	db.query(sql,[req.body.data, req.body.vitalsScore], function(err, data, fields) {
		if (err) throw err;
		res.json({status:200,
			message: "Posted successfully"
		})
	})
});

app.put("/fp/:id", (req, res, next) => {
	let sql = `UPDATE fp SET data = ?, vitalsScore = ? \
	WHERE id = ?`;
	db.query(sql,[req.body.data, req.body.vitalsScore, req.params.id], function(err, data, fields) {
		if (err) throw err;
		res.json({status:200,
			message: "Updated successfully"
		})
	})
});


/*       FCP       */



//get all entries from initialBrowserData
app.get("/fcp", (req, res, next) => {
	let sql = `SELECT * FROM fcp`;
	db.query(sql, function(err, data, fields) {
		if (err) throw err;
		res.json(
			data
			//message: "Retrieved successfully"
		)
	})
});

//get an entries from initialBrowserData
app.get("/fcp/:id", (req, res, next) => {
	let sql = `SELECT * FROM fcp WHERE id = ?`;
	db.query(sql, [req.params.id], function(err, data, fields) {
		if (err) throw err;
		res.json({status:200,
			data,
			message: "Retrieved successfully"
		})
	})
});

//delete entry
app.delete("/fcp/:id", (req, res, next) => {
	let sql = `DELETE FROM fcp WHERE id = ?`;
	db.query(sql, [req.params.id], function(err, data, fields) {                                                                                                                                                                                         if (err) throw err;
		res.json({status:200,
			message: "Deleted successfully"
		})
	})
});

//post new entry
app.post("/fcp", (req, res, next) => {
	let sql = `INSERT INTO fcp (data, vitalsScore) \
	VALUES (?, ?)`;
	db.query(sql,[req.body.data, req.body.vitalsScore], function(err, data, fields) {
		if (err) throw err;
		res.json({status:200,
			message: "Posted successfully"
		})
	})
});

app.put("/fcp/:id", (req, res, next) => {
	let sql = `UPDATE fcp SET data = ?, vitalsScore = ? \
	WHERE id = ?`;
	db.query(sql,[req.body.data, req.body.vitalsScore, req.params.id], function(err, data, fields) {
		if (err) throw err;
		res.json({status:200,
			message: "Updated successfully"
		})
	})
});


/*       FID       */


//get all entries from initialBrowserData
app.get("/fid", (req, res, next) => {
	let sql = `SELECT * FROM fid`;
	db.query(sql, function(err, data, fields) {
		if (err) throw err;
		res.json(
			data
			//message: "Retrieved successfully"
		)
	})
});

//get an entries from initialBrowserData
app.get("/fid/:id", (req, res, next) => {
	let sql = `SELECT * FROM fid WHERE id = ?`;
	db.query(sql, [req.params.id], function(err, data, fields) {
		if (err) throw err;
		res.json({status:200,
			data,
			message: "Retrieved successfully"
		})
	})
});

//delete entry
app.delete("/fid/:id", (req, res, next) => {
	let sql = `DELETE FROM fid WHERE id = ?`;
	db.query(sql, [req.params.id], function(err, data, fields) {                                                                                                                                                                                         if (err) throw err;
		res.json({status:200,
			message: "Deleted successfully"
		})
	})
});

//post new entry
app.post("/fid", (req, res, next) => {
	let sql = `INSERT INTO fid (data, vitalsScore) \
	VALUES (?, ?)`;
	db.query(sql,[req.body.data, req.body.vitalsScore], function(err, data, fields) {
		if (err) throw err;
		res.json({status:200,
			message: "Posted successfully"
		})
	})
});

app.put("/fid/:id", (req, res, next) => {
	let sql = `UPDATE fid SET data = ?, vitalsScore = ? \
	WHERE id = ?`;
	db.query(sql,[req.body.data, req.body.vitalsScore, req.params.id], function(err, data, fields) {
		if (err) throw err;
		res.json({status:200,
			message: "Updated successfully"
		})
	})
});



/*       LCP       */


//get all entries from initialBrowserData
app.get("/lcp", (req, res, next) => {
	let sql = `SELECT * FROM lcp`;
	db.query(sql, function(err, data, fields) {
		if (err) throw err;
		res.json(
			data
			//message: "Retrieved successfully"
		)
	})
});

//get an entries from initialBrowserData
app.get("/lcp/:id", (req, res, next) => {
	let sql = `SELECT * FROM lcp WHERE id = ?`;
	db.query(sql, [req.params.id], function(err, data, fields) {
		if (err) throw err;
		res.json({status:200,
			data,
			message: "Retrieved successfully"
		})
	})
});

//delete entry
app.delete("/lcp/:id", (req, res, next) => {
	let sql = `DELETE FROM lcp WHERE id = ?`;
	db.query(sql, [req.params.id], function(err, data, fields) {                                                                                                                                                                                         if (err) throw err;
		res.json({status:200,
			message: "Deleted successfully"
		})
	})
});

//post new entry
app.post("/lcp", (req, res, next) => {
	let sql = `INSERT INTO lcp (data, vitalsScore) \
	VALUES (?, ?)`;
	db.query(sql,[req.body.data, req.body.vitalsScore], function(err, data, fields) {
		if (err) throw err;
		res.json({status:200,
			message: "Posted successfully"
		})
	})
});

app.put("/lcp/:id", (req, res, next) => {
	let sql = `UPDATE lcp SET data = ?, vitalsScore = ? \
	WHERE id = ?`;
	db.query(sql,[req.body.data, req.body.vitalsScore, req.params.id], function(err, data, fields) {
		if (err) throw err;
		res.json({status:200,
			message: "Updated successfully"
		})
	})
});


/*       LCPFINAL       */


//get all entries from initialBrowserData
app.get("/lcpf", (req, res, next) => {
	let sql = `SELECT * FROM lcpFinal`;
	db.query(sql, function(err, data, fields) {
		if (err) throw err;
		res.json(
			data
			//message: "Retrieved successfully"
		)
	})
});

//get an entries from initialBrowserData
app.get("/lcpf/:id", (req, res, next) => {
	let sql = `SELECT * FROM lcpFinal WHERE id = ?`;
	db.query(sql, [req.params.id], function(err, data, fields) {
		if (err) throw err;
		res.json({status:200,
			data,
			message: "Retrieved successfully"
		})
	})
});

//delete entry
app.delete("/lcpf/:id", (req, res, next) => {
	let sql = `DELETE FROM lcpFinal WHERE id = ?`;
	db.query(sql, [req.params.id], function(err, data, fields) {                                                                                                                                                                                         if (err) throw err;
		res.json({status:200,
			message: "Deleted successfully"
		})
	})
});

//post new entry
app.post("/lcpf", (req, res, next) => {
	let sql = `INSERT INTO lcpFinal (data, vitalsScore) \
	VALUES (?, ?)`;
	db.query(sql,[req.body.data, req.body.vitalsScore], function(err, data, fields) {
		if (err) throw err;
		res.json({status:200,
			message: "Posted successfully"
		})
	})
});

app.put("/lcpf/:id", (req, res, next) => {
	let sql = `UPDATE lcpFinal SET data = ?, vitalsScore = ? \
	WHERE id = ?`;
	db.query(sql,[req.body.data, req.body.vitalsScore, req.params.id], function(err, data, fields) {
		if (err) throw err;
		res.json({status:200,
			message: "Updated successfully"
		})
	})
});

/*       CLS       */


//get all entries from initialBrowserData
app.get("/cls", (req, res, next) => {
	let sql = `SELECT * FROM cls`;
	db.query(sql, function(err, data, fields) {
		if (err) throw err;
		res.json(
			data
			//message: "Retrieved successfully"
		)
	})
});

//get an entries from initialBrowserData
app.get("/cls/:id", (req, res, next) => {
	let sql = `SELECT * FROM cls WHERE id = ?`;
	db.query(sql, [req.params.id], function(err, data, fields) {
		if (err) throw err;
		res.json({status:200,
			data,
			message: "Retrieved successfully"
		})
	})
});

//delete entry
app.delete("/cls/:id", (req, res, next) => {
	let sql = `DELETE FROM cls WHERE id = ?`;
	db.query(sql, [req.params.id], function(err, data, fields) {                                                                                                                                                                                         if (err) throw err;
		res.json({status:200,
			message: "Deleted successfully"
		})
	})
});

//post new entry
app.post("/cls", (req, res, next) => {
	let sql = `INSERT INTO cls (data, vitalsScore) \
	VALUES (?, ?)`;
	db.query(sql,[req.body.data, req.body.vitalsScore], function(err, data, fields) {
		if (err) throw err;
		res.json({status:200,
			message: "Posted successfully"
		})
	})
});

app.put("/cls/:id", (req, res, next) => {
	let sql = `UPDATE cls SET data = ?, vitalsScore = ? \
	WHERE id = ?`;
	db.query(sql,[req.body.data, req.body.vitalsScore, req.params.id], function(err, data, fields) {
		if (err) throw err;
		res.json({status:200,
			message: "Updated successfully"
		})
	})
});


/*       CLSFINAL       */


//get all entries from initialBrowserData
app.get("/clsf", (req, res, next) => {
	let sql = `SELECT * FROM clsFinal`;
	db.query(sql, function(err, data, fields) {
		if (err) throw err;
		res.json(
			data
			//message: "Retrieved successfully"
		)
	})
});

//get an entries from initialBrowserData
app.get("/clsf/:id", (req, res, next) => {
	let sql = `SELECT * FROM clsFinal WHERE id = ?`;
	db.query(sql, [req.params.id], function(err, data, fields) {
		if (err) throw err;
		res.json({status:200,
			data,
			message: "Retrieved successfully"
		})
	})
});

//delete entry
app.delete("/clsf/:id", (req, res, next) => {
	let sql = `DELETE FROM clsFinal WHERE id = ?`;
	db.query(sql, [req.params.id], function(err, data, fields) {                                                                                                                                                                                         if (err) throw err;
		res.json({status:200,
			message: "Deleted successfully"
		})
	})
});

//post new entry
app.post("/clsf", (req, res, next) => {
	let sql = `INSERT INTO clsFinal (data, vitalsScore) \
	VALUES (?, ?)`;
	db.query(sql,[req.body.data, req.body.vitalsScore], function(err, data, fields) {
		if (err) throw err;
		res.json({status:200,
			message: "Posted successfully"
		})
	})
});

app.put("/clsf/:id", (req, res, next) => {
	let sql = `UPDATE clsFinal SET data = ?, vitalsScore = ? \
	WHERE id = ?`;
	db.query(sql,[req.body.data, req.body.vitalsScore, req.params.id], function(err, data, fields) {
		if (err) throw err;
		res.json({status:200,
			message: "Updated successfully"
		})
	})
});


/*       TBT       */


//get all entries from initialBrowserData
app.get("/tbt", (req, res, next) => {
	let sql = `SELECT * FROM tbt`;
	db.query(sql, function(err, data, fields) {
		if (err) throw err;
		res.json(
			data
			//message: "Retrieved successfully"
		)
	})
});

//get an entries from initialBrowserData
app.get("/tbt/:id", (req, res, next) => {
	let sql = `SELECT * FROM tbt WHERE id = ?`;
	db.query(sql, [req.params.id], function(err, data, fields) {
		if (err) throw err;
		res.json({status:200,
			data,
			message: "Retrieved successfully"
		})
	})
});

//delete entry
app.delete("/tbt/:id", (req, res, next) => {
	let sql = `DELETE FROM tbt WHERE id = ?`;
	db.query(sql, [req.params.id], function(err, data, fields) {                                                                                                                                                                                         if (err) throw err;
		res.json({status:200,
			message: "Deleted successfully"
		})
	})
});

//post new entry
app.post("/tbt", (req, res, next) => {
	let sql = `INSERT INTO tbt (data, vitalsScore) \
	VALUES (?, ?)`;
	db.query(sql,[req.body.data, req.body.vitalsScore], function(err, data, fields) {
		if (err) throw err;
		res.json({status:200,
			message: "Posted successfully"
		})
	})
});

app.put("/tbt/:id", (req, res, next) => {
	let sql = `UPDATE tbt SET data = ?, vitalsScore = ? \
	WHERE id = ?`;
	db.query(sql,[req.body.data, req.body.vitalsScore, req.params.id], function(err, data, fields) {
		if (err) throw err;
		res.json({status:200,
			message: "Updated successfully"
		})
	})
});


