// database/mongodb.js
const { config } = require('dotenv');
const {ObjectId}  = require('mongodb');
const {connect} = require('../../../lib/database/mongodb');

config();
const POSTS = process.env.COLLECTION_POSTS;

async function createPost(postData) {
  const db = await connect();
  const posts = db.collection(POSTS);
  const result = await posts.insertOne(postData);
  return result.insertedId;
}

async function getPosts() {
  const db = await connect();
  const posts = db.collection(POSTS);
  return posts.find().toArray();
}

async function getPostById(postId) {
  const db = await connect();
  const posts = db.collection(POSTS);
  console.log(postId);
  return posts.findOne({ _id: new ObjectId(postId) });
}

async function updatePost(postId, updatedFields) {
  const db = await connect();
  const posts = db.collection(POSTS);
  await posts.updateOne({ _id: new ObjectId(postId) }, { $set: updatedFields });
}

async function deletePost(postId) {
  const db = await connect();
  const posts = db.collection(POSTS);
  await posts.deleteOne({ _id: new ObjectId(postId) });
}

module.exports = {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
};
