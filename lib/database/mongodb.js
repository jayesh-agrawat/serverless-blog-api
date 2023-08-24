const { config } = require('dotenv');
const { MongoClient,ServerApiVersion } = require('mongodb');
config()
// MongoClient now auto-connects so no need to store the connect()
// promise anywhere and reference it.
const MONGO_URI = process.env.MONGODB_URI;
const dbName = process.env.DB;

module.exports.connect = async()=>{
  const client = new MongoClient(MONGO_URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  await client.connect();
  const db = client.db(dbName);
  return db;
}

