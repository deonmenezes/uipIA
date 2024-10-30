'use client'
import React, { useState } from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@radix-ui/react-dialog';
import SparklesText from '@/components/ui/sparkles-text';

interface Project {
  name: string;
  description: string;
  detailedDescription: string;
  href: string;
  icon: React.ReactNode;
  iconBg: string;
  iconText: string;
  textColor: string;
  hoverTextColor: string;
  images: string[];
  techStack: string[];
}

const projects: Project[] = [
  {
    name: "Schedule",
    description: "Can schedule different tasks and receive reminders ",
    detailedDescription: "This project offers a breathtaking VR experience where users can walk the plank on top of a 200-story building. The project uses Unity 3D and Oculus SDK for an immersive virtual reality experience.",
    href: "https://github.com/altf4-games/Walk-The-Plank-Experience",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    iconBg: "bg-blue-500",
    iconText: "text-white",
    textColor: "text-blue-600",
    hoverTextColor: "hover:text-blue-500",
    images: ["/plank.jpeg"],
    techStack: ["Unity 3D", "Oculus SDK", "C#"],
  },
  {
    name: "Cycle Tracking",
    description: "Helps to track and make goal to complete daily cycling activities",
    detailedDescription: "Experience the thrill of a roller coaster ride from your living room. This simulation offers realistic physics and high-quality graphics, giving users a thrilling experience.",
    href: "/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h8m-8 4h6" />
      </svg>
    ),
    iconBg: "bg-yellow-500",
    iconText: "text-white",
    textColor: "text-yellow-600",
    hoverTextColor: "hover:text-yellow-500",
    images: [],
    techStack: ["Blender", "Unreal Engine", "Python"],
  },
  {
    name: "Running Help",
    description: "Calculates distance to help in running activities and set up goals",
    detailedDescription: "Designed for training purposes, this simulation allows users to control a tower crane in various industrial scenarios. It emphasizes precision and safety, using real-time physics calculations.",
    href: "/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18M9 8v13M15 8v13" />
      </svg>
    ),
    iconBg: "bg-red-500",
    iconText: "text-white",
    textColor: "text-red-600",
    hoverTextColor: "hover:text-red-500",
    images: ["/crane.png",],
    techStack: ["Unity 3D", "C#", "Autodesk Maya"],
  },
  {
    name: "Alarm",
    description: "Setting up daily alarm to fix sleep schedules and monitor dietary activities",
    detailedDescription: "Designed for training purposes, this simulation allows users to control a tower crane in various industrial scenarios. It emphasizes precision and safety, using real-time physics calculations.",
    href: "/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18M9 8v13M15 8v13" />
      </svg>
    ),
    iconBg: "bg-red-500",
    iconText: "text-white",
    textColor: "text-red-600",
    hoverTextColor: "hover:text-red-500",
    images: ["/crane.png",],
    techStack: ["Unity 3D", "C#", "Autodesk Maya"],
  },
  // ... other project objects
];

function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative p-6 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_purple]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 hover:bg-opacity-30"></div>
      <div className="relative z-10">
        <div className={`flex items-center justify-center h-12 w-12 rounded-md ${project.iconBg} ${project.iconText} mb-4`}>
          {project.icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-white">{project.name}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <Dialog>
          <DialogTrigger asChild>
            <a href="#" className={`text-white font-medium ${project.hoverTextColor}`}>
              Learn more &rarr;
            </a>
          </DialogTrigger>
          <DialogOverlay className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
          <DialogContent className="fixed inset-0 flex items-center justify-center p-4">
            <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-xl w-full max-h-full overflow-y-auto">
              <DialogTitle className="text-2xl font-semibold mb-4">
                {project.name}
              </DialogTitle>
              <DialogClose asChild>
                <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
                </button>
              </DialogClose>
              <DialogDescription className="mb-4 text-gray-700">
                {project.detailedDescription}
              </DialogDescription>
              <div className="grid grid-cols-1 gap-4 mb-4">
                {project.images.map((image, idx) => (
                  <img key={idx} src={image} alt={`${project.name} screenshot ${idx + 1}`} className="rounded-lg" />
                ))}
              </div>
             
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2">Tech Stack</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {project.techStack.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
              <a href={project.href} className="text-blue-600 font-medium">
                View on GitHub &rarr;
              </a>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default function OurProjects() {
  return (
    <div className="py-12">
      <div className="max-w-screen-lg mx-auto">
        <SparklesText text={'Our Services'} className="text-center text-lg sm:text-5xl md:text-6xl lg:text-6xl font-bold text-[#8f51e4] tracking-wide"></SparklesText>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
