import mongoose from "mongoose";

const PortfolioSchema = new mongoose.Schema({
  images:[String],
  cardHeading: String,
  cardSubHeading:String,

});

export default mongoose.models.Portfolio || mongoose.model("Portfolio", PortfolioSchema);