const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
	user: 'root',
	host: '127.0.0.1',
	password: 'bhanu don',
	database: 'userLooser'
});

app.post('/create', (req, res) => {
	console.log(req.body);
	const name = req.body.name;
	const age = req.body.age;
	const country = req.body.country;
	const position = req.body.position;
	const wage = req.body.wage;
	db.query(
		'INSERT INTO Hooman (name,age,country,position,wage) VALUES (?,?,?,?,?)',
		[name, age, country, position, wage],
		(err, result) => {
			if (err) {
				console.log(err);
			} else res.send('Values Inserted');
		}
	);
});

app.use('/', (req, res) => res.send('Wassup'));
app.listen(6969, () => {
	console.log('Yo mr white');
});
