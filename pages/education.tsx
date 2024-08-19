import Heading from "components/education/Heading";
import More from "components/projects/More";
import Page from "components/utility/Page";
import React from "react";
import Institutions from "@/components/education/Institutions";
import Clubs from "@/components/education/Clubs";

function projects() {
  return (
    <Page
      currentPage="Education"
      meta={{ title: "Education", desc: "Hi" }}
    >
      <Heading />
      <Institutions />
      <Clubs />
      <More />
    </Page>
  );
}

export default projects;
