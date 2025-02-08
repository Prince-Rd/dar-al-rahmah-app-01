import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// Import your projects array (or fetch it from an API)
import { projects } from "../../components/MasonaryGrid"; // Adjust the import path as needed
import { img } from "framer-motion/client";

function ProjectDetailPage() {
  // Get the projectId from the URL
  const { projectId } = useParams();

  // Find the project by ID
  const project = projects.find((p) => p.id === parseInt(projectId));

  // If project not found, show an error message
  if (!project) {
    return (
      <div className="p-8 text-center text-2xl font-bold">
        المشروع غير موجود
      </div>
    );
  }

  return (
    <div className=" bg-accent font-camel">
      <Header />

      {/* Section Header */}
      <div className="flex justify-between relative pt-32">
        {/* Left Side with ServicesHeader1 and h2 */}
        {/* <div className="w-[30%] mt-4 relative">
          <img
            src="/src/assets/img/ProjectHeaderP1.svg"
            alt="Services Header 1"
          />
        
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/2 text-4xl font-bold text-tertiary mb-6">
            صور المشروع
          </h1>
        </div> */}

        {/* path */}
        <div className="mt-12 mx-4 md:m-base-m font-camel text-nowrap text-xs md:text-sm text-gray-600 font-">
          أعمالنـا / <span>{project.title}</span>
        </div>

        {/* Right Side with ServicesHeader2 */}
        <div className="w-1/2 md:w-64 mt-4">
          <img
            src="/src/assets/img/ProjectSubHeader1.svg"
            alt="Services Header 2"
          />
        </div>
      </div>

      {/* Projects Header Container */}
      <div className=" text-center pt-10">
        {/* Background Image */}
        <div className="">
          <img
            src="/src/assets/img/DetailProjectsHeaderContainer.png"
            alt="container"
            className="object-cover w-full hidden md:flex z-0"
          />
          <img
            src="/src/assets/img/DetailProjectsHeaderContainer-mobile.png"
            alt="container"
            className="object-cover w-full flex md:hidden z-0"
          />
        </div>

        {/* Content Container*/}
        <div className="absolute md:top-60  top-60 transform -translate-y- h-  w-full    ">
          <div className="w-1/2">
            {/* Text Overlay */}
            <h1 className="absolute top-3 w-16  text-wrap md:w-[30%] right-12 md:right-20 z-10 text-sm md:text-5xl font-bold text-tertiary transform translate-x-[-10%] translate-y-[30%]">
              {project.title}
            </h1>

            {/* Icons Overlay */}
            <div className="absolute top-8  md:top-12 w-1/2 right-[39%] md:right-[39%] z-10 md:text-1xl text-xs font-bold text-tertiary transform translate-x-[-10%] translate-y-[30%]">
              <div className="flex md:gap-3 gap-2">
                {/* <img src="/src/assets/img/Arrowicon.svg" alt="" />
                  <img src="/src/assets/img/PlusIcon.svg" alt="" /> */}

                {project.categories.map((category, index) => (
                  <span
                    key={index}
                    className="md:px-4 md:py-2 py-1   px-2 border-2 border-primary font-bold text-gray-700 rounded-lg"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Description */}

            <div className="absolute top-40 md:top-48  right-10 md:right-16 md:w-[65%] w-[80%] text-justify text-sm md:text-lg text-wrap z-10 text-gray-700">
              <div className="flex flex-col h-full justify-between gap-1 md:gap-4">
                {/* Description */}
                <p className="mb-4 text-xs md:text-lg lg:mb-auto">{project.fullDescription}</p>

                {/* Budget */}
                <div className="flex items-center gap-5 mt-">
                  <p className="text-lg md:text-xl">قيمة المشاريع</p>
                  <span className="text-2xl md:text-5xl font-extrabold">
                    {project.budget}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/2">
            {/* Partner Logo */}
            <div className="absolute flex  w-1/4 items-center justify-center  top-36 md:top-40 w- md:w-[44%] right-8 md:right-[65%] md:left-   md:pl-20 transform -translate-y-10 z-10">
              {project.partner && (
                <img
                  src="/src/assets/img/Partner1.svg"
                  alt="icon"
                  className="w-"
                />
              )}
            </div>
          </div>


        </div>
      </div>

      {/* Section Header */}
      <div className="flex justify-between relative pt-32">
        {/* Left Side with ServicesHeader1 and h2 */}
        <div className="md:w-[30%]    w-1/3 mt-4 relative">
          <img
            src="/src/assets/img/ProjectHeaderP1.svg"
            alt="Services Header 1"
            className="hidden md:flex"
          />
          {/* Absolute positioned h2 */}
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-10 md:-translate-x-1/4 -translate-y-1/2 text-nowrap text-md md:text-4xl font-bold text-tertiary mb-6">
            صور المشروع
          </h1>
        </div>

        {/* Right Side with ServicesHeader2 */}
        <div className="md:w-96 w-1/3   mt-4">
          <img
            src="/src/assets/img/ProjectHeaderP2.svg"
            alt="Services Header 2"
          />
        </div>
      </div>

      {/* Header-Project info */}

      {/*Imaages Content */}

      <div className="mx-4 md:mx-8 py-9">
        <div className="grid grid-cols-1  lg:grid-cols-3 lg:grid-rows-2 gap-4 lg:h-[600px]">
          {/* Mobile: Main image first */}
          <div className="lg:hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>

          {/* Left Column - Hidden on mobile */}
          <div className="hidden lg:flex lg:flex-col gap-4">
            {project.detailImages.slice(0, 2).map((img, index) => (
              <div key={`left-${index}`} className="h-full">
                <img
                  src={img}
                  alt={`${project.title} - Detail ${index + 1}`}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            ))}
          </div>

          {/* Main Image - Desktop */}
          <div className="hidden lg:block col-span-1 row-span-2">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Right Column - Hidden on mobile */}
          <div className="hidden lg:flex lg:flex-col gap-4">
            {project.detailImages.slice(2, 4).map((img, index) => (
              <div key={`right-${index}`} className="h-full">
                <img
                  src={img}
                  alt={`${project.title} - Detail ${index + 3}`}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            ))}
          </div>

          {/* Mobile: Detail images */}
          <div className="lg:hidden grid grid-cols-2 gap-4">
            {project.detailImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${project.title} - Detail ${index + 1}`}
                className="w-full h-64 object-cover rounded-xl"
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProjectDetailPage;
