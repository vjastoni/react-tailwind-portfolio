import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    Title: "Corso Website",
    description:
      "A responsive business website built using HTML and Bootstrap.",
    image: "/projects/corso-website.png",
    tags: ["HTML/CSS", "BootStrap", "JavaScript"],
    demoUrl: "https://corso-website-eta.vercel.app/#home",
    githubUrl: "https://github.com/vjastoni/corso-website.git",
  },

  {
    id: 2,
    Title: "Ebook Website",
    description:
      "A responsive ebook landing page developed with HTML and Bootstrap.",
    image: "/projects/ebook-website.png",
    tags: ["HTML/CSS", "BootStrap", "JavaScript"],
    demoUrl: "https://ebook-website-starter-seven.vercel.app/",
    githubUrl: "https://github.com/vjastoni/ebook-website-starter.git",
  },

  {
    id: 3,
    Title: "React Meals",
    description:
      "A food ordering application built with React featuring dynamic UI rendering.",
    image: "/projects/react-meals.png",
    tags: ["HTML/CSS", "React"],
    demoUrl: "https://vjastoni.github.io/food-order-app/",
    githubUrl: "https://github.com/vjastoni/food-order-app.git",
  },
  {
    id: 4,
    Title: "Sflix Clone",
    description:
      "A simple CRUD movie application built with Node.js, Express, and EJS using JSON as a mock database.",
    image: "/projects/sflix-clone.png",
    tags: ["React", "Node.js", "Express"],
    demoUrl: "https://sflix-clone.onrender.com/",
    githubUrl: "https://github.com/vjastoni/sflix-clone.git",
  },

  {
    id: 5,
    Title: "Basic Calculator",
    description:
      "A simple calculator application built with JavaScript functions for basic arithmetic operations.",
    image: "/projects/calculator.png",
    tags: ["HTML/CSS", "JavaScript"],
    demoUrl: "https://vjastoni.github.io/simple-calculator/",
    githubUrl: "https://github.com/vjastoni/simple-calculator.git",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my projects, each thoughtfully built with attention
          to detail, performance, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.Title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.Title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2 cursor-pointer"
            target="_blank"
            href="https://github.com/vjastoni"
          >
            Check my Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
