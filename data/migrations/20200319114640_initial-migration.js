exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments() 
      tbl.string('recipe_name', 128).notNullable()
      tbl.string('description', 128).notNullable()
    })
    .createTable('ingredients', tbl => {
        tbl.increments() 
        tbl.string('name', 128).notNullable()
     })
      .createTable('steps', tbl => {
        tbl.increments() 
        tbl.string('step', 128).notNullable()
        tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
      })
      .createTable('steps-ingredients', tbl => {
        tbl.increments() 
        tbl.integer('step_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('steps')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
        tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
        tbl.string('quantity').notNullable()
      })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('steps-ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
