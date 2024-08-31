import React from "react";
import Card from "./component/card";
import clientPromise from "@/lib/mongodb";
import { MongoClient } from "mongodb";

const Page = async () => {
  // const postsJson = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const posts = await postsJson.json();
  // //   console.log(posts);
  // const mongoClient = new MongoClient("mongodb://localhost:27017/");
  const client = await clientPromise;

  const db = client.db("nextjs");
  const posts = await db.collection("posts").find({}).toArray();
  console.log(posts);
  return (
    <div className="row g-2 mt-3 d-flex justify-content-evenly">
      {posts.map((item) => (
        <Card
          image={item.image}
          title={item.title}
          body={item.content}
          id={item.id}
          keys={item.id}
        />
      ))}
    </div>
  );
};

export default Page;
