
exports.seed = function(knex) {

    
      return knex('ingredients').insert([
        { name: 'flour'},
        { name: 'butter'},
        { name: 'baking powder'},
        { name: 'caster sugar'},
        { name: 'eggs'},
        { name: 'olive oil'},
        { name: 'beef'},
        { name: 'lamb'},
        { name: 'chicken'},
        { name: 'onions'},
        { name: 'leeks'}
      ]);
  
};
