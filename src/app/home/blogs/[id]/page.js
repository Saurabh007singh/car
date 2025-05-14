import { BlogDetails } from "@/components/blogs/blogdetail";
import { SingleBlogBanner } from "@/components/blogs/singleblogbanner";



  


export default async function SpecificBlog({params}){
const {id} = await params
 
 

  const [blogRes1,blogRes] = await Promise.all([
   
    fetch(`${process.env.NEXTAUTH_URL}/api/blogs/specificblog/${id}`, { cache: "no-store" }),
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/home/blog`, { cache: "no-store" }),
  ]);

  const blogsData=await blogRes.json();
  const data = await blogRes1.json();

  return(<>
  <div className="md:h-28 bg-black"></div>
  <section >
    <SingleBlogBanner serviceData={data.data}/>
  </section>
  <section>
    <BlogDetails data={data.data} blogsData={blogsData} id={id}/>
  </section>
  </>) 
}