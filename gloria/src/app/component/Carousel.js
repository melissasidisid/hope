"Use Client";

import React, { useEffect, useState } from "react";

function Carousel() {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    "/unsalon.png",
    "/meuble.png",
    "/livingroom.png",
    "/kitchen2.png",
    "/kitchen.png",
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);
    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div className="flex p-1 sm:p-4 md:w-1/2 md:h-2/5">
        <img
          className="w-full h-full sm:rounded-3xl"
          src={images[imageIndex]}
          alt="no pîcture"
        />
      </div>
    </>
  );
}

export default Carousel;
