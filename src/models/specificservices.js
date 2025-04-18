import mongoose from "mongoose";

const SpecificServicesSchema = new mongoose.Schema({
  id:String,
  images:[String],
  cardHeading1: String,
  cardSubHeading1:String,
  para1:String,
  cardHeading2: String,
  cardSubHeading2:String,
  para2:String,
  cardHeading3:String,
  cardSubHeading3:String,
  para3:String,
  cardHeading4:String,
  cardSubHeading4:String,
  para4:String,
  vidUrl:String,
 
});

export default mongoose.models.Specificservice || mongoose.model("Specificservice", SpecificServicesSchema);