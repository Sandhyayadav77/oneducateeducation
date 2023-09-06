import React from 'react';
import './tailwind.css'
import image from '../assets/images/book.png'

const SlidingImageAnimation = () => {
  return (
    <div className="flex items-center overflow-hidden">
      <div className="flex animation-slide">
        <img src={image} alt="Image 1" className="w-48 h-auto mr-4" />
        <img src={image} alt="Image 2" className="w-48 h-auto mr-4" />
        <img src={image} alt="Image 3" className="w-48 h-auto mr-4" />
        <img src={image} alt="Image 3" className="w-48 h-auto mr-4" />
        <img src={image} alt="Image 3" className="w-48 h-auto mr-4" />
        <img src={image} alt="Image 3" className="w-48 h-auto mr-4" />
        <img src={image} alt="Image 3" className="w-48 h-auto mr-4" />
        <img src={image} alt="Image 3" className="w-48 h-auto mr-4" />
        <img src={image} alt="Image 3" className="w-48 h-auto mr-4" />
        <img src={image} alt="Image 3" className="w-48 h-auto mr-4" />
        {/* Add more images as needed */}
      </div>
    </div>
  );
};

export default SlidingImageAnimation;
