import React from "react";
import { useRouter } from "next/router";
import experiencesData from "@/data/content/experiences";
import Link from "next/link";

const ExperienceDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the experience based on the id
  const experience = experiencesData.find(exp => exp.id === parseInt(id as string, 10));

  if (!experience) {
    return <div>Experience not found.</div>;
  }

  return (
    <div className="experience-detail-container p-8">
      <h1 className="text-4xl font-bold mb-4">{experience.title}</h1>
      <img src={experience.img} alt={experience.title} className="w-full h-auto mb-4 rounded-md" />
      <p className="text-lg mb-4">{experience.desc}</p>
      {experience.link && (
        <a href={experience.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
          Learn more about this experience
        </a>
      )}
      <div className="mt-4">
        {experience.tags.map(tag => (
          <span key={tag} className="inline-block bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
            {tag}
          </span>
        ))}
      </div>
      <Link href="/experiences">
        <a className="mt-8 text-blue-500 underline">Back to Experiences</a>
      </Link>
    </div>
  );
};

export default ExperienceDetailPage;
