import { BsUbuntu } from "react-icons/bs";
import { GiModernCity } from "react-icons/gi";
import { Ri24HoursFill } from "react-icons/ri";
import { GiCutDiamond } from "react-icons/gi";
import { LuFrame } from "react-icons/lu";
import { CgMoveRight } from "react-icons/cg";
import { GrCloudComputer } from "react-icons/gr";
import { SiFastapi } from "react-icons/si";

export default function Why() {
  return (
    <div className="w-full bg-slate-100 py-10">
      <div className="flex flex-col items-center gap-3 text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-semibold">
          Why Choose <span className="text-red-500">Us?</span>
        </h2>
        <p className="text-lg sm:text-xl text-slate-500">
          Few more reasons to choose us over others
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 sm:px-6 md:px-10 lg:px-20 mt-10">
        {[
          { icon: <GiModernCity />, label: "Modern Design",para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporisad odio. Saepe, dolores incidunt quae obcaecati nisi quis" },
          { icon: <BsUbuntu />, label: "Open Source" ,para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporisad odio. Saepe, dolores incidunt quae obcaecati nisi quis"},
          { icon: <Ri24HoursFill />, label: "24/7 Support",para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporisad odio. Saepe, dolores incidunt quae obcaecati nisi quis" },
          { icon: <LuFrame />, label: "Pixel Perfect",para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporisad odio. Saepe, dolores incidunt quae obcaecati nisi quis" },
          { icon: <CgMoveRight />, label: "Fast Delivery",para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporisad odio. Saepe, dolores incidunt quae obcaecati nisi quis" },
          { icon: <GrCloudComputer />, label: "Cloud Ready",para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporisad odio. Saepe, dolores incidunt quae obcaecati nisi quis" },
          { icon: <GiCutDiamond />, label: "High Quality",para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporisad odio. Saepe, dolores incidunt quae obcaecati nisi quis" },
          { icon: <SiFastapi />, label: "API-First",para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporisad odio. Saepe, dolores incidunt quae obcaecati nisi quis" },
        ].map(({ icon, label, para }, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center gap-4 bg-white rounded-lg p-6 sm:p-8 shadow-sm hover:shadow-md transition"
          >
            <div className="p-4 bg-red-100 rounded-full text-red-500 text-5xl">
              {icon}
            </div>
            <h3 className="text-xl font-semibold">{label}</h3>
            <p className="text-slate-600 text-sm sm:text-base">
              {para}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
