import './project.scss';
import { motion, useAnimation, useViewportScroll, useTransform } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';
import ProjectCard from './projectcard';

const Projects = () => {
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

    const handleHover = () => {
        setShowHome(true);
        setShowHello(false);
    };

    const handleHoverLeave = () => {
        setShowHome(false);
        setShowHello(true);
    };


    const toggleNav = () => {
        document.body.classList.toggle('nav-open');
        setIsNavOpen(!isNavOpen);
    };

    const videoRef = useRef(null);
    const [currentVideoUrl, setCurrentVideoUrl] = useState('');

    const handleNavItemHover = (videoUrl) => {
        setCurrentVideoUrl(videoUrl);
    };




    const [hideStartLabel, setHideStartLabel] = useState(false);
    const footerRef = useRef(null);
    const { scrollYProgress } = useViewportScroll();
    const xRange1 = useTransform(scrollYProgress, [0, 1], ['100%', '-100%']);
    const xRange2 = useTransform(scrollYProgress, [0, 1], ['-100%', '100%']);


    const [animationIndex, setAnimationIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const animationInterval = useRef(null);

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
        const categories = ['Branding', 'Interface Design', 'Development', 'Digital Marketing', 'Ongoing Support'];
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

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const scrollImgElement = scrollImgRef.current;
        if (scrollImgElement) {
            const circleElement = document.querySelector('.home-circle');
            const circleCenter = circleElement.offsetTop + circleElement.offsetHeight / 2;
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

        const homeCircleElement = document.querySelector('.home-circle');
        if (homeCircleElement) {
            observer.observe(homeCircleElement);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    const [hoveredCategory, setHoveredCategory] = useState(null);

    const handleCategoryHover = async (category) => {
        setHoveredCategory(category);

    };

    const serviceHeadinggRef = useRef(null);

    const [isLoading, setIsLoading] = useState(true);
    const [showImage, setShowImage] = useState(false);
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        // Simulate loading delay
        setTimeout(() => {
            setIsLoading(false);
            setTimeout(() => {
                setShowImage(true);
                setTimeout(() => {
                    setShowBackground(true);
                }, 1000);
            }, 1000);
        }, 2000);
    }, []);

    const [selectedFilter, setSelectedFilter] = useState('All');
    const [projects, setProjects] = useState([
        { id: 1, title: 'Project 1', description: 'Description 1', category: 'Branding', image: 'branding.webp' },
        { id: 2, title: 'Project 2', description: 'Description 2', category: 'UX/UI Design', image: 'contact.webp' },
        { id: 3, title: 'Project 3', description: 'Description 3', category: 'Development', image: 'dev.webp' },
        { id: 4, title: 'Project 4', description: 'Description 1', category: 'Branding', image: 'branding.webp' },
        { id: 5, title: 'Project 5', description: 'Description 2', category: 'UX/UI Design', image: 'contact.webp' },
        { id: 6, title: 'Project 6', description: 'Description 3', category: 'Development', image: 'dev.webp' },
        // Add more project objects as needed
    ]);

    const handleFilterClick = (filter) => {
        setSelectedFilter(filter);
    };

    const filteredProjects = selectedFilter === 'All'
        ? projects
        : projects.filter(project => project.category === selectedFilter);




    return <>
        <header className="header">
            <div className="container">
                <div class="page-hint " ref={pageHintRef}>
                    <span class="hint__text hint__text--loading"></span>
                    <svg aria-hidden="true" width="11" height="56" viewBox="0 0 11 56" class="icon-arrow-scroll">
                        <path d="M5.5,0 L5.5,56 M0,50.5 L5.5,56 L11,50.5" stroke="#000" stroke-width="1" fill="none"></path>
                    </svg>
                </div>
                <div className="row row--items-middle">
                    <div className="col-1 col-nav-btn">
                        <button id="nav-btn" type="button" aria-label="menu" className="nav-btn d-block" onClick={toggleNav}>
                            <span aria-hidden="true" className="nav-btn__bar nav-btn__bar-1"></span>
                            <span aria-hidden="true" className="nav-btn__bar nav-btn__bar-2"></span>
                            <span aria-hidden="true" className="nav-btn__bar nav-btn__bar-1 nav-btn__bar--closed"></span>
                            <span aria-hidden="true" className="nav-btn__bar nav-btn__bar-2 nav-btn__bar--closed"></span>
                        </button>
                    </div>
                    <div className="col-6 col-offset-2 col-md-3 col-offset-md-0 col-lg-1 col-logo" onMouseEnter={handleHover} onMouseLeave={handleHoverLeave}>
                        <a href="/" id="logo" className="header__logo">
                            AD
                        </a>
                    </div>
                    <div className="col-2 col-offset-1 col-header-title">
                        {!isNavOpen ? (
                            <>
                                <h1 className={`header__text header__text--title ${showHello ? 'show' : 'hide'}`}>Hello</h1>
                                <h1 className={`header__text header__text--title ${showHome ? 'show' : 'hide'}`}>Home</h1>
                            </>
                        ) : (
                            <>
                                <h1 className={`header__text header__text--title ${showHello ? 'show' : 'hide'}`}>Index</h1>
                                <h1 className={`header__text header__text--title ${showHome ? 'show' : 'hide'}`}>Home</h1>
                            </>
                        )}
                    </div>
                </div>
                <div className='start-project'>
                    <div className='start-cont'>
                        <a href="/contact" className='nav-contact'>
                            <div className='start-circle'></div>
                            <span className={`start-label ${hideStartLabel ? 'hide' : ''}`}>Start a project</span>

                        </a>
                    </div>
                </div>
            </div>

        </header>
        <nav id="nav" className={`nav ${isNavOpen ? 'nav-open' : ''}`}>
            <div id="nav-container" className="nav-container">
                <div className="nav__logo">
                    <div className="nav__logo-text">AD</div>
                    <div className="nav__logo-video">
                        <video ref={videoRef} loop muted></video>
                    </div>
                </div>
                <div className="container">
                    <div className="row row--items-middle nav-row">
                        <ul id="nav-list" className="col-11 col-offset-1 col-md-6 col-offset-md-3 nav-list nopad">
                            <li id="nav-item-services" data-node-id="49" className="nav-item">
                                {/* onMouseEnter={() => handleNavItemHover('/assets/videos/services.mp4')} */}
                                <motion.a whileHover={{ x: 25 }} id="nav-link-services" href="/Services" className="nav-link">
                                    <motion.span whileHover={{ x: 25 }} className="nav-link-label">Services</motion.span>
                                </motion.a>
                            </li>
                            <li id="nav-item-projects" data-node-id="7" className="nav-item">
                                <motion.a whileHover={{ x: 25 }} id="nav-link-projects" data-mask-video="/files/24b3e92e/projects.mp4" data-header-image="/assets/w1700-s5-q75-p1/f0b76847/viviana_rishe_j2330n6bg3i_unsplash.jpg" href="/projects" className="nav-link">
                                    <motion.span whileHover={{ x: 25 }} className="nav-link-label">Projects</motion.span>
                                </motion.a>
                            </li>
                            <li id="nav-item-us" data-node-id="4" className="nav-item">
                                <motion.a whileHover={{ x: 25 }} id="nav-link-us" data-mask-video="/files/24b3e92e/us.mp4" href="/us" className="nav-link">
                                    <motion.span whileHover={{ x: 25 }} className="nav-link-label">Us</motion.span>
                                </motion.a>
                            </li>
                            <li id="nav-item-journal" data-node-id="10" className="nav-item">
                                <motion.a whileHover={{ x: 25 }} id="nav-link-journal" data-mask-video="/files/bdbab894/blog.mp4" href="/journal" className="nav-link">
                                    <motion.span whileHover={{ x: 25 }} className="nav-link-label">Journal</motion.span>
                                </motion.a>
                            </li>
                            <li id="nav-item-contact-us" data-node-id="12" className="nav-item">
                                <motion.a whileHover={{ x: 25 }} id="nav-link-contact-us" data-mask-video="/files/bdbab894/contact.mp4" data-header-image="/assets/w1700-s5-q75-p1/42b28034/luca_bravo_9l_326fiszk_unsplash.jpg" href="/contact" className="nav-link">
                                    <motion.span whileHover={{ x: 25 }} className="nav-link-label">Contact</motion.span>
                                </motion.a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </nav>

        <main className="main-content">

            <div className="projects-heading">
                <div className={`proj-logo ${isLoading ? 'loading' : ''} ${showImage ? 'show-image' : ''} ${showBackground ? 'show-background' : ''}`}> <svg className="proj-text" viewBox="0 0 200 100">
                    <defs>
                        <clipPath id="text-clip">
                            <text x="50%" y="80" fontSize="100" fontWeight="bold" textAnchor="middle">AD</text>
                        </clipPath>
                    </defs>
                    <image xlinkHref="marketing.webp" width="100%" height="100%" clipPath="url(#text-clip)" preserveAspectRatio="xMidYMid slice" />
                </svg>
                    <div className="proj-background"></div>
                    <svg className="proj-outline" viewBox="0 0 200 100">
                        <text x="50%" y="80" fontSize="100" fontWeight="bold" textAnchor="middle">AD</text>
                    </svg>
                    <h2 className="projects-title">Projects</h2>
                </div>
                <div class="project-filters">

                    <div class="row justify-content-center">
                        <div class="col-md-4 filter-title-column">
                            <h5 class="filter-title">Filters</h5>
                        </div>
                        <div class="col-md-2 filter-column">
                            <ul>
                                <li className={selectedFilter === 'All' ? 'active' : ''}
                                    onClick={() => handleFilterClick('All')}>All</li>
                                <li class={selectedFilter === 'Branding' ? 'active' : ''}
                                    onClick={() => handleFilterClick('Branding')}>
                                    Branding
                                </li>
                                <li class={selectedFilter === 'UX/UI Design' ? 'active' : ''}
                                    onClick={() => handleFilterClick('UX/UI Design')}>
                                    UX/UI Design
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-2 filter-column">
                            <ul>
                                <li class={selectedFilter === 'Photo/Video Production' ? 'active' : ''}
                                    onClick={() => handleFilterClick('Photo/Video Production')}>
                                    Photo/Video Production
                                </li>
                                <li class={selectedFilter === 'Development' ? 'active' : ''}
                                    onClick={() => handleFilterClick('Development')}>
                                    Development
                                </li>
                                <li class={selectedFilter === 'SaaS Development' ? 'active' : ''}
                                    onClick={() => handleFilterClick('SaaS Development')}>
                                    SaaS Development
                                </li>
                                <li class={selectedFilter === 'Marketing' ? 'active' : ''}
                                    onClick={() => handleFilterClick('Marketing')}>
                                    Marketing
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <div className="project-grid">
                {filteredProjects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

        </main>
    </>
}

export default Projects