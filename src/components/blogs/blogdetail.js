import { MdOutlineDateRange } from "react-icons/md";
import Link from "next/link";
import moment from "moment-timezone";
import { FaRegUserCircle } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import HoverButton from "../home/button";

export function BlogDetails({ data, blogsData, id }) {
  blogsData = blogsData.data.filter((items) => items._id != id);

  const randomBlogs = [...blogsData].sort(() => 0.5 - Math.random()).slice(0, 2);

  const formatContent = (content) => {
    return content?.split("\n").map((line, index) => (
      <p key={index} className=" leading-relaxed text-[18px] text-slate-600">
        {line.trim()}
      </p>
    ));
  };
  return (
    <>
      <div className="w-full flex md:flex-row flex-col lg:px-40 lg:py-20 lg:gap-20 mt-10 p-4">
        <div className="md:w-2/3 h-auto w-full flex flex-col  gap-5">
          <img src={data?.images[1]} />
          <div className="flex flex-row gap-5 ">
            <div className="flex flex-row items-center gap-2">
              <MdOutlineDateRange className="text-red-500" />
              <span className="font-semibold text-[#837F7E]">
                {moment(data?.createdAt)
                  .tz("Asia/Kolkata")
                  .format("MMMM D, YYYY")}
              </span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <FaRegUserCircle className="text-red-500" />
              <span className="font-semibold text-[#837F7E]">
                {data?.author}
              </span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <FaEye className="text-red-500" />
              <span>{data?.views}</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-semibold">{data?.cardHeading1}</h1>
            {data?.cardSubHeading1 ? (
              <h2>{formatContent(data?.cardSubHeading1)}</h2>
            ) : null}
            {formatContent(data?.para1)}
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-semibold">{data?.cardHeading2}</h1>
            {data?.cardSubHeading2 ? (
              <h2>{formatContent(data?.cardSubHeading2)}</h2>
            ) : null}
            {formatContent(data?.para2)}
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-semibold">{data?.cardHeading3}</h1>
            {data?.cardSubHeading3 ? (
              <h2>{formatContent(data?.cardSubHeading3)}</h2>
            ) : null}
            {formatContent(data?.para3)}
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-semibold">{data?.cardHeading4}</h1>
            {data?.cardSubHeading4 ? (
              <h2>{formatContent(data?.cardSubHeading4)}</h2>
            ) : null}
            {formatContent(data?.para4)}
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-semibold">{data?.cardHeading5}</h1>
            {data?.cardSubHeading5 ? (
              <h2>{formatContent(data?.cardSubHeading5)}</h2>
            ) : null}
            {formatContent(data?.para5)}
          </div>

          <div className="flex flex-col gap-3">
            <div className="w-full h-1 bg-red-300"></div>
            <div className="flex flex-row items-center gap-2">
              <span className="text-slate-400">Next Post</span>
              <div className="h-10 flex justify-center items-center w-10 bg-slate-200">
                <IoIosArrowForward className="text-slate-400" />
              </div>
            </div>
            <div className="w-full h-1 bg-red-300"></div>
          </div>
          <div className="flex w-full flex-col gap-2 ">
            <div className="flex flex-row justify-between items-center gap-2">
              <div className="flex flex-col gap-2">
                <span className="text-1xl text-red-500">Latest News</span>
                <span className="text-2xl font-bold">Read Related Blogs</span>
              </div>
              <Link href={"/home/blogs"}>
                <HoverButton text={"See All->"} />
              </Link>
            </div>
            <div className="flex md:flex-row flex-col gap-2">
              {randomBlogs.map(items=><Link href={`/home/blogs/${items._id}`} key={items.id} className="flex md:w-1/2 w-full relative flex-col gap-2 ">
                <div ><img src={items.images[0]}/></div>
                <div className="flex flex-row gap-5 ">
            <div className="flex flex-row items-center gap-2">
              <MdOutlineDateRange className="text-red-500" />
              <span className="font-semibold text-[#837F7E]">
                {moment(data?.createdAt)
                  .tz("Asia/Kolkata")
                  .format("MMMM D, YYYY")}
              </span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <FaRegUserCircle className="text-red-500" />
              <span className="font-semibold text-[#837F7E]">
                {data?.author}
              </span>
            </div>
          </div>
                <span className="font-bold">{data?.cardHeading1}</span>
              </Link>)}
            </div>
          </div>
        </div>

        <div className="md:w-1/3 h-auto w-full  p-5 gap-5 ">
          <div className="flex flex-col  p-5 gap-5 bg-[#F9F9F9] ">
            <span className="text-2xl font-bold ">Recent Posts</span>
            <div className="w-[50px] h-[1px] border border-red-500 "></div>
            {blogsData?.slice(0, 3).map((items) => (
              <Link
                href={`/home/blogs/${items?._id}`}
                key={items?._id}
                className="flex flex-row gap-5 "
              >
                <div className="w-1/3">
                  <img src={items?.images[0]} />
                </div>
                <div className="w-2/3 flex flex-col">
                  <span className="font-semibold text-[#837F7E]">
                    {moment(items?.createdAt)
                      .tz("Asia/Kolkata")
                      .format("MMMM D, YYYY")}
                  </span>
                  <span className="">{items?.cardHeading}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
