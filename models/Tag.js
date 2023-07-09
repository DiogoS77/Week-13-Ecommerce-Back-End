const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

const Tag = sequelize.define('tag', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  tag_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
  freezeTableName: true,
  underscored: true,
});

module.exports = Tag;