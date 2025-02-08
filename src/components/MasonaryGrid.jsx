import React from "react";
import { useNavigate } from "react-router-dom";

export const projects = [
  {
    id: 1,
    image: "/src/assets/img/galary/1.jpg",
    title: " فندق دار القصبي",
    description: " المدينة المنورة",
    date: "1300 م٢",
    categories: ["تصميم واشراف", "التخطيط الحضضري"],

    // Full project details
    detailImages: [
      "/src/assets/img/galary/1.jpg",
      "/src/assets/img/galary/1.jpg",
      "/src/assets/img/galary/1.jpg",
      "/src/assets/img/galary/1.jpg",
     
    ],
    fullDescription:
    "هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع.",
    location: "المدينة المنورة",
    area: "1300 م٢",
    completionDate: "2023",

    partner: "/src/assets/img/Partner1.png",
    budget:"+50",
  },
  {
    id: 2,
    image: "/src/assets/img/galary/4.png",
    title: " جامع العباس",
    description: "    مكة المكرمة",
    date: "1300 م٢",
    categories: ["تصميم مسجد", "التخطيط الحضضري"],

      // Full project details
      detailImages: [
        "/src/assets/img/galary/4.png",
        "/src/assets/img/galary/4.png",
        "/src/assets/img/galary/4.png",
        "/src/assets/img/galary/4.png",
       
      ],
      fullDescription:
    "هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع.",
      location: "المدينة المنورة",
      area: "1300 م٢",
      completionDate: "2023",
      partner: "/src/assets/img/Partner1.png",
      budget:"+50",
  },
  {
    id: 3,
    image: "/src/assets/img/galary/2.png",
    title: " فندق الصاح",
    description: " المدينة المنورة",
    date: "1300 م٢",
    categories: ["تصميم واشراف", "التخطيط الحضضري"],

      // Full project details
      detailImages: [
        "/src/assets/img/galary/2.png",
        "/src/assets/img/galary/2.png",
        "/src/assets/img/galary/2.png",
        "/src/assets/img/galary/2.png",
       
      ],
      fullDescription:
    "هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع.",
      location: "المدينة المنورة",
      area: "1300 م٢",
      completionDate: "2023",
      partner: "/src/assets/img/Partner1.png",
  },
  {
    id: 4,
    image: "/src/assets/img/galary/5.png",
    title: " مشروع وادي عرنه",
    description: "    مكة المكرمة",
    date: "1300 م٢",
    categories: [" إعادة المشاريع التأهيلية والتطويرية", "التخطيط الحضضري"],

      // Full project details
      detailImages: [
        "/src/assets/img/galary/5.png",
        "/src/assets/img/galary/5.png",
        "/src/assets/img/galary/5.png",
        "/src/assets/img/galary/5.png",
       
      ],
      fullDescription:
    "هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع.",
      location: "المدينة المنورة",
      area: "1300 م٢",
      completionDate: "2023",
      partner: "/src/assets/img/Partner1.png",
      budget:"+50",
  },
  {
    id: 5,
    image: "/src/assets/img/galary/7.png",
    title: " فيلا سكنية",
    description: "    مكة المكرمة",
    date: "1300 م٢",
    categories: ["تصميم ", "التخطيط الحضضري"],

      // Full project details
      detailImages: [
        "/src/assets/img/galary/7.png",
        "/src/assets/img/galary/7.png",
        "/src/assets/img/galary/7.png",
        "/src/assets/img/galary/7.png",
       
      ],
      fullDescription:
    "هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع.",
      location: "المدينة المنورة",
      area: "1300 م٢",
      completionDate: "2023",
      partner: "/src/assets/img/Partner1.png",
      budget:"+50",
  },
  {
    id: 6,
    image: "/src/assets/img/galary/3.png",
    title: " مسجد الجموم",
    description: "   الجموم",
    date: "1300 م٢",
    categories: ["تصميم مسجد", "التخطيط الحضضري"],

      // Full project details
      detailImages: [
        "/src/assets/img/galary/3.png",
        "/src/assets/img/galary/3.png",
        "/src/assets/img/galary/3.png",
        "/src/assets/img/galary/3.png",
       
      ],
      fullDescription:
    "هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع.",
      location: "المدينة المنورة",
      area: "1300 م٢",
      completionDate: "2023",
      partner: "/src/assets/img/Partner1.png",
      budget:"+50",
  },
  {
    id: 7,
    image: "/src/assets/img/galary/6.png",
    title: " مسجد الصالحين",
    description: "    مكة المكرمة",
    date: "1300 م٢",
    categories: ["تصميم مسجد", "التخطيط الحضضري"],

      // Full project details
      detailImages: [
        "/src/assets/img/galary/6.png",
        "/src/assets/img/galary/6.png",
        "/src/assets/img/galary/6.png",
        "/src/assets/img/galary/6.png",
       
      ],
      fullDescription:
    "هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع.",
      location: "المدينة المنورة",
      area: "1300 م٢",
      completionDate: "2023",
      partner: "/src/assets/img/Partner1.png",
      budget:"+50",
  },
  {
    id: 8,
    image: "/src/assets/img/galary/8.png",
    title: " ضاحية الورود",
    description: " المدينة المنورة",
    date: "1300 م٢",
    categories: [" تأسيس المراصد الحضرية", "التخطيط الحضضري"],

      // Full project details
      detailImages: [
        "/src/assets/img/galary/8.png",
        "/src/assets/img/galary/8.png",
        "/src/assets/img/galary/8.png",
        "/src/assets/img/galary/8.png",
       
      ],
      fullDescription:
    "هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع.",
      location: "المدينة المنورة",
      area: "1300 م٢",
      completionDate: "2023",
      partner: "/src/assets/img/Partner1.png",
      budget:"+50",
  },
  {
    id: 9,
    image: "/src/assets/img/galary/9.png",
    title: "  مبنى الامارة بمحافظة الجموم",
    description: " المدينة المنورة",
    date: "1300 م٢",
    categories: [" تأسيس المراصد الحضرية", "التخطيط الحضضري"],

      // Full project details
      detailImages: [
        "/src/assets/img/galary/9.png",
        "/src/assets/img/galary/9.png",
        "/src/assets/img/galary/9.png",
        "/src/assets/img/galary/9.png",
       
      ],
      fullDescription:
    "هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع.",
      location: "المدينة المنورة",
      area: "1300 م٢",
      completionDate: "2023",
      partner: "/src/assets/img/Partner1.png",
      budget:"+50",
  },
  {
    id: 10,
    image: "/src/assets/img/galary/10.png",
    title: "     مسجد الزاهر",
    description: "    مكة المكرمة",
    date: "1300 م٢",
    categories: ["تصميم مسجد", "التخطيط الحضضري"],

      // Full project details
      detailImages: [
        "/src/assets/img/galary/10.png",
        "/src/assets/img/galary/10.png",
        "/src/assets/img/galary/10.png",
        "/src/assets/img/galary/10.png",
       
      ],
      fullDescription:
    "هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع.",
      location: "المدينة المنورة",
      area: "1300 م٢",
      completionDate: "2023",
      partner: "/src/assets/img/Partner1.png",
      budget:"+50",
  },
];

