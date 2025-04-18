import mongoose from "mongoose";

const ServicesSchema = new mongoose.Schema({
  images:[String],
  cardHeading: String,
  cardSubHeading:String,
  vidUrl:String,
 
});

export default mongoose.models.Service || mongoose.model("Service", ServicesSchema);