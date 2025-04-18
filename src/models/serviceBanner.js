import mongoose from "mongoose";

const ServiceBannerSchema = new mongoose.Schema({
  images:[String],
  heading: String,
  subHeading:String,
});

export default mongoose.models.Servicebanner || mongoose.model("Servicebanner", ServiceBannerSchema);