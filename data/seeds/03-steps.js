
exports.seed = function(knex) {
  // Deletes ALL existing entries

      return knex('steps').insert([
        {step: 'Place in a bowl',recipe_id: 1},
        {step: 'add',recipe_id: 1},
        {step: 'cream together',recipe_id: 1},
        {step: 'sieve and fold in',recipe_id: 1},
        {step: 'transfer to a cake tin',recipe_id: 1},
        {step: 'bake at 180 degrees for 30 minutes',recipe_id: 1},
        {step: 'saute',recipe_id: 2},
        {step: 'braise',recipe_id: 2},
        {step: 'add',recipe_id: 2},
        {step: 'thicken',recipe_id: 2},
      ]);
  
};
