import React from "react";
import Slider from "react-slick";
import experiencesData from "@/data/content/experiences";
import { Experience } from "types";
import ExperienceCard from "./ExperienceCard";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

type ExperienceProps = {
  overwriteExperiences?: Experience[];
};

function ExperiencesCarousel({ overwriteExperiences }: ExperienceProps) {
  const experiencesList = overwriteExperiences ? overwriteExperiences : experiencesData;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="experiences-carousel">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
        Professional Experience
      </h2>
      <Slider {...settings}>
        {experiencesList.map((item) => (
          <div key={item.id} className="px-2">
            <ExperienceCard experience={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ExperiencesCarousel;
