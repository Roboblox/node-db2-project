
exports.seed = function(knex) {
    
  // Inserts seed entries
  return knex('cars').insert([
    {id: 1, car: 'car1', price: 50, },
    {id: 2, car: 'car2', price: 20, },
    {id: 3, car: 'car3', price: 30, }
  ]);
};