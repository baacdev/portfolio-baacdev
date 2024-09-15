import LinkedInIcon from "../components/icons/LinkedIn";
import MailIcon from "../components/icons/Mail";
import React from "react";

const SocialPill = () => {
  return (
    <div className="space-x-5 text-base">
      <a
        href="mailto:baacdev@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        role="link"
        className="inline-flex items-center justify-center cursor-pointer gap-2 px-4 py-1.5 transition border border-gray-300 rounded-full bg-neutral-950 dark:border-neutral-700/80 text-white focus-visible:ring-yellow-500/80 text-md hover:bg-gray-600 group max-w-fit hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
      >
        <MailIcon className="size-4" />
        <span>Contáctame</span>
      </a>
      <a
        href="https://www.linkedin.com/in/baacdev/"
        target="_blank"
        rel="noopener noreferrer"
        role="link"
        className="inline-flex items-center justify-center cursor-pointer gap-2 px-4 py-1.5 transition border border-gray-300 rounded-full bg-neutral-950 dark:border-neutral-700/80 text-white focus-visible:ring-yellow-500/80 text-md hover:bg-gray-600 group max-w-fit hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
      >
        <LinkedInIcon className="size-4" />
        <span>LinkedIn</span>
      </a>
    </div>
  );
};

export default SocialPill;
