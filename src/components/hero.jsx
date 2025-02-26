const Hero = ({ theme }) => {
  return (
    <section
      className={`min-h-[300px] flex items-center justify-center text-center pt-16 ${
        theme === "dark"
          ? "bg-gradient-to-r from-[#610C9F] via-[#DA0C81] to-[#ffd900]"
          : "bg-gradient-to-r from-[#BB9FDC] via-[#F0BBD9] to-[#F2D8A7]"
      }`}
    >
      <div className="max-w-2xl mx-auto px-4">
        <h1
          className={`text-4xl sm:text-6xl font-semibold mb-6 ${
            theme === "dark" ? "text-[#22003a]" : "text-[#ffffff]"
          } font-karla`}
        >
          I'm{" "}
          <span
            className={`text-5xl sm:text-7xl ${
              theme === "dark"
                ? "text-[#ffffff] drop-shadow-[0_0_10px_#ffffff]"
                : "text-[#8F669F] drop-shadow-[0_0_10px_#c586ef]"
            } font-alex-brush transition-all duration-300`}
          >
            Teresa Rivas
          </span>{" "}
          <br /> Frontend Developer
        </h1>
      </div>
    </section>
  );
};

export default Hero;