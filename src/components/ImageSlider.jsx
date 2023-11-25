import React from 'react';
import Slider from 'react-slick';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    lazyLoad: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="overflow-hidden">
      <Slider {...settings} className="relative">
        <div className="sm:h-80 lg:h-96">
          <img
            src="slider/1.jpg"
            alt="Image 1"
            className="w-full h-full object-cover"
           
          />
          {/* Rest of the content */}
        </div>
        {/* Additional slides with similar structure */}
        <div className="sm:h-80 lg:h-96">
          <img
            src="slider/2.jpg"
            alt="Image 2"
            className="w-full h-full object-cover"
             />
          {/* Rest of the content */}
        </div>
        <div className="sm:h-80 lg:h-96">
          <img
            src="slider/3.jpg"
            alt="Image 3"
            className="w-full h-full object-cover"
            
          />
          {/* Rest of the content */}
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
