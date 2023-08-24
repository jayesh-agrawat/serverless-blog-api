const { getPosts } = require('../repository/postRespository');

module.exports.readPosts = async (req, res) => {
  try {
    const posts = await getPosts();
    return res.status(200).json(posts);
  } catch (error) {
    console.error('Error retrieving posts:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
