import Heading from "components/publication/Heading";
import More from "components/projects/More";
import Page from "components/utility/Page";
import React from "react";
import Institutions from "@/components/education/Institutions";
import Clubs from "@/components/education/Clubs";
import Publication from "@/components/education/Publication";
import Venture from "@/components/publication/Ventureverse"
import Ventures from "@/components/publication/VV2"

function projects() {
  return (
    <Page
      currentPage="Publications"
      meta={{ title: "Publications", desc: "Hi" }}
    >
      <Heading />
      <Venture />
      <Ventures />
    </Page>
  );
}

export default projects;
