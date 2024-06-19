'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categoria', [
      {
        nome: 'Entradas',
        descricao: 'Pratos leves para começar',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Pratos Principais',
        descricao: 'Pratos principais deliciosos',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Sobremesas',
        descricao: 'Doces para finalizar a refeição',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categoria', null, {});
  }
};
