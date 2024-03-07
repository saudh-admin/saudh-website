import React, { useRef, useEffect, useState } from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './navbar.scss';

const Navbar = () => {
    const menuBtnRef = useRef(null);
    const crossBtnRef = useRef(null);
    const menuOverlayRef = useRef(null);
    const navbarRef = useRef(null);
    const [currentTitle, setCurrentTitle] = useState('Hello');
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

    const toggleMenu = () => {
        setMenuOpen(prevMenuOpen => {
            const newState = !prevMenuOpen;
            setCurrentTitle(newState ? 'Index' : 'Hello');
            return newState;
        });
    };



    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const menuBtn = menuBtnRef.current;
        const crossBtn = crossBtnRef.current;


        if (menuBtn && crossBtn) {
            menuBtn.addEventListener('click', toggleMenu);
            crossBtn.addEventListener('click', toggleMenu);
        }


        return () => {
            if (menuBtn && crossBtn) {
                menuBtn.removeEventListener('click', toggleMenu);
                crossBtn.removeEventListener('click', toggleMenu);
            }
        };
    }, [menuOpen]);

    return (

        <>

            <header className={`header ${menuOpen ? 'white' : ''}`}>
                <div className='container'>
                    <div className='item-row'>
                        <div className='col-1 col-nav-btn' onClick={toggleMenu}>
                            <button id='menuBtn' type='button' aria-label="Open Menu" className={`menu-btn ${menuOpen ? 'visible' : ''}`} >

                                {menuOpen ? (
                                    <div className="cross-icon">
                                        <FontAwesomeIcon icon={faXmark} className="cross-icon" />
                                    </div>
                                ) : (
                                    <div className="menu-icon">
                                        <div className={`menu-btn-line top ${menuOpen ? 'fade-left' : ''}`}></div>
                                        <div className={`menu-btn-line bottom ${menuOpen ? 'fade-right' : ''}`}></div>
                                    </div>
                                )}
                            </button>
                        </div>
                        <div className='web_logo' onMouseEnter={handleHover} onMouseLeave={handleHoverLeave}>
                            <a href="/" id="logo" className={`header_logo ${menuOpen ? 'white' : ''}`}>AD</a>
                        </div>
                        <div className='col-header-title'>
                            <h5 className={`ht-title ${menuOpen || showHome ? 'white' : ''}`}
                                style={{
                                    '--title-translate-x': showHello ? '0' : '100%',
                                    '--title-opacity': showHello ? '1' : '0',
                                }}>
                                {menuOpen ? 'Index' : 'Hello'}
                            </h5>
                            <h5 className={`new-ht-title ${menuOpen || showHome ? 'white' : ''}`}
                                style={{
                                    '--new-title-translate-x': showHome ? '0' : '-100%',
                                    '--new-title-opacity': showHome ? '1' : '0',
                                }}>
                                Home
                            </h5>
                        </div>
                        <div className='col-header-subtitle'>

                        </div>
                    </div>
                </div>
            </header>


            <nav id="navbar" className={`navbar ${menuOpen ? 'white' : ''}`}>
                <div className={`menu-overlay ${menuOpen ? 'menu-open' : ''}`} ref={menuOverlayRef}>
                    <div className='ad-video-container'>
                        <video autoPlay loop muted playsInline className='ad-video'>
                            <source src={`${process.env.PUBLIC_URL}/assets/videos/services.mp4`} type='video/mp4' />
                            Your browser does not support the video tag.
                        </video>
                        <div className='ad-letters'>AD</div>
                    </div>
                    <div className="menu-overlay-content">
                        <a href="/services">Services</a>
                        <a href="/projects">Projects</a>
                        <a href="/about">Us</a>
                        <a href="/contact">Contact</a>
                    </div>
                </div>

            </nav>
            <div className='start-project'>
                <div className='start-cont'>
                    <a href="/contact" className='nav-contact'>
                        <div className='start-circle'></div>
                        <span className={`start-label ${menuOpen ? 'white' : ''}`}>Start a project</span>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;