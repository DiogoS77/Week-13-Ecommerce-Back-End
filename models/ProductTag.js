const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const ProductTag = sequelize.define('product_tag', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'product',
      key: 'id',
    },
  },
  tag_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'tag',
      key: 'id',
    },
  },
}, {
  timestamps: false,
  freezeTableName: true,
  underscored: true,
});

module.exports = ProductTag;