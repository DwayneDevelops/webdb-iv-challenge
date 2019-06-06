
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('Recipe').insert([
        {name: 'rowValue1', dish_id: 2 },
        {name: 'rowValue2', dish_id: 3 },
        {name: 'rowValue3', dish_id: 1 }
      ]);
    });
};
