// // import { MongoClient } from "mongodb";

// // const uri = "mongodb://localhost:27017/";
// // const client = new MongoClient(uri, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // });

// // export async function connectToDatabase() {
// //   if (!client.isConnected()) {
// //     await client.connect();
// //   }
// //   const db = client.db("nextjs");
// //   return { db };
// // }
// const { MongoClient } = require("mongodb");

// let client;

// async function connectToDatabase() {
//   if (client && client.isConnected()) {
//     return client.db("nextjs");
//   }

//   client = new MongoClient("mongodb://localhost:27017", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

//   await client.connect();
//   return client.db("nextjs");
// }

// module.exports = { connectToDatabase };
// lib/mongodb.js

import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017/";
const options = {};

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default clientPromise;
