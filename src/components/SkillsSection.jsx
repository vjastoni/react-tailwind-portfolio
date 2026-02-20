import { useState } from "react";
import { cn } from "@/lib/utils";
import { FaCss3Alt, FaReact, FaNodeJs, FaJava, FaGitAlt } from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiBootstrap,
  SiExpress,
  SiSharp,
  SiFigma,
  SiPostman,
} from "react-icons/si";

const skills = [
  // frontend
  {
    name: "HTML/CSS",
    level: 90,
    category: "frontend",
    icon: <FaCss3Alt />,
  },

  {
    name: "Tailwind CSS",
    level: 90,
    category: "frontend",
    icon: <SiTailwindcss />,
  },
  {
    name: "BootStrap",
    level: 90,
    category: "frontend",
    icon: <SiBootstrap />,
  },
  {
    name: "JavaScript",
    level: 90,
    category: "frontend",
    icon: <SiJavascript />,
  },
  {
    name: "React JS",
    level: 90,
    category: "frontend",
    icon: <FaReact />,
  },

  //  Backend
  {
    name: "Node.js",
    level: 60,
    category: "backend",
    icon: <FaNodeJs />,
  },
  {
    name: "Express",
    level: 60,
    category: "backend",
    icon: <SiExpress />,
  },
  {
    name: "Java",
    level: 60,
    category: "backend",
    icon: <FaJava />,
  },
  {
    name: "C#",
    level: 60,
    category: "backend",
    icon: <SiSharp />,
  },
  //   Tools
  {
    name: "Git",
    level: 70,
    category: "tools",
    icon: <FaGitAlt />,
  },
  {
    name: "Figma",
    level: 70,
    category: "tools",
    icon: <SiFigma />,
  },
  {
    name: "Postman",
    level: 70,
    category: "tools",
    icon: <SiPostman />,
  },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory,
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto mx-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary "> Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12 ">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary",
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="mb-4 flex  justify-between items-center">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                <span className="text-2xl ">{skill.icon}</span>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-2 origin-left animate-[grow_1.5s_ease-out]"
                  style={{
                    width: skill.level + "%",
                  }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
