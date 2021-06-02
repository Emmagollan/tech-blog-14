const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'John',
    password: 'test1234',
  },
  {
    username: 'Mary',
    password: 'password123',
  },
  {
    username: 'Ron',
    password: 'password123',
  },
 
];

const seedUsers = () => User.bulkCreate(userdata);//, { individualHooks: true });

module.exports = seedUsers;
