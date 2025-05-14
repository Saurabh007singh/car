import { connectDb } from "@/lib/db";
import Blog from "@/models/blogs";

export async function GET(req) {
  await connectDb();


  const banners = await Blog.find()
  

  return Response.json({
    success: true,
    data: banners,
  });
}

export async function POST(req) {
  await connectDb();

  const body = await req.json();

  const newBanner = new Blog(body);
  await newBanner.save();

  return Response.json({
    success: true,
    data: newBanner,
  }, { status: 201 });
}
