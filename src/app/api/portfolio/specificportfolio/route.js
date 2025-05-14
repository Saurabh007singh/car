import { connectDb } from "@/lib/db";
import SpecificPortfolio from "@/models/specificportfolio";

export async function GET(req) {
  await connectDb();


  const banners = await SpecificPortfolio.find()
  

  return Response.json({
    success: true,
    data: banners,
  });
}

export async function POST(req) {
  await connectDb();

  const body = await req.json();

  const newBanner = new SpecificPortfolio(body);
  await newBanner.save();

  return Response.json({
    success: true,
    data: newBanner,
  }, { status: 201 });
}
