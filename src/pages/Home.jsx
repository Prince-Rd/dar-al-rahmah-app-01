import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import { div } from "framer-motion/client";
import ServicesSection from "../components/ServicesSection";
import MasonaryGrid from "../components/MasonaryGrid";
import AutoPlayLogoCarousel from "../components/AutoPlayLogoCarousel";
import ProjectMainHeader from "../components/ProjectMainHeader";

function Home() {
  return (
    <div className=" bg-accent m">
      <Header />
      <div className="bg-accent w- h-screen">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-start overflow-">
          {/* Background Image */}
          <div className="absolute  inset-0 z-0">
            <img
              src="/src/assets/img/Mask.png" // Update the path to your image
              alt="mask"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Icons Desktop */}
          <div className="hidden md:flex absolute inset-0 top-28  overflow-hidden  z-10">
            {/* Icon 1 */}
            <div className="absolute top-[20%] left-1/3 mx-auto  translate-x-0  right-3/4  w-96 w animate-float animation-delay-3000">
              <img src="/src/assets/img/Frame-1.svg" alt="Frame1" />
            </div>

            {/* Icon 2 */}
            <div className="absolute top-[10%] right-[45%] animate-floatDiagonal w-60 animation-delay-4000">
              <img src="/src/assets/img/Frame-2.svg" alt="Frame2" />
            </div>

            {/* Icon 3 */}
            <div className="absolute bottom-[30%] right-[60%] animate-floatDiagonal animation-delay-4000">
              <img src="/src/assets/img/Frame-3.svg" alt="Frame3" />
            </div>
            {/* Icon 4 */}
            <div className="absolute bottom-[20%] left-[65%] animate-floatDiagonal animation-delay-4000">
              <img src="/src/assets/img/Frame-4.svg" alt="Frame4" />
            </div>
            {/* Icon 5 */}
            <div className="absolute bottom-[20%] right-[-1%] animate-floatDiagonal animation-delay-4000">
              <img src="/src/assets/img/Frame-5.svg" alt="Frame5" />
            </div>
            {/* Icon 6 */}
            <div className="absolute top-[30%] right-[60%] animate-floatDiagonal animation-delay-4000">
              <img src="/src/assets/img/Frame-6.svg" alt="Frame6" />
            </div>
            {/* Icon 7 */}
            <div className="absolute top-[30%] right-[10%] animate-floatDiagonal animation-delay-4000">
              <img src="/src/assets/img/Frame-7.svg" alt="Frame7" />
            </div>
            {/* Icon 8 */}
            <div className="absolute top-[40%] right-[30%] animate-floatDiagonal animation-delay-2000">
              <img src="/src/assets/img/Frame-8.svg" alt="Frame8" />
            </div>
          </div>

          {/* Floating Icons mobile */}
          <div className="flex md:hidden absolute inset-0 top-28 z-10  overflow-hidden">
            {/* Icon 1 */}
            <div className="absolute top-[20%] left-0 right-0 z-20 flex justify-center items-center w-full animate-float animation-delay-3000">
              <img
                src="/src/assets/img/Frame-1.svg"
                alt="Frame1"
                className="w-44"
              />
            </div>

            {/* Icon 2 */}
            <div className="absolute top-[90%] right-[91%] animate-floatDiagonal w-14 animation-delay-4000">
              <img src="/src/assets/img/Frame-2.svg" alt="Frame2" />
            </div>

            {/* Icon 3 */}
            <div className="absolute top-[4%] right animate-floatDiagonal flex justify-center w-full animation-delay-10000">
              <img
                src="/src/assets/img/Frame-3.svg"
                alt="Frame3"
                className="w-8"
              />
            </div>

            {/* Icon 4 */}
            <div className="absolute bottom-[40%] left-[5%] animate-floatDiagonal animation-delay-4000">
              <img
                src="/src/assets/img/Frame-4.svg"
                alt="Frame4"
                className="w-10"
              />
            </div>

            {/* Icon 5 */}
            <div className="absolute top-[8%] right-[-10%] animate-floatDiagonal animation-delay-4000">
              <img src="/src/assets/img/Frame-5.svg" alt="Frame5" />
            </div>

            {/* Icon 6 */}
            <div className="absolute top-[15%] left-[4%] animate-floatDiagonal animation-delay-10000">
              <img
                src="/src/assets/img/Frame-6.svg"
                alt="Frame6"
                className="w-12"
              />
            </div>

            {/* Icon 7 */}
            <div className="absolute top-[70%] right-0 animate- animation-delay-4000">
              {/* Image */}
              <img
                src="/src/assets/img/Frame7-mobile.svg"
                alt="Frame7"
                className="relative py-1 z-10"
              />

              {/* Blurred Layer */}
              <div className="absolute inset-0 w-16  h-full bg-white/5 backdrop-blur-sm z-20 "></div>
            </div>

            {/* Icon 8 */}
            <div className="absolute top-[10%] right-[14%] animate-floatDiagonal animation-delay-10000">
              <img
                src="/src/assets/img/Frame-8.svg"
                alt="Frame8"
                className="w-7"
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="relative z-20 text-center top-32  md:text-right font-camel mx-auto  md:mr-16 md:max-w-xl">
            <h1 className="text-xl md:text-6xl font-bold  text-secondary">
              دار الرحــمــة لـلاستشـــــارات
            </h1>
            <h1 className="text-2xl md:text-7xl mb-5 tracking-normal font-bold  text-secondary">
              D. R. Consultancy
            </h1>

            <img
              src="/src/assets/img/qutation1.svg"
              alt="qutation"
              className="h-3 md:h-8"
            />

            <p className="text-sm md:text-4xl font-semibold font-camel text-primary">
              الـدقـــــة تصـــنــع الجــــــودة، والخـــبــــــرة{" "}
              <span className="text-secondary">فـــــــارِق</span>
            </p>
            <img
              src="/src/assets/img/qutation2.svg"
              alt="qutation"
              className="h-3 md:h-8 mr-[97%]"
            />
            <button className="mt-8 flex text-center mx-auto md:mx-0 text-sm  items-center justify-center gap-2 px-4 my-auto py-1 border border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-accent transition-colors">
              قراءة المزيد{" "}
              <span>
                <img src="/src/assets/img/Arrow.svg" alt="" />
              </span>
            </button>
          </div>
        </section>

        {/* Services Section */}
        <ServicesSection />

        {/* projects Section */}
        <div className="mt-">
          <ProjectMainHeader />
        </div>
        {/* Galary */}
        <div className=" px- -20">
          <MasonaryGrid limit={8} isProjectPage={false} showMoreButton />
        </div>

        {/* Logo Carousel section */}
        <section>
          <div className="mt-">
            <AutoPlayLogoCarousel />
          </div>
        </section>

        {/* footer */}
        <Footer />
      </div>
    </div>
  );
}

export default Home;
