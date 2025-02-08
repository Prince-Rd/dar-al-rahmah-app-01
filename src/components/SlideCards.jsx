import React, { useState } from "react";

const cards = [
  {
    id: 1,
    // title: 'Card 1',
    // content: 'This is the content of card 1.',
    image: "/src/assets/img/slides/slide1.png",
    mobileImage: "/src/assets/img/slides/mobileSlide1.png",
  },
  {
    id: 2,
    // title: 'Card 2',
    // content: 'This is the content of card 2.',
    image: "/src/assets/img/slides/slide2.png",
    mobileImage: "/src/assets/img/slides/mobileSlide2.png",
  },
  {
    id: 3,
    // title: 'Card 3',
    // content: 'This is the content of card 3.',
    image: "/src/assets/img/slides/slide3.png",
    mobileImage: "/src/assets/img/slides/mobileSlide3.png",
  },
];

function SlideCards() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Cards Container */}
      <div className="relative mb-4 w-full h-full md:flex items-center justify-center">
        {cards.map((card, index) => {
          const position = index - activeIndex;
          const isActive = position === 0;

          return (
            <div
              key={card.id}
              className={`absolute md:w-[60rem] w-[50rem]  transition-all duration-500 ease-in-out ${
                isActive ? "z-10" : "z-0"
              }`}
              style={{
                transform: `translateX(${position * 40}%) scale(${
                  isActive ? 1 : 0.85
                })`,
                filter: `blur(${isActive ? 0 : 4}px)`,
                opacity: isActive ? 1 : 0.7,
              }}
            >
              <div className="bg- w-full  overflow-">
                {/* Responsive Image Rendering */}
                <img
                  src={card.image} // Default image for larger screens
                  alt={`Slide ${card.id}`}
                  className="w-full h-auto object-cover hidden md:block" // Hide on small screens
                />
                <img
                  src={card.mobileImage} // Mobile image for small screens
                  alt={`Slide ${card.id}`}
                  className="w-1/2 h-auto object-cover md:hidden" // Hide on larger screens
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                  <p className="text-gray-600">{card.content}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-8 mb-8 md:mb-4 mt-4 left-1/2 transform -translate-x-1/2 flex gap-4 z-20">
        <button
          onClick={goToNext}
          className="bg-tertiary  p-3  rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4 md:size-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <button
          onClick={goToPrev}
          className="bg-tertiary p-3 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4 md:size-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 mp-3 flex gap-4 z-20">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`md:size-2 size-1 rounded-full transition-all ${
              index === activeIndex ? "bg-primary scale-125" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default SlideCards;
