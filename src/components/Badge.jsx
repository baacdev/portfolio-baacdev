import React from "react";

const Badge = () => {
  return (
    <div className="flex items-center">
      <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
        <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span>
        <div className="inline-flex items-center justify-center w-full px-4 py-2 text-sm text-gray-800 bg-[rgb(222,223,234)] rounded-full cursor-pointer dark:bg-[rgb(31,31,46)] dark:text-white/80 backdrop-blur-3xl whitespace-nowrap">
          Disponible para trabajar
        </div>
      </span>
    </div>
  );
};

export default Badge;
