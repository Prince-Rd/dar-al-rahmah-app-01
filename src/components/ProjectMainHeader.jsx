import React, { Component } from "react";

export class ProjectMainHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      isSlidingOut: false, // Controls the slide-out animation
      totalProjects: ["+50k", "+200M", "+15", "+300", "+50", "+5M"], // Example total projects
      beneficiaries: [
        "مستفيد مباشر",
        "    قيمة المشاريع ",
        " عـــام من الخبــــرة",
        "تصميــم",
        "مشروع نوعي",
        "مستفيد غير مباشر ",
      ], // Example beneficiaries
    };
  }

  componentDidMount() {
    this.startAnimation();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearTimeout(this.slideOutTimeout);
  }

  startAnimation = () => {
    this.interval = setInterval(() => {
      // Trigger slide-out animation
      this.setState({ isSlidingOut: true });

      // Wait for slide-out animation to complete, then update the index
      this.slideOutTimeout = setTimeout(() => {
        this.setState((prevState) => ({
          currentIndex:
            (prevState.currentIndex + 1) % prevState.totalProjects.length,
          isSlidingOut: false, // Reset slide-out state
        }));
      }, 500); // Wait for slide-out animation duration (0.5s)
    }, 5000); // Total cycle time: 4s (stay) + 0.5s (slide-in) + 0.5s (slide-out)
  };

  render() {
    const { currentIndex, isSlidingOut, totalProjects, beneficiaries } =
      this.state;

    return (
      <div>
        <section className="font-camel h-fit bg-accent">
          {/* Section Header */}
          <div className="flex pt-20 justify-between relative">
            {/* Left Side with ServicesHeader1 and h2 */}
            <div className="w-[30%] mt-4 relative">
              <img
                src="/src/assets/img/ProjectHeader1.svg"
                alt="Services Header 1"
              />
              {/* Absolute h2 */}
              <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/2 text-2xl md:text-6xl font-bold text-tertiary mb-6">
                أعمالنــــــا
              </h1>
            </div>
          </div>

          {/* Projects section */}
          <div className="">

              {/* background container */}
            <div>

              {/* Background desktop */}
              <img
                src="/src/assets/img/ProjectsHeaderContainer.png"
                alt="container"
                className="object-cover h-full w-full z-0 hidden md:block"
              />
              {/* Background mobile */}
              <img
                src="/src/assets/img/ProjectsHeaderContainer-mobile.png"
                alt="container"
                className="object-cover w-[100%]  z-0 block md:hidden"
              />
            </div>

            <div className="m-bas text-center">
              <div className="relative h- w-full">
                {/* Text Overlay */}
                {/* <h1 className="absolute hidden md:flex md:top-14 top-11 md:right-24 z-10 md:text-4xl text-2xl font-bold text-tertiary transform translate-x-[-10%] translate-y-[30%]">
                دار الرحمة في أرقام
              </h1> */}

                {/* Counter and Text container */}

                <div className="flex  px-12 md:px-10 lg:px-14 justify-betwen items-  absolute bottom-1/2 left-1/2 transform -translate-x-1/2 lg:-translate-y-[13%] -translate-y-[33%] md:translate-y-[20%] w-full z-10">
                  {/* Text */}
                  <p className=" md:top-[ top- right-[10%]  font-light font- mt-7 md:mt-0 md:right-11 lg:right-24 w-[65%] w- text-right md:text-sm lg:text-lg text-xs  z-10">
                    هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع.
                    هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع.
                    هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع.
                    هذا نص
                  </p>

                  {/* Counter */}
                  <div className=" flex  items-center justify-center text-center  w-1/3  left-14 md:left-0 transform xl:-translate-y-12 z-10">
                    <img
                      src="/src/assets/img/Dimond.svg"
                      alt="icon"
                      className=" z-10"
                    />

                    {/* Total Project */}
                    <div className="absolute top-[140%] md:top-44 w-full lg:w-[42%] lg:-left-4 -left-44 transform -translate-y-[7rem] translate-x-[10rem] z-20 font-extrabold text-2xl md:text-6xl font-camel overflow-hidden h-16">
                      <div className={isSlidingOut ? "slide-out" : "slide-up"}>
                        {totalProjects[currentIndex]}
                      </div>
                    </div>

                    {/* Beneficiaries */}
                    <div className="absolute top-[110%] md:top-44 w-full lg:w-[42%] lg:-left-4 -left-48 font-bold text-gray-700 transform -translate-y-[3rem] text-xs md:text-xl translate-x-[12rem] z-10 overflow-hidden h-8">
                      <div
                        className={
                          isSlidingOut ? "slide-out" : "slide-up-delayed"
                        }
                      >
                        {beneficiaries[currentIndex]}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ProjectMainHeader;
