const express = require("express");
const User = require('./cars-model');
const db = require("../data/connection");

const router = express.Router();

router.get("/", (req, res) => {
  User.getAll()
    .then(cars => {
      res.json(cars);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get cars" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  User.getById(id)
    .then(car => {
      if (car) {
        res.json(car);
      } else {
        res.status(404).json({ message: "Could not find car with given id." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get car" });
    });
});

router.post("/", (req, res) => {
  const carData = req.body;

  car.create(carData)
    .then(car => {
      res.status(201).json(car);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new car" });
    });
});

module.exports = router;
