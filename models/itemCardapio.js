'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemCardapio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ItemCardapio.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.TEXT,
    preco: DataTypes.FLOAT,
    categoriaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ItemCardapio',
  });
  return ItemCardapio;
};