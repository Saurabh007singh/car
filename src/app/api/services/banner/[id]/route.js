import fs from "fs";
import path from "path";
import { connectDb } from "@/lib/db";
import Servicebanner from "@/models/serviceBanner";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  await connectDb();
  const { id } =await params;
  const updates = await req.json();

  const banner = await Servicebanner.findById(id);
  if (!banner) {
    return Response.json({ success: false, message: "Product not found" }, { status: 404 });
  }

  Object.assign(banner, updates);
  await banner.save();

  return Response.json({ success: true, data: banner });
}

export async function DELETE(req, { params }) {
  await connectDb();
  const { id } = await params;

  const deleted = await Servicebanner.findByIdAndDelete(id);
  if (!deleted) {
    return NextResponse.json({ success: false, message: "Banner not found" }, { status: 404 });
  }

  // 📁 Path to folder: /public/uploads/home/homebanner/{id}
  const folderPath = path.join(process.cwd(), "public", "uploads", "services", "servicebanner", id);

  try {
    if (fs.existsSync(folderPath)) {
      fs.rmSync(folderPath, { recursive: true, force: true }); // Recursively delete the folder
    }
  } catch (err) {
    console.error("Failed to delete folder:", err);
    return NextResponse.json({ success: false, message: "Banner deleted, but failed to delete images" }, { status: 500 });
  }

  return NextResponse.json({ success: true, message: "Banner and images deleted successfully" });
}

export async function GET(req,{params}){
  await connectDb();
  const {id}=await params;

  const singleProduct=await Servicebanner.findById(id)

  if(!singleProduct){
    return Response.json({success:false,message:"product not found"},{status:404})
  }
  return Response.json({success:true,data:singleProduct},{status:200})
}
