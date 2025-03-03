import React, { useState } from "react";
import Link from "next/link";
import { FiArrowRight, FiX } from "react-icons/fi"; // Using Feather icons

const PublicationsBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative w-full bg-gradient-to-r from-fun-pink-dark to-fun-pink-light text-white mb-8 rounded-lg overflow-hidden shadow-lg">
      <Link href="/publication">
        <div className="py-4 px-6 cursor-pointer hover:opacity-95 transition-opacity duration-200 pr-16">
          <div className="flex items-center">
            <div className="flex-grow">
              <h3 className="text-xl font-bold mb-1">Explore My Self-Built Startup Support Resources and Platforms</h3>
              <p className="text-white text-opacity-90">A curated repository of resources, mentorship, and insights—personally created to help startups succeed.</p>
            </div>
            <FiArrowRight className="text-2xl mr-4 animate-pulse" />
          </div>
        </div>
      </Link>
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute top-0 right-0 h-full flex items-center justify-center px-4 hover:bg-black hover:bg-opacity-10 transition-colors duration-200"
        aria-label="Dismiss"
      >
        <FiX className="text-xl" />
      </button>
    </div>
  );
};

export default PublicationsBanner;
