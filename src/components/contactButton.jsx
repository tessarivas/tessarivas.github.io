const ContactButton = ({ theme }) => {
    return (
      <button
        className={`sticky top-4 right-4 px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out flex items-center space-x-2 cursor-pointer
          ${
            theme === 'dark'
              ? 'bg-[#ffffff]/60 hover:bg-[#ffffff]/90 text-[#390062]' // dark
              : 'bg-[#8F669F]/40 hover:bg-[#8F669F]/70 text-[#ffffff]' // light
          }`}>

        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>

        <span>Contact</span>
      </button>
    );
  };
  
  export default ContactButton;