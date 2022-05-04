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

db.connect();

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

app.get("/getUsersByID", (req, res) => {
  db.query(
    `SELECT * FROM User where userid=${req.query.userid}`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
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

app.post("/addMech", (req, res) => {
  console.log(req.body);
  db.query(
    `INSERT INTO mechanics (username, password, Location, shop_name, base_cost,phone_num,email) VALUES ('${req.body.Username}', '${req.body.Password}', '${req.body.Location}', '${req.body.Shop}', '${req.body.Cost}', '${req.body.Phone}', '${req.body.Email}')`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/feedback", (req, res) => {
  console.log(req.body);
  db.query(
    `INSERT INTO feedback (feedback_content, userid, mechid) VALUES ('${req.body.feedback_content}', '${req.body.userid}', '${req.body.mechid}')`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/addProblem", (req, res) => {
  console.log(req.body);
  db.query(
    `INSERT INTO request (request_content, userid, mechid) VALUES ('${req.body.request_content}', '${req.body.userid}', '${req.body.mechid}')`,
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
  db.query(
    `SELECT * FROM User where username='${req.query.username}' and password='${req.query.password}'`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/request", (req, res) => {
  console.log(req.query);
  db.query(
    `SELECT * FROM request where mechid='${req.query.mechid}'`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/feedback", (req, res) => {
  console.log(req.query);
  db.query(
    `SELECT * FROM feedback where mechid='${req.query.mechid}'`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/mech", (req, res) => {
  console.log(req.query);
  db.query(
    `SELECT * FROM Mechanics where username='${req.query.username}' and password='${req.query.password}'`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/searchMechanic", (req, res) => {
  console.log(req.query);
  db.query(
    `SELECT * FROM Mechanics where username Like '%${req.query.input}%' or location Like'%${req.query.input}%' or email Like'%${req.query.input}%' or shop_name Like'%${req.query.input}%'`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
