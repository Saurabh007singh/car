import mongoose from "mongoose";

const SpecificBlogSchema = new mongoose.Schema({
  id:String,
  views:String,
  author:String,
  images:[String],
  bannerHeading: String,
  bannerSubHeading:String,
  mainHeading: String,
  mainSubHeading:String,
  para1:String,
  cardHeading2:String,
  cardSubHeading2:String,
  para2:String,
  cardHeading3:String,
  cardSubHeading3:String,
  para3:String,
  cardHeading4:String,
  cardSubHeading4:String,
  para4:String,
  cardHeading5:String,
  cardSubHeading5:String,
  para5:String,
  vidUrl:String,
},
{timestamps:true});

export default mongoose.models.SpecificBlog || mongoose.model("SpecificBlog", SpecificBlogSchema);