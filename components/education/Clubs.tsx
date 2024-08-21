import React from 'react';
import SectionTitle from '../global/SectionTitle';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Clubs() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
  };

  const clubs = [
    {
      name: "Venture Verse",
      description: "Created a 45-page Design Thinking manual, managed a 400+ member community, organized a finale with guest speaker Deepika Dutta, and developed presentations for the second edition.",
      tags: ["Design Thinking", "Community Management", "Event Organization"],
      imgSrc: "/static/clubs/VV1.jpg"
    },
    {
      name: "Musketeers",
      description: "Led the creation of the rulebook, organized 5 workshops (2 offline, 3 online), and mentored 4 teams. Managed logistics, planning, and media coverage for all events, ensuring smooth execution from workshops to the final competition.",
      tags: ["Leadership", "Event Management", "Mentorship"],
      imgSrc: "/static/clubs/Muski .jpg"
    },
    {
      name: "Coding Club",
      description: "Led a group of passionate coders to build innovative projects and participate in hackathons.",
      tags: ["Leadership", "Hackathons", "Innovation"],
      imgSrc: "/static/experiences/bct 1.jpg"
    },
    {
      name: "Coding Club",
      description: "Led a group of passionate coders to build innovative projects and participate in hackathons.",
      tags: ["Leadership", "Hackathons", "Innovation"],
      imgSrc: "/static/experiences/bct 1.jpg"
    },
    {
      name: "Coding Club",
      description: "Led a group of passionate coders to build innovative projects and participate in hackathons.",
      tags: ["Leadership", "Hackathons", "Innovation"],
      imgSrc: "/static/experiences/bct 1.jpg"
    },
    {
      name: "Coding Club",
      description: "Led a group of passionate coders to build innovative projects and participate in hackathons.",
      tags: ["Leadership", "Hackathons", "Innovation"],
      imgSrc: "/static/experiences/bct 1.jpg"
    },
    {
      name: "Coding Club",
      description: "Led a group of passionate coders to build innovative projects and participate in hackathons.",
      tags: ["Leadership", "Hackathons", "Innovation"],
      imgSrc: "/static/experiences/bct 1.jpg"
    },
    // Add more clubs as needed
  ];

  return (
    <div className="flex flex-col text-left max-w-md md:max-w-full w-full m-auto">
      <br />
      <br />
      <br />
      <SectionTitle title="Clubs & Events I have led & been a part of!" />
      
      <Slider {...settings} className="max-w-lg md:max-w-6xl w-full m-auto">
        {clubs.map((club, index) => (
          <div key={index} className="px-2">
            <div className="max-w-md mx-auto flex flex-col items-center md:items-start md:justify-center">
              <div className="w-full relative rounded-xl border border-fun-gray p-2 transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink">
                <div className="relative w-full h-64 overflow-hidden rounded-md">
                  <img
                    className="object-cover w-full h-full"
                    src={club.imgSrc}
                    alt={club.name}
                  />
                </div>
              </div>
              <div className="w-full mt-5">
                <h3 className="text-lg font-bold text-white">{club.name}</h3>
                <p className="text-fun-gray text-sm mt-2">{club.description}</p>
                <div className="flex flex-wrap items-center mt-2 -ml-2 list-none">
                  {club.tags.map((tag, index) => (
                    <span key={index} className="m-1 rounded-lg text-sm bg-fun-pink-dark text-white py-1 px-2 cursor-pointer hover:opacity-75">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Clubs;
