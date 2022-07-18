"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      // appid: {
      //   type: Sequelize.UUID,
      // },
      // feedback: {
      //   type: Sequelize.INTEGER,
      // },
      description: {
        type: Sequelize.CHAR,
      },
      desctype: {
        type: Sequelize.CHAR,
      },
      emoji: {
        type: Sequelize.CHAR,
      },
      // created_at: {
      //   allowNull: false,
      //   type: Sequelize.DATE,
      // },
      // updated_at: {
      //   allowNull: false,
      //   type: Sequelize.DATE,
      // },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
