let form = document.getElementById('login')
const mysql = require("mysql");

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

form.addEventListener('submit', (event) => {
    let username = form.elements[0];
    let password = form.elements[1];
    let sql = `SELECT isAdmin FROM all_users WHERE username = ` + username + `or email = ` + username;
    db.query(sql, function (err, data, fields) {
        if (err) throw err;
        if (data.length == 0) console.log("Incorrect Login");
        console.log(data);
    })
})
