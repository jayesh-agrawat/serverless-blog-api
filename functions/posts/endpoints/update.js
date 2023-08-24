const { updatePost } = require('../repository/postRespository');

module.exports.updatePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const { title, content } =(req.body);

    if (!title || !content) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const updatedFields = { title, content };
    await updatePost(postId, updatedFields);

    return res.status(200).json({ message: 'Post updated successfully' });
  } catch (error) {
    console.error('Error updating post:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
