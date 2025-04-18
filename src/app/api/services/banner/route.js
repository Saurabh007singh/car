import { connectDb } from "@/lib/db";
import Servicebanner from "@/models/serviceBanner";

export async function GET(req) {
  await connectDb();


  const banners = await Servicebanner.find()
  

  return Response.json({
    success: true,
    data: banners,
  });
}

export async function POST(req) {
  await connectDb();

  const body = await req.json();

  const newBanner = new Servicebanner(body);
  await newBanner.save();

  return Response.json({
    success: true,
    data: newBanner,
  }, { status: 201 });
}
