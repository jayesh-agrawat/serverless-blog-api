const Router = require('express');
const {createPost,deletePost,readPostById,updatePost,readPosts} = require("../functions/posts")
// const {createPost} = require("../functions/posts/endpoints/create")
// const {validateSchema} = require("../functions/posts/middleware/validateSchema")
const router = Router();


router.
get('/',readPosts)
.get('/:postId',readPostById)
.post('/',createPost)
.delete('/:postId',deletePost)
.put('/:postId',updatePost);


module.exports = router;
