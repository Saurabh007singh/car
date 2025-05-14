import { connectDb } from "@/lib/db";
import Blogbanner from "@/models/blogbanner";

export async function GET(req) {
  await connectDb();


  const banners = await Blogbanner.find()
  

  return Response.json({
    success: true,
    data: banners,
  });
}

export async function POST(req) {
  await connectDb();

  const body = await req.json();

  const newBanner = new Blogbanner(body);
  await newBanner.save();

  return Response.json({
    success: true,
    data: newBanner,
  }, { status: 201 });
}