function MasonaryGrid({
  limit,
  showMoreButton = false,
  selectedProjectIds = [],
  isProjectPage = false, // New prop to determine if this is the full projects page
}) {
  const navigate = useNavigate();

  // Add IDs to your projects array (if not already added)
  const projectsWithIds = projects.map((project, index) => ({
    ...project,
    id: index + 1,
  }));

  // Filter and limit projects
  const filteredProjects =
    selectedProjectIds.length > 0
      ? projectsWithIds.filter((project) =>
          selectedProjectIds.includes(project.id)
        )
      : projectsWithIds;

  const displayedProjects = limit
    ? filteredProjects.slice(0, limit)
    : filteredProjects;

  // Handle "See More" button click
  const handleSeeMore = () => {
    navigate("/projects");
  };

  // Handle project card click (only on the project page)
  const handleProjectClick = (projectId) => {
    if (isProjectPage) {
      navigate(`/projects/${projectId}`); // Navigate to the project detail page
    }
  };

  return (
    <div className="columns-2 sm:columns-2 md:columns-3 pt-20  px-4 md:px-[4rem] bg-accent gap-4 w-full mx-auto font-camel hover:cursor-pointer">
  {displayedProjects.map((project, index) => (
    <div
      key={project.id}
      className={`relative break-inside-avoid group mb-4 rounded-xl overflow-hidden ${
        showMoreButton && index === displayedProjects.length - 1 ? "relative" : ""
      }`}
      onClick={() => handleProjectClick(project.id)}
    >
      {/* Project Card Content */}
      <div
        className={`relative ${
          isProjectPage ? "cursor-pointer hover:scale-105 transition-transform" : ""
        }`}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 sm:h-80 object-cover"
        />

        {/* Semi-Transparent Layer */}
        <div className="absolute inset-0 rounded- bg-black/10 transition-opacity duration-300 group-hover:bg-black/40" />

        {/* Project Overlay Content */}
        <div className="absolute inset-0 p-4 sm:p-6 flex flex-col rounded- justify-between text-white">
          <div className="text-right">
            <h1 className="text-2xl sm:text- md:text-4xl font-bold mb-2">
              {project.title}
            </h1>
            <p className="text-sm sm:text-base opacity-90 line-clamp-2 mb-4">
              {project.description}
            </p>
            <p className="text-sm sm:text-base">{project.date}</p>
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap gap-2 justify-start">
            {project.categories.map((category, catIndex) => (
              <button
                key={catIndex}
                className="px-2 py-1 text-xs text-wrap sm:text-sm bg-transparent md:text-nowrap border border-accent rounded-lg hover:bg-[#6a4a2d] transition-all backdrop-blur-sm"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Show More Button Overlay - Only on last element */}
      {showMoreButton && index === displayedProjects.length - 1 && (
        <div className="absolute inset-0 flex rounded- items-end justify-end">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleSeeMore();
            }}
            className="px-4 py-2 sm:px-6 sm:py-3 bg-accent  absolute top-[70%] -left-4 flex items-center justify-center gap-2 text-black h-20 sm:h-28 w-48 sm:w-60 rounded-tr-full -rounded-bl-full transition-all font-bold"
          >
            <img src="/src/assets/img/MoreIcon.svg" alt="" className="w-6 sm:w-8" />
            <span className="md:text-lg text-sm">تصفح المزيد</span>
          </button>
        </div>
      )}
    </div>
  ))}
</div>
  );
}

export default MasonaryGrid;
