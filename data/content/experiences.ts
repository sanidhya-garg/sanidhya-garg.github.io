import { kebabCase, kebabArray } from "@/utils/utils";
import { Experience } from "types";

const experiences: Experience[] = [
  {
    id: 0,
    title: "Venture Scout Intern at SwiftSeed ",
    desc: "Recommending promising startups to venture capitalists, aiding in the identification and evaluation of high-potential investment opportunities to drive growth in the startup ecosystem.",
    img: "/static/experiences/ss 1.jpg",
    link: "https://swiftseed.in/",
    tags: ["VentureCapital", "StartupEcosystem", "Investment Opportunities"],
  },
  {
    id: 1,
    title: "Project Manager at Eureka Forbes Ltd.",
    desc: "Led a team to drive innovations in the Aquaguard product line, utilizing Jira and PowerBI for project coordination and insights, and collaborated on design updates to enhance product performance.",
    img: "/static/experiences/efl 1.jpg",
    link: "https://techcorp.com",
    tags: ["Product Innovation", "Project Coordination", "Data Analytics", "Management"],
  },
  {
    id: 2,
    title: "Intern at BloodConnect Foundation",
    desc: "Dedicated over 200 hours to advancing a blood-sufficient India, organizing donation camps, conducting awareness sessions, and securing corporate partnerships.",
    img: "/static/experiences/bct 1.jpg",
    link: "https://codebase.com",
    tags: ["Community Outreach", "Event Management", "Social Impact"],
  },
  // {
  //   id: 3,
  //   title: "Freelance Web Developer",
  //   desc: "Provided web development services to various clients, focusing on custom solutions.",
  //   img: "/static/experiences/freelance.png",
  //   tags: ["WordPress", "PHP", "JavaScript", "CSS"],
  // },
  // {
  //   id: 4,
  //   title: "Research Assistant at University Lab",
  //   desc: "Conducted research on machine learning algorithms and published findings in a peer-reviewed journal.",
  //   img: "/static/experiences/universitylab.png",
  //   link: "https://universitylab.com",
  //   tags: ["Python", "Machine Learning", "Data Analysis"],
  // },
  // {
  //   id: 5,
  //   title: "IT Support Specialist at HelpDesk Inc.",
  //   desc: "Provided technical support and troubleshooting for a wide range of hardware and software issues.",
  //   img: "/static/experiences/helpdesk.png",
  //   tags: ["Technical Support", "Customer Service", "Networking"],
  // },
  // {
  //   id: 6,
  //   title: "Project Manager at BuildIt",
  //   desc: "Oversaw project timelines and coordinated between development teams and stakeholders.",
  //   img: "/static/experiences/buildit.png",
  //   link: "https://buildit.com",
  //   tags: ["Project Management", "Agile", "Scrum"],
  // },
];

export const allTags = [];

experiences.forEach((experience) => {
  experience.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
));

export default experiences;
