import React from 'react'
import Slider from 'react-slick';


const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        lazyLoad: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1     , // Show 2 slides on medium screens
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1, // Show 1 slide on smaller screens
                slidesToScroll: 1,
              },
            },
          ],
    }
  return (
    <Slider {...settings} className="relative" >
       
      <div className="bg-gray-300 relative h-64 sm:h-80 lg:h-96">
      <img
          src="slider/1.jpg"
          alt="Image 1"
          className="w-full h-64 sm:h-80 lg:h-96 object-cover"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div className='bg-black opacity-90'>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
            <h3 className="text-3xl font-bold mb-2 text-white">Slide 1 Text</h3>
            <p className="text-lg mb-4 text-white">Some description text here...</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
                Button
            </button>
            </div>
        </div>
      
      </div>
      <div className="bg-gray-300 relative h-64 sm:h-80 lg:h-96">
      <img
          src="slider/2.jpg"
          alt="Image 1"
          className="w-full h-64 sm:h-80 lg:h-96 object-cover"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
         <div className='bg-black opacity-90'>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h3 className="text-3xl font-bold mb-2 text-white">Slide 2 Text</h3>
          <p className="text-lg mb-4 text-white">Some description text here...</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Button
          </button>
        </div>
        </div>
      </div>
      <div className="bg-gray-300">
      <img
          src="slider/3.jpg"
          alt="Image 1"
          className="w-full h-64 sm:h-80 lg:h-96 object-cover"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div className='bg-black opacity-90'>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h3 className="text-3xl font-bold mb-2 text-white">Slide 3 Text</h3>
          <p className="text-lg mb-4 text-white">Some description text here...</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Button
          </button>
        </div>
        </div>
      </div>
     
      
    </Slider>
  )
}

export default ImageSlider