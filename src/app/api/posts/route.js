import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const client = await clientPromise;
    const db = client.db("nextjs");
    const posts = await db.collection("posts").find({}).toArray();
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.error({
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}

export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db("nextjs");

    const data = await request.json();
    await db.collection("posts").insertOne(data);
    console.log("body", data);
    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (error) {
    console.error("POST Error:", error);
    return NextResponse.error({
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}
