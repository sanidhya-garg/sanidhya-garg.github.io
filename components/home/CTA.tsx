import React, { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

function CTA() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", {
        styles: { branding: { brandColor: "#00c7ff" } },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  return (
    <div className="pt-36 relative w-full">
      <img className="w-30 m-auto mb-2" src="/static/doodles/lineBreak.svg" />
      <div className="pt-14 pb-40">
        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Interested in Working Together?
        </h2>
        <button
          data-cal-namespace="15min"
          data-cal-link="sanidhya-garg/15min"
          data-cal-config='{"layout":"month_view"}'
          className="cursor-pointer font-bold whitespace-nowrap mt-6 px-8 py-3 text-white border-2 rounded-full border-white bg-bg hover:bg-fun-pink hover:border-fun-pink transition-colors"
        >
          Get in Touch
        </button>
      </div>

      <img
        className="sqD min-w-[800px] bottom-[-100px] left-1/2 sm:bottom-[-150px] -translate-x-1/2 object-cover sm:min-w-[1100px]"
        style={{ zIndex: "-10" }}
        src="/static/doodles/hero/fancyLines.svg"
      />
    </div>
  );
}

export default CTA;
