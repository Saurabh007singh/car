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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { navItems } from "../../config/const ";
import { useRouter } from "next/navigation";

export default function Header() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShow(false); // Scrolling down
      } else {
        setShow(true); // Scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`top-0 w-full z-50 lg:h-28 h-20 transition-transform duration-300 border-b border-gray-800 ${
        show ? "translate-y-0" : "-translate-y-full opacity-60"
      } bg-[#00000F]`}
    >
      <div className="mx-auto lg:my-4 my-2 py-3 px-4 flex items-center justify-between text-white">
        {/* Logo */}
        <div className="flex items-center space-x-6">
          <img src="/images/logo.png" alt="logo" className="w-[10rem]" />
          <div className="border-r-2 bg-slate-300 lg:h-16 h-10 w-[2px]"></div>
        </div>

        {/* Desktop Nav */}
        <div className="flex-row gap-8 hidden lg:flex">
          <button
            onClick={() => router.push("/home")}
            className="hover:text-red-600 text-[14px] font-extrabold transition duration-300"
          >
            HOME
          </button>
          <nav className="lg:flex space-x-9 font-semibold items-center">
            {navItems.map((items, index) => (
              <div
                key={items.id}
                className="relative"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <a
                  href={items.link}
                  className="hover:text-red-600 text-[14px] font-opensans font-extrabold transition duration-300"
                >
                  {items.id}+
                </a>

                <div
                  className={`absolute w-[200px] border-t-4 border-red-500 top-full left-0 mt-2 bg-white text-black shadow z-50 transition-all duration-300 transform ${
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
        </div>

        {/* Socials & Call Button */}
        <div className="flex flex-row items-center gap-4">
          <div className="hidden lg:block">
            <div className="flex items-center space-x-3">
              {[BsTwitterX, FaFacebookF, FaYoutube, FaInstagram].map(
                (Icon, i) => (
                  <Icon
                    key={i}
                    className="hover:text-red-600 cursor-pointer text-[20px]"
                  />
                )
              )}
              <div className="border-r-2 bg-slate-300 lg:h-16 h-10 w-[2px]"></div>
            </div>
          </div>
          <HoverButton text={"CALL NOW"} />
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger>
              <div>
                <HiOutlineMenuAlt3
                  className="text-2xl"
                  onClick={() => setIsSheetOpen(true)}
                />
              </div>
            </SheetTrigger>

            <SheetContent side="left" className="bg-black opacity-90 border-none">
              <SheetHeader className="text-4xl font-bold mb-4">
                <SheetTitle>
                  <SheetDescription></SheetDescription>
                </SheetTitle>
              </SheetHeader>

              <div className="space-x-9 p-4 font-semibold items-center">
                <button
                  onClick={() => router.push("/home")}
                  className="hover:text-red-600 text-white text-[14px] font-opensans font-extrabold transition duration-300"
                >
                  HOME
                </button>

                <Accordion type="single" collapsible className="w-[90%]">
                  {navItems.map((items, index) => (
                    <AccordionItem key={items.id} value={items.id}>
                      <AccordionTrigger
                        onClick={() =>
                          setActiveIndex(index === activeIndex ? null : index)
                        }
                      >
                        <span className="hover:text-red-600 text-white text-[14px] font-arial font-extrabold transition duration-300">
                          {items.id}
                        </span>
                      </AccordionTrigger>

                      {activeIndex === index && (
                        <AccordionContent>
                          {items.dropdown.map((item) => (
                            <a
                              key={item.id}
                              href={item.path}
                              className="block px-4 py-2 font-light hover:bg-red-500 text-white"
                            >
                              {item.id}
                            </a>
                          ))}
                        </AccordionContent>
                      )}
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
