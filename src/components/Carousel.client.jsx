import React, { useState } from 'react';

export default function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handlePrevious() {
    setCurrentIndex((currentIndex + images.length - 1) % images.length);
  }

  function handleNext() {
    setCurrentIndex((currentIndex + 1) % images.length);
  }

  return (
    <div className="relative p-4">
      <button
        onClick={handlePrevious}
        className="absolute left-0 top-0 mt-16 ml-4"
      >
        Previous
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-0 mt-16 mr-4"
      >
        Next
      </button>
      <div className="relative">
        {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
          <img
            src={image.src}
            alt={image.alt}
            key={index}
            className={`${
              index === 0
                ? 'translate-x-0'
                : index === 1
                ? 'translate-x-full'
                : 'translate-x-2/3'
            } duration-500 ease-in-out transform group-hover:translate-x-0 group-focus:translate-x-0`}
          />
        ))}
      </div>
    </div>
  );
}
