import { useState, useEffect, useCallback } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

import { FiSun, FiMoon } from "react-icons/fi";
import {
  FiHome,
  FiCompass,
  FiInfo,
  FiGrid,
  FiCalendar,
  FiAward,
  FiUsers,
  FiImage
} from "react-icons/fi";

import logo from "/Images/Trasnparent12 1.png";
import menu from "/Images/menu.svg";
import close from "/Images/close.svg";

import ImageButton from "../subComponents/ImageButton";

const navLinks = [
  { label: "Home", route: "/", icon: FiHome, sectionId: "home" },
  { label: "Initiatives", route: "/#initiativesPage", icon: FiCompass, sectionId: "initiativesPage" },
  { label: "About", route: "/about", icon: FiInfo, sectionId: "aboutPage" },
  { label: "Domains", route: "/domain", icon: FiGrid, sectionId: "domain" },
  { label: "Events", route: "/events", icon: FiCalendar, sectionId: "eventPage" },
  // { label: "Achievements", route: "/achievements", icon: FiAward },
  { label: "Top Performers", route: "/top-performers", icon: FiAward },
  { label: "Members", route: "/members", icon: FiUsers },
  { label: "Gallery", route: "/gallery", icon: FiImage, sectionId: "galleryPage" },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

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
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -60% 0px", // Trigger when section occupies the upper-middle viewport
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id) {
            setActiveSection(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Give the DOM a tiny moment to render before observing
    const timer = setTimeout(() => {
      navLinks.forEach(({ sectionId }) => {
        if (sectionId) {
          const el = document.getElementById(sectionId);
          if (el) observer.observe(el);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

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

  const checkIsActive = (route, sectionId) => {
    const cleanRoute = route.split("#")[0];

    // If we are on the Home page ("/")
    if (location.pathname === "/") {
      // 1. Prioritize URL hash if present
      if (location.hash) {
        const routeHash = route.includes("#") ? "#" + route.split("#")[1] : "";
        if (routeHash) {
          return location.hash === routeHash;
        }
        if (sectionId === "home") {
          return location.hash === "#home";
        }
        return false;
      }

      // 2. If no URL hash, use intersection observer's activeSection
      if (sectionId) {
        if (sectionId === "home") {
          return activeSection === "home" || !activeSection || activeSection === "";
        }
        return activeSection === sectionId;
      }

      // 3. Fallback: if no sectionId, check if cleanRoute matches "/"
      return cleanRoute === "/";
    }

    // If we are on any other subpage, just match the pathname
    return location.pathname === cleanRoute;
  };

  const handleLinkClick = (e, route, sectionId) => {
    const isAnchor = route.includes("#");

    if (location.pathname === "/") {
      if (sectionId) {
        e.preventDefault();
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
      closeMenu();
    } else {
      if (isAnchor) {
        e.preventDefault();
        navigate(route);
      }
      closeMenu();
    }
  };

  const renderLinks = (handler = () => {}, isMobile = false) =>
    navLinks.map(({ label, route, icon: Icon, sectionId }) => {
      const isActive = checkIsActive(route, sectionId);

      const baseClass = isMobile
        ? "text-lg font-bold tracking-wide transition-all duration-300 pl-4 py-3 border-l-2 w-full text-left rounded-r-lg flex items-center gap-3"
        : "text-[14px] lg:text-[15px] xl:text-base font-semibold tracking-wide transition-all duration-200 flex items-center gap-1.5 hover:text-orange-500 hover:scale-105 duration-200";

      const activeClass = isMobile
        ? "text-orange-500 border-orange-500 bg-orange-500/5 font-extrabold"
        : "text-orange-500";

      const inactiveClass = isMobile
        ? "text-white/85 border-transparent hover:bg-white/5"
        : "text-white/80";

      const isAnchor = route.includes("#");
      const LinkComponent = isAnchor ? "a" : NavLink;
      const linkProps = isAnchor ? { href: route } : { to: route };

      return (
        <LinkComponent
          key={label}
          {...linkProps}
          className={
            isAnchor
              ? `${baseClass} ${isActive ? activeClass : inactiveClass}`
              : () => `${baseClass} ${isActive ? activeClass : inactiveClass}`
          }
          onClick={(e) => {
            handleLinkClick(e, route, sectionId);
            handler();
          }}
        >
          {Icon && (
            <Icon
              className={`transition-colors duration-300 ${
                isMobile
                  ? "w-5 h-5 flex-shrink-0"
                  : "w-4 h-4 opacity-80"
              } ${isActive ? "text-orange-500" : ""}`}
            />
          )}
          <span>{label}</span>
        </LinkComponent>
      );
    });

  return (
    <>
      <nav className="fixed top-0 left-0 w-full py-3 px-6 z-50 bg-black/40 border-b border-white/5 flex items-center justify-between backdrop-blur-md transition-all duration-300">
        <div className="flex items-center">
          <Link to="/" onClick={closeMenu} className="flex items-center">
            <img src={logo} alt="logo" className="h-10 md:h-12 w-auto transition-transform hover:scale-105" />
          </Link>
        </div>

        <div className="hidden md:flex gap-5 lg:gap-8 items-center">
          {renderLinks()}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 border border-textColor1 rounded-lg hover:bg-textColor1/10 hover:shadow-sm hover:shadow-textColor1 hover:scale-105 transition-all duration-200 flex items-center justify-center cursor-pointer"
            aria-label="Toggle Theme"
          >
            {dark ? (
              <FiMoon className="w-5 h-5 text-textColor1" />
            ) : (
              <FiSun className="w-5 h-5 text-textColor1" />
            )}
          </button>

          <div className="md:hidden">
            <ImageButton
              imageSource={menu}
              func={toggleMenu}
              aria-label="Open Menu"
            />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Menu Sidebar Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-[#0B1215]/95 border-l border-white/10 backdrop-blur-md z-50 flex flex-col p-6 shadow-2xl transition-transform duration-300 ease-in-out md:hidden overflow-y-auto ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header inside sidebar with close button */}
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10 flex-shrink-0">
          <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 tracking-wider">
            E LABS
          </span>
          <button
            onClick={closeMenu}
            className="p-2 border border-white/10 rounded-lg hover:bg-white/10 transition-colors cursor-pointer flex items-center justify-center"
            aria-label="Close Mobile Menu"
          >
            <img src={close} alt="close" className="w-5 h-5 filter invert" />
          </button>
        </div>

        {/* Links container */}
        <div className="flex flex-col space-y-2 flex-grow">
          {renderLinks(closeMenu, true)}
        </div>
      </div>
    </>
  );
};

export default Navbar;