const express = require("express");

// db is the connection to the database
const db = require("../data/connection.js");

const router = express.Router();

router.get("/", (req, res) => {
  db.select("*")
    .from("cars")
    .then((car) => {
      res.status(200).json({ data: car });
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
});

router.get("/:id", (req, res) => {
  db("cars")
    // .where({ id: req.params.id })
    .where("id", "=", req.params.id)
    .then((car) => {
      res.status(200).json({ data: car });
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
});

router.post("/", (req, res) => {
  const carData = req.body; // validate the data before calling the database code

  db("cars")
    .insert(carData)
    .then((ids) => {
      res.status(200).json({ data: ids });
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
});

module.exports = router;
