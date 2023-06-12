

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true
      },
      comments: {
        type: Sequelize.STRING,
        allowNull: true
      },
      path: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },

  async down(queryInterface) {
    queryInterface.dropTable('images');
  }
};
