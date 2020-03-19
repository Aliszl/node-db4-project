
exports.seed = function(knex) {
 
      return knex('steps-ingredients').insert([
        {step_id: 1, ingredient_id: 1, quantity: '2 cups'},
        {step_id: 2, ingredient_id:  2,  quantity: '200g'},
        {step_id: 3, ingredient_id:  3,  quantity: '300g'},
        {step_id: 4, ingredient_id:  4,  quantity: '1 cup'},
        {step_id: 5, ingredient_id:  5,  quantity: 'a pinch'},
        {step_id: 6, ingredient_id:  6,  quantity: '2 tsp'},
        {step_id: 7, ingredient_id: 7, quantity: '3'},
        {step_id: 8, ingredient_id: 8, quantity: '6'},
        {step_id: 9, ingredient_id: 9, quantity: '2 cups'},
        {step_id: 10, ingredient_id: 10, quantity: '6 tbsp'},
        {step_id: 11, ingredient_id: 11, quantity: '400g'}
      
      ]);
    
};
