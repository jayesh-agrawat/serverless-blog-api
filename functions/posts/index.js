const {createPost} = require('./endpoints/create')
const {deletePost} = require('./endpoints/delete')
const {readPosts} = require('./endpoints/read')
const {readPostById} = require('./endpoints/readById')
const {updatePost} = require('./endpoints/update')
module.exports = {
    createPost,
    deletePost,
    readPostById,
    readPosts,
    updatePost
}