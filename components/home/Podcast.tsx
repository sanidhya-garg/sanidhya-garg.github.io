import React from "react";
import { podcasts } from "@/data/content/home";

function Podcasts() {
  return (
    <div className="flex flex-col md:flex-row justify-between relative">
      <div className="flex-1 md:pr-10 mb-10 md:mb-0">
        <h2 className="relative text-3xl w-full text-center md:text-left font-bold mb-10">
          Tune in to My Podcast
          <br />
          As featured on "Value Seller Talks with First-Time Entrepreneurs"
          <img
            className="sqD bottom-[-80px] left-[-50px] lg:bottom-[-50px] lg:left-[-35px] z-[-10]"
            src="/static/doodles/skills/laptop.svg"
            alt="Decorative laptop"
          />
          <img
            className="sqD hidden md:block top-[140px] right-0 lg:top-[105px]"
            src="/static/doodles/skills/coding.svg"
            alt="Decorative coding"
          />
          <img
            className="sqD hidden md:block top-[200px] right-[50px] lg:top-[170px] lg:right-[50px]"
            src="/static/doodles/skills/youtube.svg"
            alt="Decorative YouTube"
          />
          <img
            className="sqD top-[-15px] right-[-15px]"
            src="/static/doodles/skills/fillStar.svg"
            alt="Decorative star"
          />
        </h2>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div style={{ padding: "56.25% 0 0 0", position: "relative", width: "100%", maxWidth: "800px" }}>
          <iframe
            src="https://player.vimeo.com/video/1000009942?autoplay=1&muted=1&badge=0&autopause=0&player_id=0&app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            title="Podcast"
          />
        </div>
      </div>
    </div>
  );
}

export default Podcasts;
