import mongoose from "mongoose";

const SpecificPortfolioSchema = new mongoose.Schema({
  id:String,
  images: [String],
  bannerHeading: String,
  bannerSubHeading: String,
  service: String,
  heading1: String,
  para1: String,
  heading2: String,
  para2: String,
  client: String,
  category: String,
  timeframe: String,
  fbLink: String,
  instaLink: String,
  youtubeLink: String,
  twitterLink: String,
  para3: String,
  service1: String,
  brief1: String,
  service2: String,
  brief2: String,
  service3: String,
  brief3: String,
  vidUrl: String
});

export default mongoose.models.SpecificPortfolio || mongoose.model("SpecificPortfolio", SpecificPortfolioSchema);
