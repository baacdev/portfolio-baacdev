import React from "react";

const navItems = [
  {
    title: "Experiencia",
    label: "experiencia",
    url: "/#experiencia",
  },
  {
    title: "Proyectos",
    label: "proyectos",
    url: "/#proyectos",
  },
  {
    title: "Sobre mí",
    label: "sobre-mi",
    url: "/#sobre-mi",
  },
  {
    title: "Contacto",
    label: "contacto",
    url: "mailto:baacdev@gmail.com",
  },
];

const Header = () => {
  return (
    <header className="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-5">
      <nav className="flex px-3 sm:text-sm text-xs font-bold rounded-full text-gray-600 dark:text-gray-200 justify-center items-center">
        {navItems.map((link) => (
          <a
            key={link.label}
            className="relative block sm:px-4 px-2 py-2 transition hover:text-emerald-600 dark:hover:text-emerald-400"
            aria-label={link.label}
            href={link.url}
          >
            {link.title}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
