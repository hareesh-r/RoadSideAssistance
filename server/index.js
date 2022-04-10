const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "rsa",
});

app.get("/getMechanics", (req, res) => {
  db.query("SELECT * FROM Mechanics", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/getUsers", (req, res) => {
  db.query("SELECT * FROM User", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.delete("/deleteMechanic/:id", (req, res) => {
  console.log(req.params.id);
  db.query(
    `DELETE FROM Mechanics WHERE mechid = ${req.params.id}`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/deleteUser/:id", (req, res) => {
  console.log(req.params.id);
  db.query(
    `DELETE FROM user WHERE userid = ${req.params.id}`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/addUser", (req, res) => {
  console.log(req.body);
  db.query(
    `INSERT INTO user (username, password, Location, phone_num, email,vehicle_type,vehicle_model,problem) VALUES ('${req.body.Username}', '${req.body.Password}', '${req.body.Location}', '${req.body.Phone}', '${req.body.Email}', '${req.body.VechileType}', '${req.body.VechileModel}', '${req.body.Problem}')`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/user", (req, res) => {
    console.log(req.query);
    db.query(`SELECT * FROM User where username='${req.query.username}' and password='${req.query.password}'`, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.get("/mech", (req, res) => {
    console.log(req.query);
    db.query(`SELECT * FROM Mechanics where username='${req.query.username}' and password='${req.query.password}'`, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});

//npm install express mysql cors nodemon --save
