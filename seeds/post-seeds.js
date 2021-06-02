const { Post } = require('../models');

const postdata = [
  {
    title: 'The Post%%%',
    content: 'New posts are great',
    user_id: 1,
  },
  {
    title: 'Happy Pools in space.',
    content: 'https://nasa.gov/donec.json',
    user_id: 2,
  },
  {
    title: 'Lets go to there!ooo!.',
    content: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    user_id: 3,
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
