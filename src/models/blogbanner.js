import mongoose from "mongoose";

const BlogBannerSchema = new mongoose.Schema({
  images:[String],
  heading: String,
  subHeading:String,
});

export default mongoose.models.Blogbanner || mongoose.model("Blogbanner", BlogBannerSchema);