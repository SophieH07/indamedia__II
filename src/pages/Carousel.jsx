import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";
import pic6 from "../assets/pic6.jpg";
import pic7 from "../assets/pic7.jpeg";
import pic8 from "../assets/pic8.jpeg";

import CarouselPicture from "../components/CarouselPicture";

const Carousel = () => {
  const pictures = [
    {
      picture: pic1,
      alt: "Carousel 1",
    },
    {
      picture: pic2,
      alt: "Carousel 2",
    },
    {
      picture: pic3,
      alt: "Carousel 3",
    },
    {
      picture: pic4,
      alt: "Carousel 4",
    },
    {
      picture: pic5,
      alt: "Carousel 5",
    },
    {
      picture: pic6,
      alt: "Carousel 6",
    },
    {
      picture: pic7,
      alt: "Carousel 7",
    },
    {
      picture: pic8,
      alt: "Carousel 8",
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="md:max-w-[65%] m-auto">
        <CarouselPicture pictures={pictures} />
      </div>
    </div>
  );
};

export default Carousel;
