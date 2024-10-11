import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Hiring Platform",
    desc: "Developed a hiring platform for startups using React, Material UI, and PostgreSQL, integrating features for job and internship management, profile creation, application tracking, and data export.",
    img: "/static/projects/Unipace.png",
    link: "https://unipace.in",
    github: "https://github.com/sanidhya-garg/main-frontend",
    tags: ["ReactJS", "Prisma", "PostgreSQL", "MaterialUI"],
  },
  {
    id: 1,
    title: "Learning Management System",
    desc: "Developed an LMS platform with Next.js 13, Prisma ORM, and Planetscale, integrating Stripe for payments and implementing features like course management, community chat, and media support.",
    img: "/static/projects/LMS.png",
    link: "https://courses.unipace.in",
    github: "https://github.com/sanidhya-garg/LearningManagementSystem",
    tags: ["Next.js 13", "Prisma", "Planetscale", "Stripe"],
  },
  {
    id: 2,
    title: "Blogging Website",
    desc: "Built a blogging platform with React, Tailwind CSS, Tiny Cloud, and Firebase. It features blog previews, search, comments, and admin controls for managing content.",
    img: "/static/projects/Blogs.png",
    link: "https://blogs.unipace.in/",
    github: "https://github.com/sanidhya-garg/blog",
    tags: ["ReactJS", "Tailwind CSS", "Tiny Cloud", "Firebase"],
  },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects
