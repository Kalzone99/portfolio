import final from "../assets/finalCss.png";
import meal from "../assets/MealDB.png";
import movie from "../assets/MovieDB.png";
import router from "../assets/Router.png";
import trivia from "../assets/Trivia.png";
const projects = [
  {
    id: 1,
    name: "final CSS",
    technologies: "HTML/CSS",
    image: final,
    source: "https://kalzone99.github.io/finalCss/",
  },
  {
    id: 2,
    name: "Meal Finder",
    technologies: "HTML/CSS, Javascript, REST API",
    image: meal,
    source: "https://kalzone99.github.io/mealFinder/",
  },
  {
    id: 3,
    name: "The movie DB",
    technologies: "Git/Github, HTML/CSS, Javascript, REST API",
    image: movie,
    source: "https://kalzone99.github.io/theMovieDB/",
  },
  {
    id: 4,
    name: "Mock Shop-it React",
    technologies: "React, router, mock Database (Mock API)",
    image: router,
    source: "https://kalzone99.github.io/reactRouter/",
  },
  {
    id: 5,
    name: "Trivia",
    technologies:
      "React, TypeScript, Trivia API, Local storage, Router, He decoder, Headlessui interactive modals",
    image: trivia,
    source: "https://kalzone99.github.io/Trivia/",
  },
];
const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-700 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a
                href={project.source}
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer">
                Click Me!
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
