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
        </div>
        <div className="w-[85%] p-2">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
