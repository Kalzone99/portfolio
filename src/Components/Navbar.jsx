const Navbar = () => {
  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="container py-2 flex justify-center md:justify-between items-center">
        <div className="text-2xl font-bold hidden md:inline">Kevin Selvais</div>
        <div className="space-x-6">
          <a href="#home" className="hover:text-gray-400 text-xs md:text-lg">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400 text-xs md:text-lg">
            About
          </a>
          <a
            href="#projects"
            className="hover:text-gray-400 text-xs md:text-lg">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-400 text-xs md:text-lg">
            Contact
          </a>
        </div>
        <button
          onClick={() =>
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Contact Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
