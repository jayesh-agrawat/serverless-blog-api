const { createPost } = require('../repository/postRespository');

module.exports.createPost = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    if (!title || !content || !author) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const postData = {
      title,
      content,
      author,
      publicationDate: new Date(),
    };

    const postId = await createPost(postData);

    return res.status(201).json({ message: 'Post created successfully', postId });
  } catch (error) {
    console.error('Error creating post:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
