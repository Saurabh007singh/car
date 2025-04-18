import { connectDb } from "@/lib/db";
import Homebanner from "@/models/HomeBanner";

export async function GET(req) {
  await connectDb();


  const banners = await Homebanner.find()
  

  return Response.json({
    success: true,
    data: banners,
  });
}

export async function POST(req) {
  await connectDb();

  const body = await req.json();

  const newBanner = new Homebanner(body);
  await newBanner.save();

  return Response.json({
    success: true,
    data: newBanner,
  }, { status: 201 });
}
