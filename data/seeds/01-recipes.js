
exports.seed = function(knex, Promise) {


      return knex('recipes').insert([
        {recipe_name: 'cake', description: 'a nice cake'},
        {recipe_name: 'stew', description: 'a hearty stew'},
        {recipe_name: 'bread', description: 'fresh baked bread'}
      ]);
   
};
