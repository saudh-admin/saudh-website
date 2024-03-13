import React, { useState,useRef, useEffect } from 'react';
import './navbar.scss';
import { motion } from 'framer-motion'
import ToggleButton from './ToggleButton';
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
    const menuBtnClass = `menuBtn ${menuOpen ? 'white' : ''}`;

    const [open, setOpen] = useState(false)

    return (

        <div className={`navbar ${menuOpen ? 'white' : ''}`}>
            <div className='nav-items'>
                <button className={menuBtnClass}>
                    <motion.div className='sidebar' animate={open ? 'open' : 'closed'}>

                        <motion.div className='background' variants={variants}>
                        <Links/>
                        </motion.div>
                        <ToggleButton setOpen={setOpen} />
                    </motion.div>
                </button>
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
        </div>



    )
}

export default Navbar
