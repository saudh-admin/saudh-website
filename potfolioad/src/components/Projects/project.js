import './project.scss';
import React, { useState, useEffect, useRef } from 'react';
import ProjectCard from './projectcard';
import Navbar from '../Navbar/navbar';

const Projects = () => {
    const serviceHeadinggRef = useRef(null);

    const [isLoading, setIsLoading] = useState(true);
    const [showImage, setShowImage] = useState(false);
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        const serviceHeadinggElement = serviceHeadinggRef.current;
        if (serviceHeadinggElement) {
            serviceHeadinggElement.classList.add('service-headingg-curtain');
        }
    
    
        setTimeout(() => {
            setShowImage(true);
        }, 500);
    
    
        setTimeout(() => {
            setShowBackground(true);
        }, 800);
    }, []);
    
    
    
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
            setTimeout(() => {
                setShowImage(true);
                setTimeout(() => {
                    setShowBackground(true);
                }, 500);
            }, 500);
        }, 800);
    }, []);

    const [selectedFilter, setSelectedFilter] = useState('All');
    const [projects, setProjects] = useState([
        { id: 1, title: 'Project 1', description: 'Description 1', category: 'Branding', image: 'branding.webp' },
        { id: 2, title: 'Project 2', description: 'Description 2', category: 'UX/UI Design', image: 'contact.webp' },
        { id: 3, title: 'Project 3', description: 'Description 3', category: 'Development', image: 'dev.webp' },
        { id: 4, title: 'Project 4', description: 'Description 1', category: 'Branding', image: 'branding.webp' },
        { id: 5, title: 'Project 5', description: 'Description 2', category: 'UX/UI Design', image: 'contact.webp' },
        { id: 6, title: 'Project 6', description: 'Description 3', category: 'Development', image: 'dev.webp' },
      
    ]);

    const handleFilterClick = (filter) => {
        setSelectedFilter(filter);
    };

    const filteredProjects = selectedFilter === 'All'
        ? projects
        : projects.filter(project => project.category === selectedFilter);

    return <>
        <Navbar></Navbar>

        <main className="main-content">
            <div className="projects-heading">
            <div className={`proj-logo ${showImage ? 'show-image' : ''} ${showBackground ? 'show-background' : ''}`} ref={serviceHeadinggRef}>
                        <svg className={`proj-text ${window.location.pathname === '/Services' ? 'white-background' : window.location.pathname === '/contact' ? 'white-background' : window.location.pathname === '/projects' ? 'gray-background' : ''}`} viewBox="0 0 200 100">
                            <defs>
                                <clipPath id="text-clip">
                                    <text x="50%" y="100" fontSize="100" fontWeight="normal" textAnchor="middle">
                                        AD
                                    </text>
                                </clipPath>
                            </defs>
                            <text x="50%" y="100" fontSize="100" fontWeight="normal" textAnchor="middle" fill="#fff" stroke="#ccc" strokeWidth="1">
                                AD
                            </text>
                            {showImage && (
                                <image className="proj-image" xlinkHref="marketing.webp" width="100%" height="100%" clipPath="url(#text-clip)" preserveAspectRatio="xMidYMid slice" />
                            )}
                        </svg>
                        {showBackground && (
                            <div className={`proj-background ${window.location.pathname === '/Services' ? 'green-background' : window.location.pathname === '/contact' ? 'blue-background' : window.location.pathname === '/projects' ? 'white-background' : ''}`}></div>
                        )}
                        <svg className="proj-outline" viewBox="0 0 200 100">
                            <text x="50%" y="100" fontSize="100" fontWeight="normal" textAnchor="middle">
                                AD
                            </text>
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

        <div className="top-button">
            <hr /> <button>Top!</button>
        </div>
        <div className="contact-home">
            <h2>Have a project?</h2>
            <h2>Let's talk.</h2>
            <div className="contact-action">
                <div className="contact-action-circle"></div>
                <div className="contact-action-word">Contact</div>
            </div>
        </div>

        <footer class="hero-footer">
            <div class="footer-col footer-col1">
                <div class="footer-title">Reach us</div>
                <div class="footer-content">abc@gmail.com</div>
            </div>
            <div class="footer-col footer-col2">
                <div class="footer-title">Follow us</div>
                <div class="footer-content">
                    <a href="" class="footer-nav">
                        Twitter
                    </a>
                    <a href="" class="footer-nav">
                        Facebook
                    </a>
                    <a href="" class="footer-nav">
                        Instagram
                    </a>
                    <a href="" class="footer-nav">
                        LinkedIn
                    </a>
                </div>
            </div>
            <div class="footer-col footer-col3">
                <div class="footer-title">Legal Stuff</div>
                <div class="footer-content">@Saudh</div>
            </div>
            <div class="footer-col footer-col4">
                <div class="subscribe-title">
                    INSPIRATION AND INNOVATION COME IN SHORT SUPPLY. GET A REFUEL ON US,
                    DIRECT TO YOUR INBOX.
                </div>
                <div class="subscribe-box">
                    <h4>Enter your email</h4>
                    <h5>Subscribe</h5>
                </div>
            </div>
        </footer>
    </>
}

export default Projects;