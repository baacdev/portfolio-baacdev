import React from "react";
import Badge from "../components/Badge";
import SocialPill from "../components/SocialPill";

const Hero = () => {
  return (
    <div className="max-w-xl">
      <div className="flex gap-4 mb-4">
        <img
          className="rounded-full shadow-lg size-16"
          src="https://play-lh.googleusercontent.com/EnxJKkoXzxrmA0RA0gUie0K4gvbRLrQhpflyMzwSMvCfk2FA6o9sBLzfWtG5qLzIBIc"
          alt="Brandon Acosta"
        />
        <a
          href="https://www.linkedin.com/in/baacdev/"
          target="_blank"
          rel="noopener"
          className="flex items-center transition md:justify-center"
        >
          <Badge />
        </a>
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-white">
        Hola, soy Brandon Acosta
      </h1>
      <p className="mt-6 text-xl dark:[&>strong]:text-emerald-400 [&>strong]:font-semibold text-gray-300">
        +1 año de experiencia. <strong>Ingeniero de Software</strong>, de
        Arequipa, Peru 🇵🇪. Especializado en el desarrollo de aplicaciones web
        únicas.
      </p>
      <div className="flex flex-wrap gap-4 mt-8">
        <SocialPill />
      </div>
    </div>
  );
};

export default Hero;
