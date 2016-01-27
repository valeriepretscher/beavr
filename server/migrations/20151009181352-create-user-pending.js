'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('user_pendings', {
      username: {
        type: Sequelize.STRING(64),
        allowNull: true
      },
      email: {
        type: Sequelize.STRING(64),
        allowNull: false
      },
      type: {
        type: Sequelize.STRING(64),
        unique: false,
        allowNull: false
      },
      code: {
        type: Sequelize.TEXT(16),
        allowNull: false,
        primaryKey: true,
      },
      passwordHash: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface) {
    return queryInterface.dropTable('user_pendings');
  }
};
