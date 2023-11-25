import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Card from './Card';



const Categories = () => {
    const [Categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/categories');                
               // console.log(response.data);
            setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);            }
        };
        fetchCategories();
        },[]);


//scrollable cards
const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    centerPadding: '60px',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                centerPadding: '20%',
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll:3,
                centerPadding: '15%',
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                centerPadding: '10%',
            }
        }
    ]
};


  return (
   

    <div className="px-4 mb-4"> 
    <h2 className="text-2xl font-bold mb-4">Categories</h2>

            <Slider {...settings}>
                {Categories.map((category) => (
                    <div key={category.id}>
                        <Card category={category.category} />
                    </div>
                ))}
            </Slider>
            <div>
                
            </div>
        </div>

   
  )
}

export default Categories
