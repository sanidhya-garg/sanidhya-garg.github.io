import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi"; // Make sure to install react-icons

// StartupCard Component
interface StartupCardProps {
  id: string;
  coverImage: string;
  logo?: string;
  title: string;
  description: string;
  year: string;
  role?: string;
  link: string;
}

const StartupCard: React.FC<StartupCardProps> = ({
  coverImage,
  logo,
  title,
  description,
  year,
  role,
  link,
}) => {
  return (
    <div className="group relative w-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800">
      <Link href={link}>
        <div className="cursor-pointer">
          {/* Cover Image */}
          <div className="h-48 w-full relative overflow-hidden">
            <Image
              src={coverImage}
              alt={`${title} cover`}
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-500"
            />
            {/* Optional overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70" />
            
            {/* Year badge */}
            <div className="absolute top-4 right-4 bg-black dark:bg-gray-700 px-2 py-1 rounded text-xs font-bold shadow-md">
              {year}
            </div>
            
            {/* Logo if available */}
            {logo && (
              <div className="absolute left-4 bottom-4 w-12 h-12 rounded-full overflow-hidden bg-white p-1 shadow-md">
                <Image
                  src={logo}
                  alt={`${title} logo`}
                  width={40}
                  height={40}
                  objectFit="contain"
                />
              </div>
            )}
          </div>
          
          {/* Content */}
          <div className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
                {role && (
                  <span className="text-sm text-gray-600 dark:text-gray-400 block mt-1">
                    {role}
                  </span>
                )}
              </div>
              <div className="text-fun-pink transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                <FiArrowRight size={20} />
              </div>
            </div>
            
            <p className="mt-3 text-gray-700 dark:text-gray-300 text-sm line-clamp-2">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

// Startup data directly embedded in the component
const startupData = [
  {
    id: "startup1",
    coverImage: "/static/startup/Frame 56.png",
    logo: "/static/startup/Asset 5.png",
    title: "Unipace",
    description: "Placement Marketplace for Government Engineering and Polytechnique Colleges - pilot with 40 colleges across Bihar",
    year: "2022-2024",
    role: "Co-founder & CEO",
    link: "https://unipace.in/"
  },
  {
    id: "startup2",
    coverImage: "/static/startup/Blue and Red Modern Simple Brand Strategist LinkedIn Banner.png",
    logo: "/static/startup/Blue and Yellow Minimalist Retro Motorcycle Instagram Post (1).png", 
    title: "Ridezzy",
    description: "Smart EV Rental Fleet for quick commerce",
    year: "2024-2025",
    role: "Co-founder & COO",
    link: "https://ridezzy.com"
  }
];

// Main component that renders the startup cards
const StartupSection: React.FC = () => {
  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold mb-6">My Startup Journey</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {startupData.map(startup => (
          <StartupCard key={startup.id} {...startup} />
        ))}
      </div>
    </section>
  );
};

export default StartupSection;
