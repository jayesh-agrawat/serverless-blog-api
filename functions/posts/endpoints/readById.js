const { getPostById } = require('../repository/postRespository');

module.exports.readPostById = async (req, res) => {
  try {
    const postId = req.params.postId;
    const post = await getPostById(postId);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    return res.status(200).json(post);
  } catch (error) {
    console.error('Error retrieving post:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
