var express = require('express');
var app = express();

const mysql = require("mysql");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'OlympusStylusEpicZoom1!',
    database: 'users'
})

db.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to database");
});


var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/login.html');
})

app.get('/user_verification', function (req, res) {
    //console.log(req.query)
    let sql = "SELECT password,isAdmin FROM users_table WHERE username =  " + "'" + req.query.username + "'" + " or email = " + "'" + req.query.username + "'";
    let password = req.query.password
    db.query(sql, function (err, data, fields) {
        if (err) throw err;
        //console.log(sql)
        //console.log(data[0])
        //console.log(data[0].isAdmin)
        //console.log(data[0].password)
        //console.log(password)
        //console.log(data)
        if (data[0].length == 0) console.log("No data returned");
        else if (data[0].password != password) console.log("Incorrect Login");
        else if (data[0].password == password) {
            if (data[0].isAdmin == 1) res.sendFile(__dirname + '/data_admin.html');
            if (data[0].isAdmin != 1) res.sendFile(__dirname + '/data.html');
        }
    })
})

app.get('/users', (req, res, next) => {
    let sql = "SELECT * FROM users_table";
    db.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.send(data)
    })
})

app.post('/users', (req, res, next) => {
    console.log(req)
    let sql = "INSERT INTO users_table(username, email, password, isAdmin) VALUES ('" + req.body.username + "', '" + req.body.email + "', '" + req.body.password + "', " + req.body.isAdmin + ")";
    console.log(sql);
    db.query(sql, function (err, data, fields) {
        //console.log(req)
        if (err) throw err;
        res.send("Deleted successfully")

    })
})

app.delete('/users/:id', (req, res, next) => {
    //console.log(req)
    let sql = "DELETE FROM users_table WHERE id = " + req.params.id;
    console.log(sql);
    db.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.send("Deleted successfully")
    })
})

app.put("/users/:id", (req, res, next) => {
    let adminUpdate = 0;
    if (req.body.isAdmin == 1) {
        adminUpdate = 1;
    }
    let sql = "UPDATE users_table SET username = '" + req.body.username + "', email = '" + req.body.email + "', password = '" + req.body.password + "', isAdmin = " + adminUpdate + " WHERE id = " + req.params.id;
    console.log(sql)
    //console.log(req)
    db.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.send("Updated successfully")
    })
});
