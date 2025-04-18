
import { FaUserAlt, FaCommentAlt } from "react-icons/fa";

const blogData = [
  {
    title: "We Solution For This Consulting People in Needleo Blog.",
    date: "August 30, 2024",
    author: "Admin",
    comments: "1 Massage",
    image: "/images/blog-1.jpg", // Replace with your actual paths
  },
  {
    title: "We Can Aenean Poor to Help This People in Needleo Blog.",
    date: "August 30, 2024",
    author: "Admin",
    comments: "1 Massage",
    image: "/images/blog-2.jpg",
  },
  {
    title: "The Best Swap and Box to Cover Your Char With Best Service.",
    date: "August 30, 2024",
    author: "Admin",
    comments: "1 Massage",
    image: "/images/blog-3.jpg",
  },
];

const BlogSection = () => {
  return (
    <div className="p-5 mx-auto px-8 py-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-sm text-red-600 font-semibold">Latest News</p>
          <h2 className="text-3xl font-bold">Read Latest Blogs</h2>
        </div>
        <button className="bg-red-600 text-white px-6 py-2 font-semibold hover:bg-red-700 transition-all">
          Sell All →
        </button>
      </div>

      {/* Blog Cards */}
      <div className="grid h-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogData.map((blog, idx) => (
          <div
            key={idx}
            className="relative group  rounded shadow-lg"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[500px] object-cover  transition-transform duration-500"
            />
            
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4 text-white">
              <div className=" gruop flex items-center text-sm gap-4 mb-2">
                <div className="flex items-center gap-1">
                  <FaUserAlt className="text-xs" />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaCommentAlt className="text-xs" />
                  <span>{blog.comments}</span>
                </div>
              </div>
              <h3 className="font-semibold text-[16px] leading-tight">
                {blog.title}
              </h3>
              <h3 className=" text-black  group-hover:text-red-500  transition duration-300 font-extrabold">READ MORE</h3>
              <div className="absolute text-center z-30 top-[-140px] left-[-10px] bg-[#F4F4F4] px-3 py-1 w-60 h-12 text-lg font-semibold text-gray-800 rotate-[-90deg] origin-top-left ">
              {blog.date}
            </div>
            </div>
           
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
