import React from "react";

const personalImageAlt = "Brandon Acosta";

const AboutSection = () => {
  return (
    <article className="flex flex-col items-start justify-center gap-8 text-gray-700 dark:text-gray-300 md:flex-row">
      <div className="text-base [&>p]:mb-4 [&>p>strong]:text-emerald-700 dark:[&>p>strong]:text-emerald-300 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1">
        <p>
          Soy de Arequipa-Perú,{" "}
          <strong>
            tengo más de un año de experiencia como desarrollador de software
          </strong>
          .
        </p>

        <p>
          Mi gusto por la tecnología me ha llevado a especializarme en el{" "}
          <strong>desarrollo web</strong>, donde disfruto creando soluciones
          innovadoras y eficientes. Trabajo principalmente con tecnologías como{" "}
          <strong>React, Node.js y MongoDB</strong>.
        </p>
        <p>
          Siempre estoy buscando aprender y adoptar nuevas herramientas y
          prácticas que mejoren la calidad de mi trabajo.
        </p>
      </div>

      <img
        src="https://media.artsper.com/artwork/2126511_1_m.jpg"
        alt={personalImageAlt}
        className="order-1 object-cover size-48 p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black dark:bg-transparent ring-1 ring-black/70 dark:ring-white/50"
      />
    </article>
  );
};

export default AboutSection;
