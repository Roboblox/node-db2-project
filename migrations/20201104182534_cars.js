exports.up = function(knex, Promise) {
    // don't forget the return statement
    return knex.schema.createTable('cars', tbl => {
      // creates a primary key called id
      tbl.increments('id');
      // creates a text field called name which is both required and unique
      tbl.text('car', 128).unique().notNullable();
      // creates a numeric field called budget which is required
      tbl.text('car_description', 128).unique().notNullable();
      // creates a numeric field called budget which is required
      tbl.decimal('price').notNullable();
    });
  };
  
  exports.down = function(knex) {
   // drops the entire table
   return knex.schema.dropTableIfExists('cars');
  };
  