import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CarouselPicture = ({ pictures }) => {
  let [current, setCurrent] = useState(0);

  const previousSlide = () => {
    if (current === 0) setCurrent(pictures.length - 1);
    else setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (current === pictures.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden relative rounded-lg">
      <div
        className="flex transition ease-out duration-200"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {pictures.map((picture, index) => (
          <img key={index} src={picture.picture} alt={picture.alt} />
        ))}
      </div>
      <div className="flex absolute top-0 h-full w-full justify-between">
        <button
          className="bg-opacity-20 hover:bg-opacity-40 px-3"
          onClick={previousSlide}
        >
          <FaArrowLeft />
        </button>
        <button
          className="bg-opacity-20 hover:bg-opacity-40 px-3"
          onClick={nextSlide}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CarouselPicture;
