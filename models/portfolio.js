
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Portfolio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Portfolio.belongsTo(models.User, { onDelete: 'CASCADE' });
      Portfolio.hasMany(models.Image, { onDelete: 'CASCADE' });
    }
  }
  Portfolio.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'portfolios'
  });
  return Portfolio;
};
