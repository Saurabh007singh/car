import { connectDb } from "@/lib/db";
import Portfolio from "@/models/portfolio";

export async function GET(req) {
  await connectDb();


  const banners = await Portfolio.find()
  

  return Response.json({
    success: true,
    data: banners,
  });
}

export async function POST(req) {
  await connectDb();

  const body = await req.json();

  const newBanner = new Portfolio(body);
  await newBanner.save();

  return Response.json({
    success: true,
    data: newBanner,
  }, { status: 201 });
}
