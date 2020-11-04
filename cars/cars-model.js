// user-model
const db = require("../data/connection");

module.exports = {
  getAll() {
    return db("cars")
  },
  getById(id) {
    return db("cars").where({ id }).first()
  },
   create(car) {
    const [id] = db("cars").insert(car)
    return db('cars').where({ id }).first()
  }
}
