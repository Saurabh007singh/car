import {connectDb} from "@/lib/db"
import Contact from "@/models/contact"


export async function GET(req,{params}){
  console.log("called")
  await connectDb();
 const param=await params
 console.log(param)
const page=parseInt(param.page);
const limit=parseInt(param.limit);
  const skip=(page-1)*limit;

  const contact=await Contact.find().skip(skip).limit(limit);
  const total=await Contact.countDocuments();

  return Response.json({
    success:true,
    data:contact,
    pagination:{
      currentPage:page,
      totalPages:Math.ceil(total/limit),
      totalProducts:total
    }
  })
}

export async function POST(req,){
    await connectDb();

    const body=await req.json();

    const contact= new Contact(body);

    await contact.save();

    return Response.json({
      success:true,
    })
}