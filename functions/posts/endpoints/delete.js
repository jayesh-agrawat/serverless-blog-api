const { deletePost } = require('../repository/postRespository');

module.exports.deletePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    await deletePost(postId);

    return res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Error deleting post:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
