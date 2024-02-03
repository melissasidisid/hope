import React from "react";

function footer() {
  return (
    <div>
      <div className="px-4 sm:px-10 py-5 divide-y-2 divide-red-500 bg-[#002545] bg-opacity-20 text-white">
        <div className=" grid grid-cols-2 space-y-4 sm:grid-cols-3 lg:grid-cols-4 text-xs sm:text-s lg:text-xl divide-x-2 divide-red-500">
          <div className="  flex items-center justify-center space-x-1 sm:space-x-4 ">
            {" "}
            <div className="flex">We don t work on friday</div>
          </div>
          <div className="  flex items-center justify-center space-x-1 sm:space-x-4 ">
            {" "}
            <div className="w-5 h-5 md:w-10 md:h-10 flex">
              <img className="w-full h-full" src="/footer/location.svg" />
            </div>{" "}
            <p className="flex"> Jordan</p>
          </div>
          <div className="  flex items-center justify-center space-x-1 sm:space-x-4 ">
            {" "}
            <div className="w-5 h-5 md:w-10 md:h-10 flex">
              <img className="w-full h-full" src="/footer/phone.svg" />
              <p>0500168855</p>
            </div>{" "}
            <p className="flex"></p>
          </div>
          <div className="  flex items-center justify-center space-x-1 sm:space-x-4 ">
            {" "}
            <div className="w-5 h-5 md:w-10 md:h-10 flex">
              <img className="w-full h-full" src="/footer/calendar.svg" />
            </div>{" "}
            <div className="flex">thu - Sat : 8:00 - 20:00</div>
          </div>
        </div>

        <div className=" p-4 border-x-2 border-red-500 flex items-center justify-center space-x-10">
          <div className="w-6 h-6 md:w-10 md:h-10 flex ">
            <a href="https://www.instagram.com/gloria.sadesign/?igsh=MWxrNGF3MWVvb3Iwaw%3D%3D"> <img className="w-full h-full" src="/footer/facebook.svg" /> </a>
          </div>
          <div className="w-6 h-6 md:w-10 md:h-10 flex ">
            <a href="https://www.instagram.com/gloria.sadesign/?igsh=MWxrNGF3MWVvb3Iwaw%3D%3D"> <img className="w-full h-full" src="/footer/linkedin.svg" /> </a>
          </div>
          <div className="w-6 h-6 md:w-10 md:h-10 flex ">
            <a href="https://www.instagram.com/gloria.sadesign/?igsh=MWxrNGF3MWVvb3Iwaw%3D%3D"> <img className="w-full h-full" src="/footer/youtube.svg" /> </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer;
