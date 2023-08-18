const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "127.0.0.1",
  password: "password",
  database: "userLooser",
});

app.post("/create", (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const position = req.body.position;
  const wage = req.body.wage;

  db.query(
    "INSERT INTO employees (empName,empAge,empCountry,empPosition,empWage) VALUES (?,?,?,?,?)",
    [name, age, country, position, wage],
    (err, result) => {
      if (err) {
        console.log(err);
      } else res.send("Values Inserted");
    }
  );
});
app.get("/hooman", (req, res) => {
  db.query("SELECT * from employees", (err, result) => {
    if (err) {
      console.log(err);
    } else res.send(result);
  });
});
app.delete("/gone", (req, res) =>
  db.query(
    `DELETE FROM employees WHERE empName='${req.body.name}'`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else res.send(result);
    }
  )
);

// app.use("/", (req, res) => res.send("Wassup"));
app.listen(6969, () => {
  console.log("Yo mr white");
});
