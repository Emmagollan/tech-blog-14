const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Nunc rhoncus dui vel sem.',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'Blow the world with love',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'Aliquam erat volutpat. In congue.',
    user_id: 3,
    post_id: 3
  },
  
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
