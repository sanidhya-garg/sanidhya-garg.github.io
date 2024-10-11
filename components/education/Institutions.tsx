import React, { useEffect, useRef, useState } from 'react';
import SectionTitle from '../global/SectionTitle';

function Institutions() {
  const institutionRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [cards] = useState([
    {
      logo: "/path-to-sanskriti-logo.png",
      alt: "Sanskriti School Logo",
      title: "Sanskriti School, Delhi",
      time: "2008 - 2020",
      description: "2+10 Schooling",
      details: "Scored 95% in Class X Central Board Examinations, excelling in all subjects."
    },
    {
      logo: "/path-to-sanskriti-logo.png",
      alt: "Sanskriti School Logo",
      title: "Sanskriti School, Delhi",
      time: "2020 - 2022",
      description: "High School Diploma",
      details: "Achieved top grades in science and mathematics, with a 91% score in Central Board Examinations."
    },
    {
      logo: "./iitd-logo.png",
      alt: "IIT Delhi Logo",
      title: "Indian Institute of Technology, Delhi",
      time: "2022 - Present",
      description: "B.Tech in Textile and Fiber Sciences",
      details: "Specializing in carbon fibre with a minor in Management from DMS IIT Delhi."
    }   
  ]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = institutionRefs.current.indexOf(entry.target as HTMLLIElement);
        if (entry.isIntersecting) {
          const targetElement = entry.target as HTMLLIElement;
          targetElement.style.zIndex = `${index + 1}`;
          targetElement.style.opacity = '1';
        } else {
          const targetElement = entry.target as HTMLLIElement;
          targetElement.style.opacity = '0';
        }
      });
    }, { threshold: 0.5 });

    institutionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, [cards]);

  return (
    <div className="py-12 px-4 bg-bg text-fun-gray">
      <div className="max-w-7xl mx-auto">
        {/* Section Title for Institutions */}
        <SectionTitle title="Education" />
        
        <ul id="cards" className="stack-cards">
          {cards.map((card, index) => (
            <li
              key={index}
              ref={(el) => (institutionRefs.current[index] = el)}
              className="stack-cards__item card"
            >
              <div className="card__content">
                <img src={card.logo} alt={card.alt} className="w-16 h-16 mb-4 rounded-full object-cover shadow-lg" />
                <h3 className="text-xl font-bold text-fun-pink mb-2">{card.title}</h3>
                <time className="block text-sm text-fun-gray-light mb-2">{card.time}</time>
                <p className="text-base text-fun-gray mb-2">{card.description}</p>
                <p className="text-sm text-fun-gray-light">{card.details}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        #cards {
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .stack-cards__item {
          position: sticky;
          top: 100px; /* Higher top value for smoother stacking */
          margin-bottom: 20px;
          z-index: 1;
          opacity: 0;
          transition: opacity 0.5s ease, z-index 0.5s ease;
        }

        .card__content {
          background-color: #ffffff;
          padding: 24px;
          border-radius: 12px;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
          width: 100%;
        }

        .card__content:hover {
          transform: translateY(-10px);
          box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
        }

        img {
          transition: transform 0.3s ease;
        }

        .card__content:hover img {
          transform: scale(1.1);
        }

        h3 {
          color: #ff4b5c;
        }

        time {
          color: #6b7280;
        }

        p {
          color: #374151;
        }
      `}</style>
    </div>
  );
}

export default Institutions;
