import {connectDb} from "@/lib/db"
import Contact from "@/models/contact"



export async function POST(req,){
    await connectDb();

    const body=await req.json();

    const contact= new Contact(body);

    await contact.save();

    return Response.json({
      success:true,
    })
}