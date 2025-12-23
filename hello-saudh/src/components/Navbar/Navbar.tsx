import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Cursor from '../Cursor/Cursor';

const Navbar = () => {
  const [, setScrollY] = useState(0);
  const pageHintRef = useRef<HTMLDivElement>(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showHome, setShowHome] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  const urls = [
    {
      id: "services",
      name: "Services",
      url: "/Services",
      hasMotion: false,
    },
    {
      id: "contact-us",
      name: "Contact",
      url: "/contact",
      hasMotion: true
    },
    {
      id: "pricing",
      name: "Pricing",
      url: "/pricing",
      hasMotion: true
    }
  ];

  const handleScrollDown = () => {
    const currentScrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    let nextSectionY;

    if (currentScrollY === 0 || currentScrollY <= lastScrollPosition) {
      nextSectionY = Math.min(currentScrollY + windowHeight, documentHeight - windowHeight);
    } else {
      nextSectionY = Math.min(currentScrollY + windowHeight, documentHeight - windowHeight);

      if (nextSectionY >= documentHeight - windowHeight - 100) {
        nextSectionY = documentHeight - windowHeight;
      }
    }

    setLastScrollPosition(currentScrollY);

    window.scrollTo({
      top: nextSectionY,
      behavior: 'smooth'
    });
  };

  const handleHover = () => {
    setShowHome(true);
  };

  const handleHoverLeave = () => {
    setShowHome(false);
  };

  function toggleNav() {
    const nav = document.querySelector(".nav");
    if (!nav) return;
    
    nav.classList.toggle("nav-open");
    setIsNavOpen(!isNavOpen);
    
    const minX = 50;
    const maxX = window.innerWidth - 100;
    const minY = 50;
    const maxY = window.innerHeight - 100;
    const randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
    const randomY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;

    if (nav.classList.contains("nav-open")) {
      (nav as HTMLElement).style.clipPath = `circle(150% at ${randomX}px ${randomY}px)`;
    } else {
      (nav as HTMLElement).style.clipPath = `circle(0% at ${randomX}px ${randomY}px)`;
    }
  }

  useEffect(() => {
    const pageHint = pageHintRef.current;

    const updatePageHint = () => {
      if (pageHint) {
        pageHint.classList.add("loaded");
        setTimeout(() => {
          setIsPageLoading(false);
        }, 1000);
      }
    };

    const timer = setTimeout(updatePageHint, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const header = document.querySelector('.header');
      if (header) {
        if (window.scrollY > 0) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu on ESC key and click outside
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isNavOpen) {
        toggleNav();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (isNavOpen) {
        const nav = document.querySelector('.nav');
        const navBtn = document.querySelector('.nav-btn');
        const target = e.target as Node;
        
        if (nav && !nav.contains(target) && navBtn && !navBtn.contains(target)) {
          toggleNav();
        }
      }
    };

    if (isNavOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isNavOpen]);

  const getCurrentTitle = () => {
    const pathname = window.location.pathname;
    if (pathname === "/") return "Hello";
    if (pathname.startsWith("/Services/")) {
      const service = pathname.split("/")[2];
      return (
        <Link to="/Services" className="no-underline text-[#111]">
          Services
          {service && <span className="ml-2 text-sm">{service.split("-")[0]}</span>}
        </Link>
      );
    }
    if (pathname.startsWith("/Services")) return <Link to="/Services" className="no-underline text-[#111]">Services</Link>;
    if (pathname === "/projects") return <Link to="/projects" className="no-underline text-[#111]">Projects</Link>;
    if (pathname === "/us") return <Link to="/us" className="no-underline text-[#111]">Us</Link>;
    if (pathname === "/journal") return <Link to="/journal" className="no-underline text-[#111]">Journal</Link>;
    if (pathname === "/contact") return <Link to="/contact" className="no-underline text-[#111]">Contact</Link>;
    return "";
  };

  return (
    <>
      {/* Scroll Indicator - Separate from header */}
      <div
        ref={pageHintRef}
        onClick={handleScrollDown}
        className="page-hint fixed left-4 md:left-8 top-32 z-50 cursor-pointer flex flex-col items-center gap-2"
      >
        {isPageLoading ? (
          <span className="hint__text hint__text--loading flex items-center gap-2 text-xs md:text-sm">
            Loading
            <div className="loading-circle w-3 h-3 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
          </span>
        ) : (
          <>
            <span className="hint__text text-xs md:text-sm">Scroll</span>
            <svg aria-hidden="true" width="11" height="56" viewBox="0 0 11 56" className="icon-arrow-scroll">
              <path d="M5.5,0 L5.5,56 M0,50.5 L5.5,56 L11,50.5" stroke="#000" strokeWidth="1" fill="none"></path>
            </svg>
          </>
        )}
      </div>

      {/* Header */}
      <header className={`header fixed top-0 left-0 right-0 z-10000 h-[70px] bg-white transition-all duration-500 shadow-[0_2px_20px_rgba(0,0,0,0.08)] border-b border-black/5 ${isNavOpen ? 'bg-transparent! shadow-none! border-transparent!' : ''}`}>
        <div className="max-w-[1440px] mx-auto h-full px-4 md:px-8 flex items-center justify-between">
          {/* Left: Hamburger + Logo + Title */}
          <div className="flex items-center gap-4 md:gap-8">
            <Cursor />
            <button
              id="nav-btn"
              type="button"
              aria-label="menu"
              className="nav-btn flex flex-col items-center justify-center bg-transparent border-none cursor-pointer relative z-10001 w-10 h-10"
              onClick={toggleNav}
            >
              <span className={`block w-5 h-0.5 mb-1.5 bg-[#111] transition-all duration-300 ${isNavOpen ? 'opacity-0 -translate-y-2' : ''}`}></span>
              <span className={`block w-5 h-0.5 mt-1.5 bg-[#111] transition-all duration-300 ${isNavOpen ? 'opacity-0 translate-y-2' : ''}`}></span>
              <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-0.5 bg-white transition-all duration-500 ${isNavOpen ? 'opacity-100 rotate-45' : 'opacity-0'}`}></span>
              <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-0.5 bg-white transition-all duration-500 ${isNavOpen ? 'opacity-100 -rotate-45' : 'opacity-0'}`}></span>
            </button>

            <a 
              href="/" 
              className="flex items-center"
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverLeave}
            >
              <img 
                src="/saudh.png" 
                className="h-8 md:h-10 w-auto" 
                alt="Saudh Logo" 
              />
            </a>

            <div className="hidden lg:flex items-center">
              <h6 className={`text-sm font-light tracking-wider transition-all duration-500 ${showHome ? 'opacity-100' : 'opacity-0 absolute'}`} style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Home
              </h6>
              <h6 className={`text-sm font-light tracking-wider transition-all duration-500 ${isNavOpen && !showHome ? 'opacity-100' : 'opacity-0 absolute'}`} style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Index
              </h6>
              <h6 className={`text-sm font-light tracking-wider transition-all duration-500 ${!isNavOpen && !showHome ? 'opacity-100' : 'opacity-0 absolute'}`} style={{ fontFamily: 'Orbitron, sans-serif' }}>
                {getCurrentTitle()}
              </h6>
            </div>
          </div>

          {/* Right: Contact Button */}
          <a href="/contact">
            <button className="px-4 md:px-6 py-2 bg-[#ffd00a] text-gray-900 text-sm md:text-base rounded-2xl hover:bg-[#ffbd00] transition-colors whitespace-nowrap shadow-lg">
              Contact Us
            </button>
          </a>
        </div>
      </header>

      <nav id="nav" className={`nav fixed top-0 left-0 w-screen h-screen bg-white z-9998 flex items-center justify-center overflow-y-auto transition-all duration-450ms ${isNavOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`}>
        {/* Close button - visible in top right */}
        <button
          onClick={toggleNav}
          className={`fixed top-4 right-4 sm:top-8 sm:right-8 z-9999 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full hover:bg-gray-100 transition-all duration-300 ${isNavOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          aria-label="Close menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div id="nav-container" className={`nav-container flex flex-col justify-center items-center h-full relative z-9998 px-4 sm:px-6 md:px-8 pt-[70px] w-[95%] sm:w-[90%] max-w-[1200px] text-center transition-all duration-500 ${isNavOpen ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-8'}`}>
          <div className="nav-row">
            <ul id="nav-list" className="nav-list flex flex-col justify-center list-none p-0 m-0 items-start relative z-100 bg-transparent">
              {urls.map((url, index) => (
                <li
                  key={index}
                  className="nav-item py-2 sm:py-3 md:py-4"
                  style={{ '--nav-item-index': index } as React.CSSProperties}
                >
                  {url.hasMotion ? (
                    <motion.a
                      whileHover={{ x: 25 }}
                      href={url.url}
                      className="nav-link text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#111] no-underline transition-all"
                      onClick={toggleNav}
                    >
                      <motion.span whileHover={{ x: 25 }} className="nav-link-label">
                        {url.name}
                      </motion.span>
                    </motion.a>
                  ) : (
                    <a
                      href={url.url}
                      className="nav-link text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#111] no-underline hover:translate-x-6 transition-transform"
                      onClick={toggleNav}
                    >
                      <span className="nav-link-label">{url.name}</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
