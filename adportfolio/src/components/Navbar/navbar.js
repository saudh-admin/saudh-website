import React, { useRef, useEffect, useState } from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './navbar.scss';

const Navbar = () => {
    const menuBtnRef = useRef(null);
    const crossBtnRef = useRef(null);
    const menuOverlayRef = useRef(null);
    const navbarRef = useRef(null);

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prevMenuOpen => !prevMenuOpen);
    };

    useEffect(() => {
        const menuBtn = menuBtnRef.current;
        const crossBtn = crossBtnRef.current;

        // Event listeners for open/close menu behavior
        if (menuBtn && crossBtn) {
            menuBtn.addEventListener('click', toggleMenu);
            crossBtn.addEventListener('click', toggleMenu);
        }

        // Clean up function to remove event listeners
        return () => {
            if (menuBtn && crossBtn) {
                menuBtn.removeEventListener('click', toggleMenu);
                crossBtn.removeEventListener('click', toggleMenu);
            }
        };
    }, [menuOpen]); // Include menuOpen in the dependency array

    return (

        <>
            {/* <div id="nav-overlay" aria-hidden="true" class="nav-overlay" style="width: 3736.84px; height: 3736.84px; margin-top: -1868.42px; margin-left: -1868.42px; transform: translate3d(-137.709px, 536.017px, 0px) scale(0);"></div> */}
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
                        <div className='web_logo'>
                        <a href="/" id="logo" className={`header_logo ${menuOpen ? 'white' : ''}`}>AD</a>
                        </div>
                        <div className='col-header-title'>
                        <h5 className={`ht-title ${menuOpen ? 'white' : ''}`}>{menuOpen ? 'Index' : 'Home'}</h5>
                        </div>
                        <div className='col-header-subtitle'>
                            
                        </div>
                    </div>
                </div>
            </header>

            
            <nav id="navbar" className={`navbar ${menuOpen ? 'white' : ''}`}>
                <div className={`menu-overlay ${menuOpen ? 'menu-open' : ''}`} ref={menuOverlayRef}>
                <div className='ad-video-container'>
                        <video autoPlay muted loop className='ad-video'>
                            <source src='/Users/praneetha/Desktop/AD_Portfolio/adportfolio/src/assets/videos/services.mp4' type='video/mp4' />
                            Your browser does not support the video tag.
                        </video>
                        <div className='ad-letters'>AD</div>
                    </div>
                    <div className="menu-overlay-content">
                        <a href="/page1">Services</a>
                        <a href="/page2">Projects</a>
                        <a href="/page3">Us</a>
                        <a href="/page4">Contact</a>
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