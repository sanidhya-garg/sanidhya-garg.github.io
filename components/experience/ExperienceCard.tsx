import React from "react";
import { kebabCase } from "@/utils/utils";
import Link from "next/link";

type Experience = {
  id: number;
  title: string;
  desc: string;
  img: string; // Main image URL
  link?: string;
  tags: string[];
};

function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <div className="max-w-md mx-auto flex flex-col items-center md:items-start md:justify-center">
      <div className="w-full relative rounded-xl border-fun-gray border p-2 transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink">
        {/* Fixed size image container */}
        <div className="relative w-full h-64 overflow-hidden rounded-md">
          <img
            className="object-cover w-full h-full"
            src={experience.img}
            alt={experience.title}
          />
        </div>
      </div>
      <div className="w-full mt-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">{experience.title}</h3>
          <div className="space-x-2">
            {experience.link && (
              <a href={experience.link} target="_blank" rel="noreferrer">
                <img
                  src="/static/icons/external-link.svg"
                  width={16}
                  height={16}
                  alt="Link Icon"
                />
              </a>
            )}
          </div>
        </div>
        <p className="text-fun-gray text-left text-sm">{experience.desc}</p>
        <ul className="flex flex-wrap items-center mt-2 -ml-2 list-none">
          {experience.tags.map((tag) => (
            <li key={tag}>
              <Link href={`/experience/tag/${kebabCase(tag)}`}>
                <div className="m-1 rounded-lg text-sm bg-fun-pink-dark py-1 px-2 cursor-pointer hover:opacity-75">
                  {tag}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExperienceCard;
