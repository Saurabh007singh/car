import { connectDb } from "@/lib/db";
import Service from "@/models/service";

export async function GET(req) {
  await connectDb();


  const banners = await Service.find()
  

  return Response.json({
    success: true,
    data: banners,
  });
}

export async function POST(req) {
  await connectDb();

  const body = await req.json();

  const newBanner = new Service(body);
  await newBanner.save();

  return Response.json({
    success: true,
    data: newBanner,
  }, { status: 201 });
}
