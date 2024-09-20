import { useRef } from "react";
import { useInView } from "framer-motion";

function Animation({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          display: "block",
          transform: isInView ? "none" : "translateY(50px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          WebkitTransform: isInView ? "none" : "translateY(50px)",
          MozTransform: isInView ? "none" : "translateY(50px)",
          msTransform: isInView ? "none" : "translateY(50px)",
          OTransform: isInView ? "none" : "translateY(50px)",
        }}
      >
        {children}
      </span>
    </section>
  );
}

export default Animation;
