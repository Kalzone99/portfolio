import HeroImage from "../assets/photo-image.jpg";

const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-16">
      <img
        src={HeroImage}
        alt=""
        className="mx-auto mb-8 w-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105 "
      />
      <h1 className="text-4xl font-bold">
        I&apos;m{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Kevin Selvais
        </span>
        , Junior Full-Stack Developer
      </h1>
      <p className="mt-4 text-lg text-gray-300 ">
        I aim to be specialized in building modern and responsive web
        applications.
      </p>
      <div className="mt-8 space-x-4">
        <button
          onClick={() =>
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Contact Me
        </button>
        <button
          className="bg-gradient-to-r from-yellow-400 to-red-500 text-white  md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1gmOgbphag9C9ndRZH3k70niNm1FwdfI2/view?usp=sharing",
              "_blank"
            )
          }>
          My CV
        </button>
      </div>
    </div>
  );
};

export default Hero;
