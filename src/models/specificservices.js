import mongoose from "mongoose";

const SpecificServicesSchema = new mongoose.Schema({
  id:String,
  images:[String],
  bannerHeading: String,
  bannerSubHeading:String,
  cardHeading1: String,
  cardSubHeading1:String,
  para1:String,
  cardHeading2:String,
  cardSubHeading2:String,
  para2:String,
  cardHeading3:String,
  cardSubHeading3:String,
  para3:String,
  vidUrl:String,
 
});

export default mongoose.models.Specificservice || mongoose.model("Specificservice", SpecificServicesSchema);