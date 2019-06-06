
exports.up = function(knex, Promise) {
    knex.schema.createTable('dishes', tbl => {
        tbl
        .increments()
        
        tbl
          .string('name', 128)
          .notNullable()
          .unique();
    })
    .createTable('Recipe', tbl => {
      tbl
      .increments()
  
      tbl
      .string('name', 128)
      .notNullable()
      .unique();
      
      tbl
      .integer('dish_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('dishes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
    })
    .createTable('ingredient', tbl => {
      tbl
      .increments()
  
      tbl
      .string('name', 128)
      .notNullable()
      .unique();
  
      tbl
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipe')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('ingredient')
    .dropTableIfExists('recipe')
    .dropTableIfExists('dish');
  };
  