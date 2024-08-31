// "use client";
// import React, { useEffect, useState } from "react";
// import Card from "../../blog/component/card";
// import clientPromise from "@/lib/mongodb";
// import { MongoClient } from "mongodb";
// const Page = async ({ params }) => {
//   // const postsJson = await fetch(`mongodb://localhost:27017${params.id}`);
//   // const posts = await postsJson.json();

//   // const paraId = params.id;

//   // const [postId, setPostId] = useState(paraId);
//   // const [posts, setPosts] = useState({});
//   const mongoClient = new MongoClient("mongodb://localhost:27017/");
//   const clientPromise = mongoClient.connect();
//   const client = await clientPromise;
//   const db = client.db("nextjs");
//   const posts = await db.collection("posts").findOne({ id: params.id });
//   console.log(posts);
//   // useEffect(() => {
//   //   setPosts(posts);
//   // }, [postId]);

//   // const handllePre = () => {
//   //   setPostId(postId - 1);
//   // };

//   // clientPromise

//   return (
//     <div className="text-center">
//       <div className=" d-flex justify-content-center mx-auto">
//         <Card
//           title={posts.title}
//           body={posts.content}
//           id={posts.id}
//           key={posts.id}
//         />
//       </div>
//       {/*
//       <button type="btn" className="btn btn-danger me-5">
//         {" "}
//         pre
//       </button>

//       <button type="btn" className="btn btn-danger">
//         {" "}
//         next
//       </button> */}
//     </div>
//   );
// };

// export default Page;
"use client";
import React from "react";
import Card from "../../blog/component/card";
import { MongoClient } from "mongodb";
import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";

const Page = async ({ params }) => {
  console.log(params.id);
  // return <> post {params.id} </>;
  try {
    const client = await clientPromise;
    const db = client.db("nextjs");
    console.log(posts);
    const posts = await db.collection("posts").findOne({ id: params.id });
    console.log(posts);
    if (!posts) throw Error("NOT FOUND");
    return (
      <div className="text-center">
        <div className="d-flex justify-content-center mx-auto">
          <Card
            title={posts.title}
            body={posts.content}
            id={posts.id}
            key={posts.id}
          />
        </div>
      </div>
    );
  } catch (error) {
    notFound();
    console.error("Failed to fetch posts:", error);
    return <div>Error loading post</div>;
  }
};

export default Page;
