import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="relative text-white">
      <div className="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-neutral-100 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(127,130,187,0.3),rgba(255,255,255,0))] dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_90%_90%_at_50%_-5%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
