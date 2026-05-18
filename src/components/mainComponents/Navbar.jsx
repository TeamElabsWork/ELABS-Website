

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "/Images/Trasnparent12 1.png";
import day from "/Images/Day.png";
import menu from "/Images/menu.svg";
import close from "/Images/close.svg";

import ImageButton from "../subComponents/ImageButton";

const navLinks = [
  { href: "#home", label: "Home", route: "/" },
  { href: "#initiativesPage", label: "Initiatives", route: "/#initiativesPage" },
  { href: "#aboutPage", label: "About", route: "/about" },
  { href: "#domain", label: "Domains", route: "/domain" },
  { href: "#eventPage", label: "Events", route: "/events" },
  { href: "#membersPage", label: "Members", route: "/members" },
  { href: "#galleryPage", label: "Gallery", route: "/gallery" },
  // { href: "#feedbackPage", label: "Feedback", route: "/feedback" },
  // { href: "#recruitmentPage", label: "Recruitment", route: "/recruitment" },
];

const Navbar = () => {
  const location = useLocation();

  const [dark, setDark] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let section = "";

      navLinks.forEach(({ href }) => {
        const el = document.querySelector(href);

        if (!el) return;

        const top = el.offsetTop - 100;
        const height = el.offsetHeight;

        if (scrollY >= top && scrollY < top + height) {
          section = href.substring(1);
        }
      });

      if (section !== activeSection) {
        setActiveSection(section);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  
  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved) {
      const isDark = saved === "dark";
      document.documentElement.classList.toggle("dark", isDark);
      setDark(isDark);
    }
  }, []);

  const toggleMenu = () => {
    if (!isMenuOpen) window.scrollTo(0, 0);
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => setIsMenuOpen(false);

  const toggleTheme = () => {
    const next = !dark ? "dark" : "light";
    document.documentElement.classList.toggle("dark", !dark);
    setDark(prev => !prev);
    localStorage.setItem("theme", next);
  };

  const renderLinks = (handler = () => {}) =>
    navLinks.map(({ href, label, route }) => {
      const isHome = location.pathname === "/";
      const target = isHome ? href : route;
      const useRouterLink = route !== "/";

      if (useRouterLink) {
        return (
          <Link
            key={href}
            to={route}
            className={`text-2xl hover:text-textColor1 ${
              location.pathname === route ? "text-textColor1" : ""
            }`}
            onClick={() => {
              handler();
              closeMenu();
            }}
          >
            {label}
          </Link>
        );
      }

      return (
        <a
          key={href}
          href={target}
          className={`text-[22px] dark:font-medium hover:text-textColor2 dark:hover:text-textColor1 ${
            activeSection === href.substring(1) ? "text-textColor1" : ""
          }`}
          onClick={() => {
            handler();
            closeMenu();
          }}
        >
          {label}
        </a>
      );
    });

  return (
    <>
      <nav className="fixed top-0 left-0 w-full py-4 px-4 z-50 dark:bg-[#ffdab9]/50 transparent flex items-center justify-between backdrop-blur-3xl shadow-sm transition-all duration-300">
        <div className="border border-textColor1 rounded-lg backdrop-blur-lg my-2">
          <Link to="/#home" onClick={closeMenu}>
            <img src={logo} alt="logo" className="h-12 w-auto" />
          </Link>
        </div>

        <div className="hidden md:flex gap-10 items-center text-xl scale-85 dark:text-black">
          {renderLinks()}
        </div>

        <div className="flex items-center gap-2">
          <ImageButton imageSource={day} func={toggleTheme} />

          <div className="md:hidden">
            <ImageButton
              imageSource={isMenuOpen ? close : menu}
              func={toggleMenu}
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            />
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 backdrop-blur-3xl z-40 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "hidden translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full text-2xl space-y-8 dark:text-black overflow-y-auto">
          {renderLinks(closeMenu)}
        </div>
      </div>
    </>
  );
};

export default Navbar;