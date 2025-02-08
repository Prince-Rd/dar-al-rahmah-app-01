import React from 'react';

const logos = [
  "/src/assets/img/logos/logo1.svg",
  "/src/assets/img/logos/logo2.svg",
  "/src/assets/img/logos/logo3.svg",
  "/src/assets/img/logos/logo4.svg",
  "/src/assets/img/logos/logo5.svg",
  "/src/assets/img/logos/logo6.svg",
 
];

function AutoPlayLogoCarousel() {
  return (
    <div className="bg-accent py-12 font-camel">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-xl md:text-3xl font-extrabold text-tertiary">شراكــــــات مـثـمـــرة و أكــثــــر !</h2>
        {/* <p className="text-gray-600 mt-2">نحن فخورون بالتعاون مع أفضل العلامات التجارية</p> */}
      </div>

      {/* Logo Carousel */}
      <div className="relative overflow-hidden">
        {/* Scrolling Logos */}
        <div className="flex animate-scroll">
          {/* Double the logos for seamless looping */}
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-shrink-0 px-8">
              <img 
                src={logo} 
                alt={`Partner Logo ${index + 1}`} 
                className="h-8 md:h-12 object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent" />
      </div>
    </div>
  );
}

export default AutoPlayLogoCarousel;