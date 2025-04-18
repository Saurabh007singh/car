import mongoose from "mongoose";

const HomeBannerSchema = new mongoose.Schema({
  images:[String],
  heading: String,
  subHeading:String,
});

export default mongoose.models.Homebanner || mongoose.model("Homebanner", HomeBannerSchema);