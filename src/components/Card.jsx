import { faBowlFood, faBriefcase, faFootballBall, faGavel, faGraduationCap, faHeartbeat, faLaptop, faPlane, faTshirt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';

const getCategoryIcon = (category) => {
    // Return the appropriate icon based on the category
    switch (category) {
      case 'Food':
        return faBowlFood;
      case 'Technology':
        return faLaptop;
      case 'Sports':
        return faFootballBall;
      case 'Fashion':
        return faTshirt;
      case 'Business':
        return faBriefcase;
      case 'Politics':
        return faGavel;
      case 'Health':
        return faHeartbeat;
      case 'Travel':
        return faPlane;
      case 'Education':
        return faGraduationCap;
      default:
        return faBowlFood; // Default icon
    }
  };



const Card = ({category}) => {
    //console.log(category)
    const icon = getCategoryIcon(category);
  return (
    <div className="bg-white rounded-lg shadow-md m-2 text-center p-4" >
      <FontAwesomeIcon icon={icon} className="text-4xl text-gray-600 mb-2" />
      <h3 className="text-xl font-semibold mt-2">{category}</h3>
    </div>
  )
}

export default Card
