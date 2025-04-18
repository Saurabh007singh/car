"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { useEffect, useState } from "react";
import { FaYoutube } from "react-icons/fa6";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import HoverButton from "./button";

export default function Header() {

  
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [activeIndex, setActiveIndex] = useState(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  useEffect(() => {
    function closeSheet() {
      setIsSheetOpen(false);
    }

    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY) {
          setShow(false); // scroll down
        } else {
          setShow(true); // scroll upF
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const navItems = [
    {
      id: "HOME",
      link: "/home",
      dropdown: [
        { id: "Our Services", path: "/ourservices" },
        { id: "Service Details", path: "/servicedetails" },
      ],
    },
    {
      id: "SERVICES",
      link: "/services",
      dropdown: [
        { id: "Our Services", path: "/ourservices" },
        { id: "Service Details", path: "/servicedetails" },
      ],
    },
    {
      id: "PROJECTS",
      link: "/projects",
      dropdown: [
        { id: "Case Studies", path: "/projects/case-studies" },
        { id: "Client Portfolio", path: "/projects/portfolio" },
      ],
    },
    {
      id: "BLOGS",
      link: "/blogs",
      dropdown: [
        { id: "Latest Posts", path: "/blogs/latest" },
        { id: "Tips & Insights", path: "/blogs/insights" },
      ],
    },

    {
      id: "CONTACT US",
      link: "/contact-us",
      dropdown: [
        { id: "Support", path: "/contact-us/support" },
        { id: "Request a Quote", path: "/contact-us/quote" },
      ],
    },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 lg:h-28 h-20  overflow-hidden  transition-transform duration-300 border-b-[1px] border-gray-800 ${
        show ? "translate-y-0 " : "-translate-y-full opacity-60"
      } bg-[#00000F]`}
    >
      <div className=" mx-auto lg:my-4 my-2 py-3 px-4 flex items-center justify-between text-white">
        {/* Logo */}
        <div className="flex items-center space-x-6">
          <img src="/images/logo.png" alt="logo" className="w-[10rem]  " />
          <div className="border-r-2 bg-slate-300 lg:h-16 h-10 w-[2px]"></div>
        </div>

        {/* Navigation */}
        <nav className="  hidden lg:flex  space-x-9 font-semibold items-center">
          {navItems.map((items, index) => (
            <div
              key={items.id}
              className="relative"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <button className="hover:text-red-600 text-[14px] font-opensans font-exrabold transition duration-300">
                {items.id}+
              </button>

              <div
                className={`absolute w-[200px] border-t-4 border-red-500 top-full left-0 mt-2 bg-white text-black shadow z-50 transition-all duration-300 ease-in-out transform ${
                  activeIndex === index
                    ? "opacity-90 translate-y-0 visible"
                    : "opacity-0 -translate-y-2 invisible"
                }`}
              >
                {items.dropdown.map((item) => (
                  <a
                    key={item.id}
                    href={item.path}
                    className="block px-4 py-2 font-light hover:bg-gray-100"
                  >
                    {item.id}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* Social Icons and Button */}
        <div className="flex flex-row items-center gap-4">
          <div className="hidden lg:block">
            <div className="  flex items-center space-x-3 ">
              {[BsTwitterX, FaFacebookF, FaYoutube, FaInstagram].map(
                (Icon, i) => (
                  <Icon
                    key={i}
                    className={`hover:text-red-600 cursor-pointer text-[20px] ${
                      i === 0 || 1 ? "text-1xl" : null
                    }`}
                  />
                )
              )}

              <div className="border-r-2 bg-slate-300 lg:h-16 h-10 w-[2px]"></div>
            </div>
          </div>

          <HoverButton text={"CALL NOW"}></HoverButton>
        </div>
        <div className="lg:hidden"><Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen} >
          <SheetTrigger>
            <div >
              <HiOutlineMenuAlt3 className="text-2xl" onClick={() => setIsSheetOpen(true)} />
            </div>
          </SheetTrigger>

          <SheetContent side="left" className="bg-black opacity-70 border-none">
            <SheetHeader className="text-4xl font-bold border-b mb-4">
              <SheetTitle>
                <SheetDescription></SheetDescription>
              </SheetTitle>
            </SheetHeader>
            <div className=" space-x-9 font-semibold items-center">
          {navItems.map((items, index) => (
            <div
              key={items.id}
              className="relative"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <button className="hover:text-red-600 text-white text-[14px] font-opensans font-exrabold transition duration-300">
                {items.id}+
              </button>

              <div
                className={`absolute w-[200px] border-t-4 border-red-500 top-full left-0 mt-2 bg-white text-black shadow z-50 transition-all duration-300 ease-in-out transform ${
                  activeIndex === index
                    ? "opacity-90 translate-y-0 visible"
                    : "opacity-0 -translate-y-2 invisible"
                }`}
              >
                {items.dropdown.map((item) => (
                  <a
                    key={item.id}
                    href={item.path}
                    className="block px-4 py-2 font-light hover:bg-gray-100"
                  >
                    {item.id}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
          </SheetContent>
        </Sheet></div>
        
      </div>
    </header>
  );
}
