
exports.seed = function(knex, Promise) {

return knex('cebus').del()
  .then(function(){
    return Promise.all([
      // Inserts seed entries
      knex('cebus').insert({species: 'white-fronted capuchin', image_url:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Cebus_albifrons_edit.jpg/640px-Cebus_albifrons_edit.jpg',
      description:'Tiny little monkey in a tree.'})
    ]);
  })
};
