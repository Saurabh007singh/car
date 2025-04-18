import mongoose from "mongoose"

const MONGODB_URI = process.env.STRING
if (!MONGODB_URI) throw new Error("Mongo Db uri not found");

export async function connectDb() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("connection successfull");
  } catch (err) {
    console.log("connection failed",err);
  }
}
