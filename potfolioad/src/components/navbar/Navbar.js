import React, { useState, useRef, useEffect } from 'react';
import './navbar.scss';
import { motion, AnimatePresence } from 'framer-motion';
import Links from './Links';


const variants = {

    open: {
        clipPath: 'circle(3200px at 50px 50px)',
        transition: {
            type: "spring",
            stiffness: 20
        }
    },
    closed: {
        clipPath: 'circle(30px at 50px 50px)',
        transition: {
            delay: 1.5,
            type: 'spring',
            stiffness: 400,
            damping: 40,
        }
    }
}

const Navbar = () => {

    const menuBtnRef = useRef(null);
    const crossBtnRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [open, setOpen] = useState(false);

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

    const toggleMenu = () => {
        setMenuOpen((prevMenuOpen) => !prevMenuOpen);
        setOpen((prevOpen) => !prevOpen);
    };

    const closeMenu = () => {
        setOpen(false);
        setMenuOpen(false);
    };

    const item = {
        exit: {
            opacity: 0,
            height: 0,
            transition: {
                ease: "easeInOut",
                duration: 0.3,
                delay: 1.2
            }
        }
    }

    return (
        <div className='container'>
        <div className="row row--items-middle">
        <div className={`navbar ${menuOpen ? 'white' : ''}`}>
            <div className='nav-items'>

            {/* <div className='arrowlogo'><img className="home-arrow" src='down-arrow.png'></img></div> */}
                <div className="menu" onClick={toggleMenu} ref={menuBtnRef}>
                    <i className="fa fa-bars"></i>

                </div>


                <div className='web_logo' onMouseEnter={handleHover} onMouseLeave={handleHoverLeave}>
                    <a href="/" id="logo" className={`header_logo ${menuOpen ? 'white' : ''}`}>AD</a>
                </div>
                <div className='title'>
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
            </div>
            <div className='start-project'>
                <div className='start-cont'>
                    <a href="/contact" className='nav-contact'>
                        <div className='start-circle'></div>
                        <span className={`start-label ${menuOpen ? 'white' : ''}`}>Start a project</span>
                    </a>
                </div>
            </div>
            <AnimatePresence>
                {open && (
                    <motion.div className="menu_container"
                        variants={item}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "100vh", opacity: 1 }}
                        transition={{ duration: .5 }}
                        exit="exit"
                    >

                        <div className="btn_close" onClick={closeMenu}>X</div>
                        
                        <motion.a href=""
                            initial={{ y: 80, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: .8 }}
                            exit={{
                                opacity: 0,
                                y: 90,
                                transition: {
                                    ease: "easeInOut",
                                    delay: 1
                                }
                            }}
                        ><Links/></motion.a>
                        {/* Other menu items */}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
        </div>
        </div>



    )
}

export default Navbar
