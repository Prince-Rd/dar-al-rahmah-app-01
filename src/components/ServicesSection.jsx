import React, { useState } from "react";

const tabs = [
  { id: "urban-planning", label: "التخطيط الحضري" },
  { id: "qualitative-options", label: "الخبرات النوعية" },
  { id: "architectural-design", label: "التصميم المعماري" },
  { id: "engineering-management", label: "الإدارة الهندسية" },
];

const serviceData = {
  "urban-planning": {
    title: "التخطيــط الحضري",
    description:
      " هذا نص تمثيلي يستخدم لتعبئة الفراغات في التعريف عن الخدمة. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التعريف عن الخدمة. هذا نص تمثيلي يستخدم لتمثيل الفقرات في التعريف عن الخدمة.",
    image: "/src/assets/img/urban-planning.png",
    effect: "/src/assets/img/Urben-Ellipse.svg",
    subServices: [
      {
        title: "لتوجيه الاستراتيجي للمناطق",
        icon: "/src/assets/img/ServiceIcon1.svg",
        subSubServices: [
          "التخطيط الاستراتيجي",
          "إدارة المناطق الحضرية",
          "تطوير البنية التحتية",
          "التخطيط الاستراتيجي",
          "إدارة المناطق الحضرية",
          "تطوير البنية التحتية",
        ],
      },
      {
        title: "تأسيس المراصد الحضرية",
        icon: "/src/assets/img/ServiceIcon2.svg",
        subSubServices: [
          "أنظمة المراقبة الحضرية",
          "تحليل البيانات المكانية",
          "تقارير الأداء الحضري",
          "أنظمة المراقبة الحضرية",
          "تحليل البيانات المكانية",
          "تقارير الأداء الحضري",
        ],
      },
    ],
    hoverEffect: "/src/assets/img/Urban-Effect.svg",
  },
  "qualitative-options": {
    title: "الخبرات النوعية",
    description: "هذا نص تمثيلي يستخدم لتمثيل الفقرات في التعريف عن الخدمة.",
    image: "/src/assets/img/qualitative-options.png",
    effect: "/src/assets/img/Qualitative-Ellipse.svg",
    subServices: [
      {
        title: "تحليل البيانات النوعية",
        icon: "/src/assets/img/ServiceIcon1.svg",
        subSubServices: [
          "أنظمة المراقبة الحضرية",
          "تحليل البيانات المكانية",
          "تقارير الأداء الحضري",
          "أنظمة المراقبة الحضرية",
          "تحليل البيانات المكانية",
          "تقارير الأداء الحضري",
        ],
      },
      {
        title: "تطوير استراتيجيات مبتكرة",
        icon: "/src/assets/img/ServiceIcon1.svg",
        subSubServices: [
          "أنظمة المراقبة الحضرية",
          "تحليل البيانات المكانية",
          "تقارير الأداء الحضري",
          "أنظمة المراقبة الحضرية",
          "تحليل البيانات المكانية",
          "تقارير الأداء الحضري",
        ],
      },
      {
        title: "تطوير استراتيجيات مبتكرة",
        icon: "/src/assets/img/ServiceIcon1.svg",
        subSubServices: [
          "أنظمة المراقبة الحضرية",
          "تحليل البيانات المكانية",
          "تقارير الأداء الحضري",
          "أنظمة المراقبة الحضرية",
          "تحليل البيانات المكانية",
          "تقارير الأداء الحضري",
        ],
      },
    ],
  },
  "architectural-design": {
    title: "التصميم المعماري",
    description: "هذا نص تمثيلي يستخدم لتمثيل الفقرات في التعريف عن الخدمة.",
    image: "/src/assets/img/architectural-design.png",
    effect: "/src/assets/img/Architectural-Ellipse.svg",
    subServices: [
      {
        title: "تصميم المباني",
        icon: "/src/assets/img/ServiceIcon1.svg",
        subSubServices: [
          "أنظمة المراقبة الحضرية",
          "تحليل البيانات المكانية",
          "تقارير الأداء الحضري",
          "أنظمة المراقبة الحضرية",
          "تحليل البيانات المكانية",
          "تقارير الأداء الحضري",
        ],
      },
    ],
  },

  "engineering-management": {
    title: "الإدارة الهندسية",
    description: "هذا نص تمثيلي يستخدم لتمثيل الفقرات في التعريف عن الخدمة.",
    image: "/src/assets/img/engineering-management.png",
    effect: "/src/assets/img/Engeneering-Ellipse.svg",
    subServices: [
      {
        title: "إدارة المشاريع",
        icon: "/src/assets/img/ServiceIcon1.svg",
        subSubServices: [
          "أنظمة المراقبة الحضرية",
          "تحليل البيانات المكانية",
          "تقارير الأداء الحضري",
          "أنظمة المراقبة الحضرية",
          "تحليل البيانات المكانية",
          "تقارير الأداء الحضري",
        ],
      },
      {
        title: "تحسين العمليات الهندسية",
        icon: "/src/assets/img/ServiceIcon1.svg",
        subSubServices: [
          "أنظمة المراقبة الحضرية",
          "تحليل البيانات المكانية",
          "تقارير الأداء الحضري",
          "أنظمة المراقبة الحضرية",
          "تحليل البيانات المكانية",
          "تقارير الأداء الحضري",
        ],
      },
      {
        title: "تحسين العمليات الهندسية",
        icon: "/src/assets/img/ServiceIcon1.svg",
        subSubServices: [
          "أنظمة المراقبة الحضرية",
          "تحليل البيانات المكانية",
          "تقارير الأداء الحضري",
          "أنظمة المراقبة الحضرية",
          "تحليل البيانات المكانية",
          "تقارير الأداء الحضري",
        ],
      },
    ],
  },
};

