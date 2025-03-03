import Heading from "components/publication/Heading";
import More from "components/projects/More";
import Page from "components/utility/Page";
import React from "react";
import Institutions from "@/components/education/Institutions";
import Clubs from "@/components/education/Clubs";
import Publication from "@/components/education/Publication";
import Venture from "@/components/publication/Ventureverse"
import Knowledgebase from "@/components/publication/Knowledgbase"


function projects() {
  return (
    <Page
      currentPage="Resources"
      meta={{ title: "Resources", desc: "Hi" }}
    >
      <Heading />
      <Knowledgebase />
      <Venture />
    </Page>
  );
}

export default projects;
