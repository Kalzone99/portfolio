import AboutImage from "../assets/photo-image.jpg";
const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt=""
            className="w-70 h-80 rounded object-cover mb-10 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              I am a passionate Junior Full Stack Developer with a strong
              foundation in front-end development. My focus is on creating
              seamless and enjoyable user experiences by building intuitive,
              responsive, and visually appealing interfaces. I strive to bridge
              the gap between functionality and design, ensuring that every
              project not only works flawlessly but also feels great to use.
              Enthusiastic about learning and growth, I’m always exploring new
              technologies to enhance my skills and deliver better solutions.
            </p>
          </div>
        </div>
        <div className="space-y-4 mt-20">
          <div className="flex items-center space-x-10">
            <label htmlFor="htmlandcss" className="w-2/12 sm:text-xs">
              HTML & CSS
            </label>
            <div className="grow bg-gray-800 rounded-full h-2.5">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
            </div>
          </div>
          <div className="flex items-center space-x-10">
            <label htmlFor="Sass" className="w-2/12 sm:text-xs">
              Tailwind, Sass
            </label>
            <div className="grow bg-gray-800 rounded-full h-2.5">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12"></div>
            </div>
          </div>
          <div className="flex items-center space-x-10">
            <label htmlFor="javascript" className="w-2/12 sm:text-xs">
              JavaScript
            </label>
            <div className="grow bg-gray-800 rounded-full h-2.5">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12"></div>
            </div>
          </div>
          <div className="flex items-center space-x-10">
            <label htmlFor="TypeScript" className="w-2/12 sm:text-xs">
              TypeScript
            </label>
            <div className="grow bg-gray-800 rounded-full h-2.5">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-5/12"></div>
            </div>
          </div>
          <div className="flex items-center space-x-10">
            <label htmlFor="reactjs" className="w-2/12 sm:text-xs">
              React JS
            </label>
            <div className="grow bg-gray-800 rounded-full h-2.5">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-7/12"></div>
            </div>
          </div>
          <div className="flex items-center space-x-10">
            <label htmlFor="nodejs" className="w-2/12 sm:text-xs">
              Node JS + Express
            </label>
            <div className="grow bg-gray-800 rounded-full h-2.5">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-6/12"></div>
            </div>
          </div>

          <div className="flex items-center space-x-10">
            <label htmlFor="Mongo" className="w-2/12 sm:text-xs">
              MongoDB, MySQL
            </label>
            <div className="grow bg-gray-800 rounded-full h-2.5">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-6/12"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
