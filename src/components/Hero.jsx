import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-900 ">
      <div className="h-[97.3vh] relative">
        <img
          src="https://i.pinimg.com/originals/c5/c6/00/c5c6000e82749bf3cc48c7a47e5b56a4.jpg"
          alt="Wallpaper"
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-0  flex justify-center p-2 rounded-lg bg-black/60">
          {/* <div className="bg-emerald-500 w-full">h</div> */}
          <div className="flex gap-2">
            <div className="  rounded-lg">
              <img
                className="h-10 w-10 hover:scale-x-75 hover:scale-y-75 hover:duration-500 hover:ease-in-out"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Curriculum-vitae-warning-icon.svg/2048px-Curriculum-vitae-warning-icon.svg.png"
                alt=""
              />
            </div>
            <div className="  rounded-lg">
              <img
                className="h-10 w-10 hover:scale-x-75 hover:scale-y-75 hover:duration-500 hover:ease-in-out"
                src="https://cdn-icons-png.freepik.com/256/6886/6886075.png?semt=ais_hybrid"
                alt=""
              />
            </div>
            <div className="  rounded-lg">
              <img
                className="h-10 w-10 hover:scale-x-75 hover:scale-y-75 hover:duration-500 hover:ease-in-out"
                src="https://static.vecteezy.com/system/resources/previews/011/338/344/original/contact-icon-with-phone-symbol-free-png.png"
                alt=""
              />
            </div>
            {/* <div className="p-3 bg-white/40 rounded-lg">xyz</div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
