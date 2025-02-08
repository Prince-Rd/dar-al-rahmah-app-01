import React, { useState } from "react";
import MasonaryGrid from "./MasonaryGrid";

function UrbenFoundationSection() {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("تأسيس المراصد الحضرية");

  // Data for each tab's content
  const tabContent = {
    "تأسيس المراصد الحضرية": {
      title: "تأسيس المراصد الحضرية",
      description:
        "إنشاء وتشغيل المراصد الحضرية لتحسين إدارة المدينة / توفير وربط البيانات",
    },
    "تطوير التوجيه الاستراتيجي للمناطق": {
      title: "تطوير التوجيه الاستراتيجي للمناطق",
      description:
        "تطوير استراتيجيات لتوجيه المناطق الحضرية نحو التنمية المستدامة",
    },
  };

  // Handle tab click
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="bg-accent h-fit font-camel">
      {/* Section Header Desktop */}
      <div className="hidden md:flex items-center justify-between pt-20 w-full">
        {/* Left Side icon with ServicesHeader1 and h2 */}
        <div className="hidden md:flex">
          <img
            src="/src/assets/img/UrbenFoundationSectionH-Icon-1.svg"
            alt="Services Header 1"
          />
        </div>

        {/* Tabs */}
        <div className="flex md:flex-row  gap-5 items-center  md:py-2 md:px-3 rounded-2xl bg-gray-100">
          {Object.keys(tabContent).map((tabName) => (
            <p
              key={tabName}
              className={`px-3 py-4 rounded-2xl text-nowrap cursor-pointer ${
                activeTab === tabName
                  ? "text-primaryBurnt  text-nowrap font-bold bg-white"
                  : "text-gray-300"
              }`}
              onClick={() => handleTabClick(tabName)}
            >
              {tabName}
            </p>
          ))}
        </div>

        {/* Right Side icon with ServicesHeader2 */}
        <div className="w">
          <img
            src="/src/assets/img/UrbenFoundationSectionH-Icon-2.svg"
            alt="Services Header 2"
          />
        </div>
      </div>
      {/* Section Header mobile */}
      <div className="flex-col md:hidden items-center justify-between pt-20 w-full">
        {/* Tabs */}
        <div className="flex md:flex-row  gap items-center mx-auto md:m-base-m  w-fit  md:py-2 md:px-3 rounded-2xl bg-gray-100">
          {Object.keys(tabContent).map((tabName) => (
            <p
              key={tabName}
              className={`px-3 py-4  rounded-2xl cursor-pointer ${
                activeTab === tabName
                  ? "text-primaryBurnt w-1/2 text-center m-2 text-nowrap text-xs font-bold bg-white"
                  : "text-gray-300 w-1/2 text-center m-2 text-nowrap text-xs"
              }`}
              onClick={() => handleTabClick(tabName)}
            >
              {tabName}
            </p>
          ))}
        </div>

        <div className="flex justify-between pt-4">
          {/* Left Side icon with ServicesHeader1 and h2 */}
          <div className="w-0 ">
            <img
              src="/src/assets/img/UrbenFoundationSectionH-Icon-1.svg"
              alt="Services Header 1"
            />
          </div>

          {/* Right Side icon with ServicesHeader2 */}
          <div className="w-1/3">
            <img
              src="/src/assets/img/UrbenFoundationSectionH-Icon-2.svg"
              alt="Services Header 2"
            />
          </div>
        </div>
      </div>

      {/* Section Content */}
      <div className="md:m-base-m mx-5">
        <div className="flex items-center justify-between gap-12 pt-">
          {/* Content */}

          <div className="pt   w-1/ md:w-fit">
            <h1 className="text-tertiary font-extrabold text-lg md:text-5xl mb-6 mt-">
              {tabContent[activeTab].title}
            </h1>
            <p className="font-light  text-gray-500 md:justify- md:text- text-sm md:text-3xl">
              {tabContent[activeTab].description}
            </p>
          </div>

          {/* Image */}
          <div className=" w-[120%] md:w-fit felx items-center justify-center content-center text p-0 m-0 my-auto py-10 md:py-32">
            <img
              src="/src/assets/img/UrbenFoundationSection-img.png"
              alt=""
              className="md:w-[25rem]"
            />
          </div>
        </div>

        {/* Cards Group 1 */}
        <div className="flex items-stretch justify-center w-full mt-6 gap-2 md:gap-4">
          {/* Card 1 */}
          <div className="p-2 md:p-10 rounded-lg shadow-md w-fit md:w-1/2 h-full py-8 text-nowrap md:py-14 bg-white text-tertiary font-bold text-xs md:text-xl text-center flex items-center justify-center">
            <h1>تحليل الوضع الراهن</h1>
          </div>
          {/* Card 2 */}
          <div className="p-2 md:p-10 rounded-lg shadow-md w-fit md:w-full h-full py-8 text-nowrap md:py-14 bg-white text-center text-tertiary font-bold text-xs md:text-xl flex items-center justify-center">
            <h1>صناعة وقياس المؤشرات</h1>
          </div>
          {/* Card 3 */}
          <div className="p-2 md:p-10 rounded-lg shadow-md w-fit md:w-1/2 h-full py-8 text-nowrap md:py-14 bg-white text-center font-bold text-xs md:text-xl flex items-center justify-center">
            <h1>المسح الاجتماعي</h1>
          </div>
        </div>

        {/* Cards Group 2 */}
        <div className="flex items-stretch justify-center w-full md:mt- mt-2 gap-2 md:gap-4">
          {/* Card 1 */}
          <div className="p-2 md:p-10 rounded-lg shadow-md w-fit md:w-full h-full py-8 text-nowrap md:py-14 bg-white text-tertiary font-bold text-xs md:text-xl text-center flex items-center justify-center">
            <h1>دراسة توجهات المنطقة</h1>
          </div>
          {/* Card 2 */}
          <div className="p-2 md:p-10 rounded-lg shadow-md w-fit md:w-1/2 h-full py-8 text-nowrap md:py-14 bg-white text-tertiary font-bold text-xs md:text-xl text-center flex items-center justify-center">
            <h1>دعم متخذ القرار</h1>
          </div>
          {/* Card 3 */}
          <div className="p-2 md:p-10 rounded-lg shadow-md w-fit md:w-full h-full py-8 text-nowrap md:py-14 bg-white text-tertiary font-bold text-xs md:text-xl text-center flex items-center justify-center">
            <h1>إعداد قواعد البيانات</h1>
          </div>
        </div>
      </div>

      {/* Our Projects Section */}
      <div>
        {/* Section Header Desktop */}
        <div className="hidden  md:flex justify-between relative pt-32">
          {/* Left Side with ServicesHeader1 and h2 */}
          <div className="w mt-4 relative">
            <img
              src="/src/assets/img/ProjectWaletHeader1.svg"
              alt="Services Header 1"
            />
            {/* Absolute positioned h2 */}
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/2 text-4xl font-bold text-tertiary mb-6">
              محفظة الأعمال
            </h1>
          </div>

          {/* Right Side with ServicesHeader2 */}
          <div>
            <img
              src="/src/assets/img/ProjectWaletHeader2.svg"
              alt="Services Header 2"
            />
          </div>
        </div>

        {/* Section Header Mobile */}
        <div className="md:hidden  flex justify-between relative pt-32">
          {/* Left Side with ServicesHeader1 and h2 */}
          <div className="w mt-4 relative">
            {/* <img
              src="/src/assets/img/ProjectWaletHeader1.svg"
              alt="Services Header 1"
              className=""
            /> */}
            {/* Absolute positioned h2 */}
            <h1 className="absolute top-1/2 text-nowrap -left- -translate-x-1/4 -translate-y-1/2 text-2xl font-bold text-tertiary mb-6">
              محفظة الأعمال
            </h1>
          </div>

          {/* Right Side with ServicesHeader2 */}
          <div className="w-1/3">
            <img
              src="/src/assets/img/ProjectWaletHeader2.svg"
              alt="Services Header 2"
            />
          </div>
        </div>

        {/* Grid */}
        <div className=" mx-4 flex gap-4 py-5 pb-20">
          {/* Desktop Grid */}
          <div className="hidden md:flex">
            <MasonaryGrid
              selectedProjectIds={[8, 7, 4]}
              isProjectPage={false}
              limit={3}
              showMoreButton
            />
          </div>
          {/* Mobile Grid */}
          <div className="flex md:hidden">
            <MasonaryGrid
              selectedProjectIds={[8, 7, 4, 3]}
              isProjectPage={false}
              limit={4}
              showMoreButton
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UrbenFoundationSection;
