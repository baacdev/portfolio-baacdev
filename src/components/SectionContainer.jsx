import React from "react";
import Animation from "./Animation";

const SectionContainer = ({ className, id, children }) => {
  return (
    <>
      <Animation>
        <section
          id={id}
          data-section={id}
          className={`section ${className} scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl text-xl md:text-sm`}
        >
          {children}
        </section>
      </Animation>
    </>
  );
};

export default SectionContainer;
