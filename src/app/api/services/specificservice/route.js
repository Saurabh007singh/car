import { connectDb } from "@/lib/db";
import Specificservice from "@/models/specificservices";

export async function GET(req) {
  await connectDb();


  const banners = await Specificservice.find()
  

  return Response.json({
    success: true,
    data: banners,
  });
}

export async function POST(req) {
  await connectDb();

  const body = await req.json();

  const newBanner = new Specificservice(body);
  await newBanner.save();

  return Response.json({
    success: true,
    data: newBanner,
  }, { status: 201 });
}
