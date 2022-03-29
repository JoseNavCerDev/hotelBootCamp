'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class services extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  services.init({
    area: DataTypes.STRING,
    description: DataTypes.STRING,
    cost: DataTypes.NUMERIC
  }, {
    sequelize,
    modelName: 'services',
    timestamps: false,
  });
  return services;
};