import Link from "next/link";
import React from "react";
import { footer } from "@/data/global";
import Image from "next/image";

function Footer() {
  return (
    <footer className="flex flex-col w-screen px-5 py-10 border-t border-fun-pink-darker z-5 bg-bg">
      <div className="w-full max-w-4xl m-auto grid grid-cols-2 sm:grid-cols-3 justify-between items-start">
        {footer.columns.map((item, index) => {
          return (
            <div key={index} className="text-left mb-5 sm:mb-0">
              <h4 className="uppercase text-fun-gray text-sm font-bold">
                {item.title}
              </h4>
              <div>
                {item.links.map((item, index) => {
                  return (
                    <div key={index} className="my-4">
                      {item.leavesWebsite ? (
                        <a
                          href={item.link}
                          target="_blank"
                          className="items-center flex"
                        >
                          {item.icon && (
                            <span className="pr-2 -mb-1">
                              <img src={item.icon} width={20} height={20} />
                            </span>
                          )}
                          {item.name}
                        </a>
                      ) : (
                        <Link href={item.link}>{item.name}</Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        
        {/* Subscribe Iframe on the right side */}
        <div className="col-span-1 flex justify-end sm:justify-center">
  <iframe
    src="https://iamsanidhyagarg.substack.com/embed"
    className="w-full sm:w-[480px] h-[240px] sm:h-[320px]" // Responsive width and height
    style={{ border: "none", background: "transparent" }}
    frameBorder="0"
    scrolling="no"
    title="Substack Subscription"
  ></iframe>
</div>

      </div>
    </footer>
  );
}

export default Footer;
