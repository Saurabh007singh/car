
import { FaUserAlt, FaCommentAlt } from "react-icons/fa";
import moment from "moment-timezone";
import HoverButton from "./button";
import Link from "next/link";





const BlogSection = ({blog}) => {
  
  
  return (
    <div className="p-2 md:p-4 mx-auto  ">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-sm text-red-600 font-semibold">Latest News</p>
          <h2 className="text-3xl font-bold">Read Latest Blogs</h2>
        </div>
        <Link href={`/home/blogs`} className="bg-red-600 text-white px-6 py-2 font-semibold group hover:bg-red-700 transition-all">
          See All →
        </Link>
      </div>

      {/* Blog Cards */}
      <div className="grid h-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blog.slice(0,3).map((blog, idx) => (
          <div
            key={idx}
            className="relative group  rounded shadow-lg"
          >
            <img
              src={blog.images[0]}
              alt={blog.title}
              className="w-full lg:h-[500px] md:h-[450px] sm:h-[400px] h-[400px] object-cover  transition-transform duration-500"
            />
            
            <div className="absolute flex flex-col gap-3 bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4 text-white">
              <div className=" gruop flex items-center text-sm gap-4 mb-2">
                <div className="flex items-center gap-1">
                  <FaUserAlt className="text-xs" />
                  <span>Admin</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaCommentAlt className="text-xs" />
                  <span>{2}</span>
                </div>
              </div>
              <h3 className="font-semibold text-[16px] leading-tight">
                {blog.cardHeading}
              </h3>
              <Link href={`/home/blogs/${blog._id}`} ><HoverButton text={"Read More"}></HoverButton></Link>
              <div className="absolute text-center z-30 lg:top-[-100px] lg:left-[-10px] top-[0] left-[0]  bg-[#F4F4F4] px-3 py-1 w-60 h-12 text-lg font-semibold text-gray-800 rotate-[-90deg] origin-top-left group-hover:bg-red-500 group-hover:text-white  transition duration-300 ">
              {moment(blog.createdAt)
  .tz("Asia/Kolkata")
  .format("MMMM D, YYYY")}

            </div>
            </div>
           
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
