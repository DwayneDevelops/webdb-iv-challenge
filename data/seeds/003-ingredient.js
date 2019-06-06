
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredient').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient').insert([
        {name: 'rowValue1', recipe_id: 2 },
        {name: 'rowValue2', recipe_id: 3 },
        {name: 'rowValue3', recipe_id: 1 }
      ]);
    });
};
