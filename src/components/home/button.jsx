"use client"
export default function HoverButton({ text = "Hover Me" ,height="auto",width="auto"}) {
  return (
    <button
      className={`relative overflow-hidden  flex items-center justify-center p-1 lg:p-2 font-arial font-extrabold text-sm lg:text-lg  text-white bg-[#D70007] cursor-pointer
                 hover:text-red-500 hover:bg-white transition-colors duration-500`}
                 style={{
                  height:height,
                  width:width,
                  backgroundImage: "linear-gradient(to right, #D70007 50%, #00000F 50%)",
                  backgroundSize: "200% 100%",
                  backgroundPosition: "left",
                  transition: "all 0.4s ease",
                }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundPosition = "right";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundPosition = "left";
      }}
    >
      {text}
    </button>
  );
}