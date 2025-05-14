import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  images:[String],
  cardHeading: String,
  

},
{timestamps:true});

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);