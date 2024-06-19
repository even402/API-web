'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ItemCardapios', [
      {
        nome: 'Salada Caesar',
        descricao: 'Salada de alface com molho caesar, croutons e parmesão',
        preco: 12.50,
        categoriaId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Filé Mignon',
        descricao: 'Filé mignon grelhado com batatas fritas',
        preco: 35.00,
        categoriaId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Cheesecake',
        descricao: 'Cheesecake com calda de frutas vermelhas',
        preco: 10.00,
        categoriaId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ItemCardapios', null, {});
  }
};
