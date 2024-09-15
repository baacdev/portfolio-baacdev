import React from "react";
import LinkInline from "./LinkInline";

const EXPERIENCE = [
  {
    date: "Agosto 2023 - Noviembre 2023",
    title: "Desarrollador Full Stack con React y Node.js",
    company: "Restaurant Laurita",
    description:
      "El objetivo del proyecto fue implementar un sistema integral para solucionar problemas de pérdida de alimentos, falta de control de inventarios, y gestionar eficientemente las ventas y las ganancias.",
  },
  {
    date: "Marzo 2023 - Abril 2023",
    title: "Desarrollador Web",
    company: "Mi Primer Balón",
    description:
      "Desarrollé un sitio web para una pequeña empresa de fútbol, enfocada en promover sus servicios y eventos. El objetivo principal del proyecto fue crear una plataforma informativa y atractiva para sus clientes y aficionados",
  },
];

const ExperienceItem = ({ title, company, description, link, date }) => {
  return (
    <div className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4">
      <div className="relative pb-12 md:col-span-2">
        <div className="sticky top-0">
          <span className="text-emerald-400 -left-[42px] absolute rounded-full text-5xl">
            &bull;
          </span>
          <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
            {title}
          </h3>
          <h4 className="font-semibold text-xl text-gray-600 dark:text-white">
            {company}
          </h4>
          <time className="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">
            {date}
          </time>
        </div>
      </div>
      <div className="relative text-base flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3">
        {description}
        {link && (
          <LinkInline href={link}>
            Saber más{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 icon icon-tabler icon-tabler-chevron-right"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 6l6 6l-6 6" />
            </svg>
          </LinkInline>
        )}
      </div>
    </div>
  );
};

const ExperienceList = () => {
  return (
    <ol className="relative">
      {EXPERIENCE.map((experience, index) => (
        <li key={index}>
          <ExperienceItem {...experience} />
        </li>
      ))}
    </ol>
  );
};

export default ExperienceList;
