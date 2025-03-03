import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Page from "@/components/utility/Page";
// import Posts from "@/components/home/Posts";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";
import Experiences from "@/components/experience/Experience";
import Podcasts from "@/components/home/Podcast";
import Linkedin from "@/components/home/Linkedin";
import Institutions from "@/components/education/Institutions";
import Publication from "@/components/education/Publication";
import Banner from "@/components/home/publicationbanner";
import Startup from "@/components/home/startup"
// import { allPosts } from "contentlayer/generated";
// import { GetStaticProps } from "next";

// export const getStaticProps: GetStaticProps = async () => {
//   return {
//     props: {
//       allPosts: allPosts.sort(({date: dateA}: any, {date: dateB}: any) => dateB - dateA),
//     },
//   };
// }

export default function Home() {
  return (
    <Page currentPage="Home" meta={{ desc: "I'm a passionate web developer and designer coding beautiful websites and apps." }}>
      <Hero />
      <div className="mt-20 space-y-32">
        <Podcasts />
        <div className="mb-0"> {/* Adjust the margin-bottom if needed */}
          <Experiences />
        </div>
        <Institutions />
        <Startup />
        <Projects />
        <Banner />
        <Linkedin />
        
        {/* <Posts allPosts={allPosts} /> */}
      </div>
      <CTA />
    </Page>
  );
}
