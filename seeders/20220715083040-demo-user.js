"use strict";

// const { UUID } = require("sequelize/types");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          // appid: UUID,
          description: "new data",
          desctype: "suggestion",
          emoji: "happy",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    // await queryInterface.bulkDelete("user", null, bulkDeleteOptions);
  },
};
