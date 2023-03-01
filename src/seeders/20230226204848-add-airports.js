'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airports',[
      {
        name: 'Kempegowda International Airport',
        CityId: 4,
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mysure Airport',
        CityId: 4,
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mangalore Airport',
        CityId: 4,
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pune Airport',
        CityId: 1,
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sirdhi Airport',
        CityId: 1,
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Agra Airport',
        CityId: 8,
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tundla Airport',
        CityId: 8,
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Panji Airport',
        CityId: 6,
        createdAt:new Date(),
        updatedAt: new Date()
      }

    ],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
