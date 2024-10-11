import React from 'react';
import SectionTitle from '../global/SectionTitle'; // Assuming you're using SectionTitle for the blue underline

function Publication() {
  const papers = [
    {
      title: "Advancements in Dyeing Technology",
      link: "https://drive.google.com/file/d/1MYLSWfo9LVb92yffk3X86jQYbDt2_Stc/view?usp=sharing",
      image: "../../public/static/publications/Screenshot 2024-10-10 181221.png",
      description: "Exploring the applications and properties of advanced carbon fiber composites in modern industries.",
      tags: ["Carbon Fiber", "Composites", "Industry"],
    },
    {
      title: "Sustainable Textile Manufacturing",
      link: "https://example.com/paper2",
      image: "/path-to-image2.jpg",
      description: "A detailed study on sustainable textile manufacturing processes and materials.",
      tags: ["Sustainability", "Textile", "Manufacturing"],
    },
    {
      title: "Innovations in Textile Engineering",
      link: "https://example.com/paper3",
      image: "/path-to-image3.jpg",
      description: "This paper covers the latest innovations in textile engineering with a focus on fiber technology.",
      tags: ["Textile Engineering", "Innovation", "Fiber"],
    },
    {
      title: "Smart Textiles and Wearable Technology",
      link: "https://example.com/paper4",
      image: "/path-to-image4.jpg",
      description: "An exploration into smart textiles and the intersection with wearable technologies.",
      tags: ["Smart Textiles", "Wearable Tech", "Innovation"],
    },
  ];

  return (
    <div className="flex flex-col text-left max-w-md md:max-w-full w-full m-auto">
      <br />
      <br />
      <br />
      {/* Use the same heading style as the Clubs component */}
      <SectionTitle title="Publications" />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {papers.map((paper, index) => (
          <div key={index} className="px-2">
            <div className="max-w-md mx-auto flex flex-col items-center md:items-start md:justify-center">
              <div className="w-full relative rounded-xl border border-fun-gray p-2 transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink">
                <div className="relative w-full h-64 overflow-hidden rounded-md">
                  <img
                    className="object-cover w-full h-full"
                    src={paper.image}
                    alt={paper.title}
                  />
                </div>
              </div>
              <div className="w-full mt-5">
                <h3 className="text-lg font-bold text-white">{paper.title}</h3>
                <p className="text-fun-gray text-sm mt-2">{paper.description}</p>
                <div className="flex flex-wrap items-center mt-2 -ml-2 list-none">
                  {paper.tags.map((tag, index) => (
                    <span key={index} className="m-1 rounded-lg text-sm bg-fun-pink-dark text-white py-1 px-2 cursor-pointer hover:opacity-75">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={paper.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline hover:text-blue-700 mt-2 block">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Publication;
