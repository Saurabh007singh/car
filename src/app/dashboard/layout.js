import Link from "next/link";

function Layout({ children }) {
  return (
    <div>
      <div className="flex flex-row w-full h-screen ">
        <div className="w-[15%] p-2 flex flex-col bg-slate-300">
          <span className="text-[25px] font-extrabold font-arial">
            Make changes:{" "}
          </span>
          <Link
            href={"/dashboard/home"}
            className="font-sans text-[20px] font-extrabold"
          >
            Home Page
          </Link>
          <Link href={"/dashboard/home/homebanner"} className="font-sans ">
            Change Banner
          </Link>
          <Link href={"/dashboard/home/portfolio"} className="font-sans ">
            Add or delete portfolio
          </Link>
          <Link href={"/dashboard/home/blogs"} className="font-sans ">
            Add or delete blogs
          </Link>
          <Link href={"/dashboard/home/services"} className="font-sans ">
            Add or delete services
          </Link>
          <Link
            href={"/dashboard/services"}
            className="font-sans text-[20px] font-extrabold"
          >
            Service Page
          </Link>
          <Link
            href={"/dashboard/services/servicebanner"}
            className="font-sans"
          >
            Change Banner
          </Link>
          <Link
            href={"/dashboard/services/specificservices"}
            className="font-sans"
          >
            Change Specific services
          </Link>

          <Link
            href={"/dashboard/portfolio"}
            className="font-sans text-[20px] font-extrabold"
          >
           Portfolio Page
          </Link>
          <Link
            href={"/dashboard/portfolio/portfoliobanner"}
            className="font-sans"
          >
            Change Banner
          </Link>
          <Link
            href={"/dashboard/portfolio/specificportfolio"}
            className="font-sans"
          >
            Change Specific portfolio
          </Link>

          <Link
            href={"/dashboard/blogs"}
            className="font-sans text-[20px] font-extrabold"
          >
            Blog Page
          </Link>
          <Link
            href={"/dashboard/blogs/blogsbanner"}
            className="font-sans"
          >
            Change Banner
          </Link>
          <Link
            href={"/dashboard/blogs/specifcblogs"}
            className="font-sans"
          >
            Change Specific Blog
          </Link>
          <Link
            href={"/dashboard/enquires"}
            className="font-sans text-[20px] font-extrabold"
          >
            Enquires
          </Link>
        </div>
        <div className="w-[85%] p-2">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
