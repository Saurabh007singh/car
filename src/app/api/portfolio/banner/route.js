import { connectDb } from "@/lib/db";
import Portfoliobanner from "@/models/portfoliobanner";

export async function GET(req) {
  await connectDb();


  const banners = await Portfoliobanner.find()
  

  return Response.json({
    success: true,
    data: banners,
  });
}

export async function POST(req) {
  await connectDb();

  const body = await req.json();

  const newBanner = new Portfoliobanner(body);
  await newBanner.save();

  return Response.json({
    success: true,
    data: newBanner,
  }, { status: 201 });
}
