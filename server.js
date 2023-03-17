const mysql = require("mysql");

const db = mysql.createConnection({
	host: "energymanagement.cjczkbwivke8.us-east-1.rds.amazonaws.com",
	port: "3306",
	user: "masterUsername",
	password: "606276Boy-",
	database: "energymanagement_db",
	timeout: 100000,
});

db.connect((err) => {
	if (err) {
		console.log("Error connecting to DB: ", err.message);
		return;
	}
	console.log("DATABASE CONNECTED");
});
