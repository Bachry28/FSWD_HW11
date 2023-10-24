'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('dbtodos', [
      {
        items: 'learning',
        description: 'Learning About Javascript on Rakamin',
        status : 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        items: 'practice',
        description: 'Practice on Visual Code using Node.js',
        status : 'active',
        createdAt: new Date(),
        updatedAt: new Date()
       
      },
      {
        items: 'Repeat',
        description: 'Repeat Node.js',
        status : 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('dbtodos', null, {});
  }
};