function ServicesSection() {
  const [activeTab, setActiveTab] = useState("urban-planning");
  const [hoveredSubService, setHoveredSubService] = useState(null);

  // check if the last tab is selected.

  const isLastTabSelected = activeTab === tabs[tabs.length - 1].id;

  return (
    <section
      className={`h-fit flex flex-col justify-between font-camel ${
        isLastTabSelected ? "bg-primaryBurnt" : "bg-accent"
      }`}
    >
      {/* Section Header */}
      <div className="flex mt-5 md:mt-12 mb- justify-between relative">
        {/* Left Side with ServicesHeader1 and h2 */}
        <div className="w-1/3 md:mt-6 relative">
          <img
            src="/src/assets/img/ServicesHeader1.svg"
            alt="Services Header 1"
          />
          {/* Absolute positioned h2 */}
          <h1 className="absolute  top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/2 text-2xl md:text-6xl font-bold text-tertiary mb-6">
            خدماتنـــا
          </h1>
        </div>

        {/* Right Side with ServicesHeader2 */}
        <div className="w-1/3">
          <img
            src="/src/assets/img/ServicesHeader2.svg"
            alt="Services Header 2"
          />
        </div>
      </div>

      <div className="py-8 px-8  md:m-base-m flex md:items-center flex-col lg:flex-row gap-">
        {/* Sidebar Tabs */}
        <aside className="order-1 flex justify-center md:justify-normal lg:order-1 w-full lg:w-1/4 pt-32 md:pt-0 relative">
          {/* Line (SVG) */}
          <img
            src="/src/assets/img/Line.svg"
            alt="line"
            className="absolute right-[0.4rem] top-2 hidden lg:flex h-[95%] w- z-10"
          />
          {/* Line (SVG) mobile */}
          <img
            src="/src/assets/img/HorozontalLine.svg"
            alt="line"
            className="absolute right-[0 top-[27%]  md:-mt-[2.3rem]  lg:hidden h-full w- z-10"
          />

          {/* Menu */}
          <ul className="lg:space-y-20  gap-9  flex   w-fit items-center justify-center   md:space-x-4 lg:block px-">
            {tabs.map((tab) => (
              <li
                key={tab.id}
                className={`cursor-pointer  md:text-base  flex flex-col items-center gap-1 lg:flex-row lg:gap-2 text-xs gap-y-4 lg:gap-y-0 text-nowrap lg:text-lg font-semibold transition-all ${
                  activeTab === tab.id
                    ? "text-secondary font-bold"
                    : isLastTabSelected
                    ? "text-accent"
                    : "text-gray-700"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {/* Circle */}
                <span
                  className={`size-4 rounded-full relative z-10 ${
                    activeTab === tab.id
                      ? "bg-secondary before:content-[''] before:absolute before:size-2 before:bg-gray-500 before:rounded-full before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2"
                      : isLastTabSelected
                      ? "bg-gray-400"
                      : "bg-primary"
                  }`}
                ></span>
                {/* Label */}
                {tab.label}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Image */}
        <div className="order-2 lg:order-3 w-full lg:w-1/4 grid place-items-center">
          <div className="relative">
            <img
              src={serviceData[activeTab].image}
              alt={serviceData[activeTab].title}
              className="w-80 animate-float animation-delay-3000"
            />
            <img
              src={serviceData[activeTab].effect}
              alt={serviceData[activeTab].title}
              className="w-80 top-0 left-0 animate-float animation-delay-3000"
            />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="order-3 md:order-2 w-full  lg:w-1/2 flex flex-col justify-center items-start pt-14 md:mt-0 gap-8 md:gap-12 md:">
          <h3 className="md:text-5xl text-2xl font-bold text-[#9A6A38]">
            {serviceData[activeTab].title}
          </h3>
          <p
            className={`text-justify my-8 mb-4 w-full md:text-base text-sm font-semibold ${
              isLastTabSelected ? "text-accent" : "text-gray-600"
            }`}
          >
            {serviceData[activeTab].description}
          </p>

          {/* Sub-services */}
          <div className="w-full md:itmen flex items-start flex-col md:flex-row md:flex-wrap md:items-end md:justify-start gap-4 my-6">
            {serviceData[activeTab].subServices.map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredSubService(index)}
                onMouseLeave={() => setHoveredSubService(null)}
                className="relative group bg-white shadow-md p-4 md:p-6 border w-full md:w-1/3 lg:w-fit rounded-xl flex flex-col justify-center hover:cursor-pointer text-center items-center gap-2"
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="size-10 md:size-14"
                />
                {/* Fix for service.title overflow */}
                <p className="text-base md:text-lg text-nowrap font-medium whitespace-normal break-words min-w-0 w-full">
                  {service.title}
                </p>

                {/* Sub-sub-services Dropdown */}
                {hoveredSubService === index && (
                  <div className="absolute md:-top-32 -top-28  -right-4 w-full transform translate-y-full z-10 min-w-max">
                    <div className="md:mt-5 mt-0 bg- p-4 grid grid-cols-2 md:grid-cols-3 gap-2">
                      {service.subSubServices?.map((subSub, subIndex) => (
                        <div
                          key={subIndex}
                          className="bg-white p-4 md:p-8 w-auto text-sm md:text-lg text-gray-700 rounded-xl shadow-lg border border-gray-200 transition-colors cursor-pointer hover:bg-gray-100 whitespace-nowrap"
                        >
                          {subSub}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section Footer */}
      <div className="flex justify-between mt-12 md:mt-0 ">
        {/* Right Side with ServicesFooter2 */}
        <div className="md:w-1/3  w-24 m-base-m b-20">
          <img
            src="/src/assets/img/ServicesFooter2.svg"
            alt="Services Header 2"
          />
        </div>
        {/* Left Side with ServicesFooter1 and h2 */}
        <div className="w-1/3 mt-4 ">
          <img
            src="/src/assets/img/ServicesFooter1.svg"
            alt="Services Header 1"
          />
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
