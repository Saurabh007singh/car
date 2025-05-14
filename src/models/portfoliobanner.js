import mongoose from "mongoose";

const PortfolioBannerSchema = new mongoose.Schema({
  images:[String],
  heading: String,
  subHeading:String,
});

export default mongoose.models.Portfoliobanner || mongoose.model("Portfoliobanner", PortfolioBannerSchema);