import React from "react";
import Hero from "../components/hero.jsx";

const Home = ({ theme, setTheme }) => {
  const iconColors =
    theme === "dark"
      ? ["#610C9F", "#DA0C81", "#ffd900"]
      : ["#BB9FDC", "#F0BBD9", "#F2D8A7"];

  return (
    <>
      {/* Hero */}
      <Hero theme={theme} setTheme={setTheme} />
      {/* Services */}
      <div className="px-10 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-[var(--color-text)] bg-[var(--color-bg)]">
        <div className="max-w-xl mb-10 sm:mx-auto">
          {/* Section header */}
          <h2 className="font-karla text-4xl font-bold leading-tight tracking-tight sm:text-5xl sm:text-center">
            Services{" "}
            <span
              className={`text-4xl sm:text-5xl ${
                theme === "dark" ? "text-[#DA0C81]" : "text-[#BB9FDC]"
              } font-karla transition-all duration-300`}
            >
              I Provide
            </span>
          </h2>
        </div>
        {/* Services grid */}
        <div className="grid gap-15 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {[
            {
              title: "Website Development",
              text: "Create functional and user-friendly websites.",
            },
            {
              title: "Prototypes",
              text: "Interactive prototypes to visualize and refine ideas.",
            },
            {
              title: "UX / UI Design",
              text: "Intuitive and visually appealing interfaces focused on usability.",
            },
          ].map((item, index) => (
            <div className="flex" key={index}>
              {/* Icon */}
              <div className="mr-4">
                <div
                  className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-opacity-20"
                  style={{ backgroundColor: iconColors[index] }}
                >
                  <svg
                    className="w-8 h-8 text-[var(--color-bg)]"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
              </div>
              {/* Text */}
              <div>
                <h6
                    className="mb-2 font-semibold text-2xl sm:text-3xl leading-6 font-karla relative inline-block"
                    style={{ color: "var(--color-text)" }}
                >
                    {item.title}
                    <span
                    className="absolute left-0 bottom-[-12px] w-full h-[4px] rounded-lg"
                    style={{ backgroundColor: iconColors[index] }}
                    ></span>
                </h6>
                <p className="text-1xl sm:text-2xl font-karla mt-2 lg:mt-2">{item.text}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
