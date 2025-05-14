import { connectDb } from "@/lib/db";
import SpecificBlog from "@/models/specificblog";

export async function GET(req) {
  await connectDb();


  const banners = await SpecificBlog.find()
  

  return Response.json({
    success: true,
    data: banners,
  });
}

export async function POST(req) {
  await connectDb();

  const body = await req.json();

  const newBanner = new SpecificBlog(body);
  await newBanner.save();

  return Response.json({
    success: true,
    data: newBanner,
  }, { status: 201 });
}
