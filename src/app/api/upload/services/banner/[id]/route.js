import path from "path";
import fs from "fs";
import { NextResponse } from "next/server";
import { writeFile, mkdir, readdir, unlink } from "fs/promises";
import Servicebanner from "@/models/serviceBanner";
import { connectDb } from "@/lib/db";

export async function POST(req, { params }) {
  await connectDb();

  const formData = await req.formData();
  const bannerId = formData.get("bannerId");
  const files = formData.getAll("images");

  if (!bannerId || files.length === 0) {
    return NextResponse.json(
      { success: false, message: "Missing data" },
      { status: 400 }
    );
  }

  const uploadDir = path.join(
    process.cwd(),
    "public",
    "uploads",
    "services",
    "servicebanner",
    bannerId
  );
  await mkdir(uploadDir, { recursive: true });

  // ✅ Delete old images from local storage
  try {
    const existingFiles = await readdir(uploadDir);
    await Promise.all(
      existingFiles.map((file) => unlink(path.join(uploadDir, file)))
    );
  } catch (err) {
    console.warn("Failed to delete old files (might not exist yet):", err);
  }

  // ✅ Clear image references in DB
  await Servicebanner.findByIdAndUpdate(bannerId, { $set: { images: [] } });

  const uploadedFileUrls = [];

  for (const file of files) {
    const buffer = Buffer.from(await file.arrayBuffer());
    const originalName = file.name;

    // Optional: sanitize file names to avoid weird characters
    const safeName = originalName.replace(/[^a-zA-Z0-9.\-_]/g, "_");

    const filePath = path.join(uploadDir, safeName);
    const fileUrl = `/uploads/services/servicebanner/${bannerId}/${safeName}`;

    await writeFile(filePath, buffer);
    uploadedFileUrls.push(fileUrl);
  }

  // ✅ Save new image URLs to DB
  const updatedBanner = await Servicebanner.findByIdAndUpdate(
    bannerId,
    { $set: { images: uploadedFileUrls } },
    { new: true }
  );

  return NextResponse.json({
    success: true,
    images: uploadedFileUrls,
    data: updatedBanner,
  });
}
