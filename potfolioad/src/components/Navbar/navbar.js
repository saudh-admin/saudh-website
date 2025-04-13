import "../../App.scss";
import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useViewportScroll,
  useTransform,
} from "framer-motion";
import { Link } from 'react-router-dom';
import Cursor from "../Cursor";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [maxScrollY, setMaxScrollY] = useState(0);
  const [initialOffset, setInitialOffset] = useState(0);
  const scrollImgRef = useRef(null);
  const minY = initialOffset - window.innerHeight / 2;
  const translateY = Math.max(Math.min(-scrollY * 0.9, 0), -maxScrollY);
  const pageHintRef = useRef(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const [showHome, setShowHome] = useState(false);
  const [showHello, setShowHello] = useState(true);
  const [isPageLoading, setIsPageLoading] = useState(true);

  const handleHover = () => {
    setShowHome(true);
    setShowHello(false);
  };

  const handleHoverLeave = () => {
    setShowHome(false);
    setShowHello(true);
  };

  function toggleNav() {
    const nav = document.querySelector(".nav");
    nav.classList.toggle("nav-open");
    setIsNavOpen(!isNavOpen);
    const minX = 50;
    const maxX = window.innerWidth - 100;
    const minY = 50;
    const maxY = window.innerHeight - 100;
    const randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
    const randomY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;

    if (nav.classList.contains("nav-open")) {
      nav.style.clipPath = `circle(150% at ${randomX}px ${randomY}px)`;
    } else {
      nav.style.clipPath = `circle(0% at ${randomX}px ${randomY}px)`;
    }
  }

  const videoRef = useRef(null);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");
  const handleNavItemHover = (event) => {
    const navItemId = event.currentTarget.id;
    const videoUrl = navItemVideos[navItemId];
    console.log(`Hovering over ${navItemId}, video URL: ${videoUrl}`);
    setCurrentVideoUrl(videoUrl);
  };
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      console.log("Video element found");
      const playVideo = async () => {
        try {
          await video.play();
          console.log("Video is playing");
        } catch (error) {
          console.error("Error playing video:", error);
        }
      };
      video.oncanplay = () => {
        console.log("Video is ready to play");
        playVideo();
      };
      video.onerror = (error) => {
        console.error("Video error:", error);
      };
      if (currentVideoUrl) {
        video.src = currentVideoUrl;
        console.log("Video source set to:", currentVideoUrl);
      } else {
        video.src = '';
      }
    } else {
      console.log("Video element not found");
    }
  }, [currentVideoUrl]);
  useEffect(() => {
    const nav = document.querySelector(".nav");
    const navBtn = document.querySelector(".nav-btn");

    if (nav && navBtn) {
      navBtn.addEventListener("click", () => {
        if (nav.classList.contains("nav-open")) {
          const randomX = Math.random() * window.innerWidth;
          const randomY = Math.random() * window.innerHeight;
          nav.style.setProperty("--nav-close-x", `${randomX}px`);
          nav.style.setProperty("--nav-close-y", `${randomY}px`);

          setTimeout(() => {
            document.body.classList.remove("nav-open");
          }, 1200);
        } else {
          document.body.classList.add("nav-open");
        }
      });
    }
  }, []);
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
      const footerElement = footerRef.current;
      if (footerElement) {
        const footerRect = footerElement.getBoundingClientRect();
        const isFooterVisible = footerRect.top <= window.innerHeight;
        setHideStartLabel(isFooterVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [hideStartLabel, setHideStartLabel] = useState(false);
  const footerRef = useRef(null);
  const servicesHomeRef = useRef(null);
  const controls = useAnimation();
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const featureProjectsRef = useRef(null);
  const { scrollYProgress } = useViewportScroll();
  const xRange1 = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);
  const xRange2 = useTransform(scrollYProgress, [0, 1], ["-100%", "100%"]);

  const [animationIndex, setAnimationIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationInterval = useRef(null);
  const handleCategoryHover = (category) => {
    setHoveredCategory(category);
    if (category) {
      controls.start({ x: 10, transition: { yoyo: Infinity, duration: 1 } });
    } else {
      controls.stop();
      controls.set({ x: 0 });
    }
  };

  const startAnimation = () => {
    setIsAnimating(true);
    animateCategories();
  };

  const stopAnimation = () => {
    setIsAnimating(false);
    setAnimationIndex(0);
    clearInterval(animationInterval.current);
  };

  const animateCategories = () => {
    const categories = [
      "Branding",
      "Interface Design",
      "Development",
      "Digital Marketing",
      "Ongoing Support",
    ];
    let currentIndex = 0;

    const animationLoop = () => {
      const category = categories[currentIndex];
      handleCategoryHover(category);

      currentIndex = (currentIndex + 1) % categories.length;
      animationInterval.current = setTimeout(animationLoop, 3000);
    };

    animationLoop();
  };

  useEffect(() => {
    startAnimation();

    return () => {
      stopAnimation();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (window.scrollY > 0) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const scrollImgElement = scrollImgRef.current;
    if (scrollImgElement) {
      const circleElement = document.querySelector(".home-circle");
      const circleCenter =
        circleElement.offsetTop + circleElement.offsetHeight / 2;
      const maxScroll = circleCenter - window.innerHeight / 2 + 200;
      setInitialOffset(scrollImgElement.offsetTop);
      setMaxScrollY(maxScroll);
    }
  }, []);

  const handleIntersect = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const scrollImgElement = scrollImgRef.current;
        if (scrollImgElement) {
          setInitialOffset(scrollImgElement.offsetTop - window.innerHeight / 2);
        }
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.5,
    });

    const homeCircleElement = document.querySelector(".home-circle");
    if (homeCircleElement) {
      observer.observe(homeCircleElement);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverS = () => {
    // console.log(1)
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const navItemVideos = {
    'nav-item-services': 'services.mp4',
    'nav-item-projects': 'nav-video.mp4',
    'nav-item-us': 'services.mp4',
    'nav-item-journal': 'nav-video.mp4',
    'nav-item-contact-us': 'services.mp4',
  };

  const textRef = useRef(null);

  useEffect(() => {
    const textElement = document.getElementById("text-element");
    const spanElement = textRef.current;

    if (textElement && spanElement) {
      const { width, height } = spanElement.getBoundingClientRect();
      textElement.setAttribute("width", width);
      textElement.setAttribute("height", height);
      textElement.setAttribute("fontSize", "1");
    }
  }, []);



  return (
    <>
      <header className="header">
        <div className="container">
          <div class="page-hint visible" ref={pageHintRef}>
            {isPageLoading ? (
              <span class="hint__text hint__text--loading">
                Loading
                <div class="loading-circle"></div>
              </span>
            ) : (
              <>
                <span class="hint__text">Scroll</span>
                <svg aria-hidden="true" width="11" height="56" viewBox="0 0 11 56" class="icon-arrow-scroll">
                  <path d="M5.5,0 L5.5,56 M0,50.5 L5.5,56 L11,50.5" stroke="#000" stroke-width="1" fill="none"></path>
                </svg>
              </>
            )}
          </div>
          <div className="row row--items-middle">
            <div className="col-1 col-nav-btn">
            <Cursor />
              <button
                id="nav-btn"
                type="button"
                aria-label="menu"
                className="nav-btn d-block"
                onClick={toggleNav}
              >
                <span
                  aria-hidden="true"
                  className="nav-btn__bar nav-btn__bar-1"
                ></span>
                <span
                  aria-hidden="true"
                  className="nav-btn__bar nav-btn__bar-2"
                ></span>
                <span
                  aria-hidden="true"
                  className="nav-btn__bar nav-btn__bar-1 nav-btn__bar--closed"
                ></span>
                <span
                  aria-hidden="true"
                  className="nav-btn__bar nav-btn__bar-2 nav-btn__bar--closed"
                ></span>
              </button>
              
            </div>
            <div
              className="col-6 col-offset-2 col-md-3 col-offset-md-0 col-lg-1 col-logo"
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverLeave}
            >
              <a href="/" id="logo" className="header__logo">
                Saudh
              </a>
            </div>
            <div className="col-2 col-offset-1 col-header-title">
              <h6 className={`header__text header__text--title ${showHome ? 'show' : 'hide'}`}>
                Home
              </h6>
              <h6 className={`header__text header__text--title ${isNavOpen && !showHome ? 'show' : 'hide'}`}>
                Index
              </h6>
              <h6 className={`header__text header__text--title ${!isNavOpen && !showHome ? 'show' : 'hide'}`}>
                {window.location.pathname === "/" ? (
                  "Hello"
                ) : window.location.pathname.startsWith("/Services") ? (
                  <a href="/Services">
                    Services
                    {window.location.pathname.startsWith("/Services/") && (
                      <span className="subtitle">
                        {window.location.pathname.split("/")[2].replace(/-/g, " ")}
                      </span>
                    )}

                  </a>
                ) : window.location.pathname === "/projects" ? (
                  <Link to="/projects">Projects</Link>
                ) : window.location.pathname === "/us" ? (
                  <Link to="/us">Us</Link>
                ) : window.location.pathname === "/journal" ? (
                  <Link to="/journal">Journal</Link>
                ) : window.location.pathname === "/contact" ? (
                  <Link to="/contact">Contact</Link>
                ) : (
                  ""
                )}
              </h6>
            </div>
          </div>
          <div className="start-project">
            <div className="start-cont">
              <a href="/contact" className="nav-contact">
                <div className="start-circle">
                  <h3>Book a Demo</h3>
                  <i className="call-icon"></i>
                </div>
                <span
                  className={`start-label ${hideStartLabel ? "hide" : ""}`}
                ></span>
              </a>
            </div>
          </div>
        </div>
      </header>
      <nav id="nav" className={`nav ${isNavOpen ? "nav-open" : ""}`}>
        <div id="nav-container" className="nav-container">
          <div className="nav__logo">
            {/* <div className="nav__logo-text">
              <span ref={textRef}>Saudh</span>
              {currentVideoUrl && (
                <video
                  ref={videoRef}
                  src={currentVideoUrl}
                  autoPlay
                  loop
                  muted
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "fill",
                    clipPath: "url(#text-mask)",
                    WebkitClipPath: "url(#text-mask)",
                  }}
                />
              )}
            </div> */}
          </div>
          <svg width="100%" height="100%" viewBox="0 0 1000 1000">
            <defs>
              <clipPath id="text-mask" clipPathUnits="userSpaceOnUse">
                <text x="325" y="560" font-size="500" text-anchor="middle" stroke="#ddd" stroke-width="1" fill="none">AD</text>
              </clipPath>
            </defs>
          </svg>
          <div className="container">
            <div className="row row--items-middle nav-row">
              <ul
                id="nav-list"
                className="col-11 col-offset-1 col-md-6 col-offset-md-3 nav-list nopad"
              >
                <li
                  id="nav-item-services"
                  data-node-id="49"
                  className="nav-item"
                  onMouseEnter={handleNavItemHover}
                  onMouseLeave={() => setCurrentVideoUrl('')}
                >
                  <a
                    id="nav-link-services"
                    href="/Services"
                    className="nav-link"
                  >
                    <span
                      className="nav-link-label"
                      onMouseEnter={handleHoverS}
                      onMouseLeave={handleMouseLeave}
                    >
                      Services
                    </span>
                  </a>
                </li>
                <li
                  id="nav-item-projects"
                  className="nav-item"
                  style={{ "--nav-item-index": 1 }}
                  onMouseEnter={handleNavItemHover}
                  onMouseLeave={() => setCurrentVideoUrl('')}
                >
                  <motion.a
                    whileHover={{ x: 25 }}
                    id="nav-link-projects"
                    href="/projects"
                    className="nav-link"
                  >
                    <motion.span
                      whileHover={{ x: 25 }}
                      className="nav-link-label"
                    >
                      Projects
                    </motion.span>
                  </motion.a>
                </li>
                {/* <li
                  id="nav-item-us"
                  className="nav-item"
                  style={{ "--nav-item-index": 2 }}
                  onMouseEnter={handleNavItemHover}
                  onMouseLeave={() => setCurrentVideoUrl('')}
                >
                  <motion.a
                    whileHover={{ x: 25 }}
                    id="nav-link-us"
                    href="/us"
                    className="nav-link"
                  >
                    <motion.span
                      whileHover={{ x: 25 }}
                      className="nav-link-label"
                    >
                      Us
                    </motion.span>
                  </motion.a>
                </li> */}
                {/* <li
                  id="nav-item-journal"
                  className="nav-item"
                  style={{ "--nav-item-index": 3 }}
                  onMouseEnter={handleNavItemHover}
                  onMouseLeave={() => setCurrentVideoUrl('')}
                >
                  <motion.a
                    whileHover={{ x: 25 }}
                    id="nav-link-journal"
                    href="/journal"
                    className="nav-link"
                  >
                    <motion.span
                      whileHover={{ x: 25 }}
                      className="nav-link-label"
                    >
                      Journal
                    </motion.span>
                  </motion.a>
                </li> */}
                <li
                  id="nav-item-contact-us"
                  className="nav-item"
                  style={{ "--nav-item-index": 4 }}
                  onMouseEnter={handleNavItemHover}
                  onMouseLeave={() => setCurrentVideoUrl('')}
                >
                  <motion.a
                    whileHover={{ x: 25 }}
                    id="nav-link-contact-us"
                    href="/contact"
                    className="nav-link"
                  >
                    <motion.span
                      whileHover={{ x: 25 }}
                      className="nav-link-label"
                    >
                      Contact
                    </motion.span>
                  </motion.a>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </nav>
   
    </>
  )
}

export default Navbar