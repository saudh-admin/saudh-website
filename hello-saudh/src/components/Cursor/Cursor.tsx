import React, { useEffect, useRef, useState } from 'react';

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [contactActive, setContactActive] = useState(false);

  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    const spring = 0.065;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseEnter = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '0';
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleLinkHover = () => setIsHovering(true);
    const handleLinkLeave = () => setIsHovering(false);

    let contactEl = document.querySelector('[data-cursor-contact]');
    let contactOver = false;
    let contactDownTimeout: NodeJS.Timeout | null = null;

    const handleContactEnter = () => {
      contactOver = true;
      setIsHovering(true);
    };
    const handleContactLeave = () => {
      contactOver = false;
      setIsHovering(false);
      setContactActive(false);
    };
    const handleContactDown = (e: Event) => {
      if (e instanceof KeyboardEvent && e.key !== "Enter" && e.key !== " ") return;
      setContactActive(true);
      if (contactDownTimeout) clearTimeout(contactDownTimeout);
      contactDownTimeout = setTimeout(() => {
        setContactActive(false);
      }, 420);
    };

    if (contactEl) {
      contactEl.addEventListener('mouseenter', handleContactEnter);
      contactEl.addEventListener('mouseleave', handleContactLeave);
      contactEl.addEventListener('mousedown', handleContactDown);
      contactEl.addEventListener('keydown', handleContactDown);
    }

    const links = document.querySelectorAll('a, button, input, [data-cursor-hover]');
    links.forEach(link => {
      if (contactEl && link === contactEl) return; 
      link.addEventListener('mouseenter', handleLinkHover);
      link.addEventListener('mouseleave', handleLinkLeave);
    });

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    const animate = () => {
      cursorX += (mouseX - cursorX) * spring;
      cursorY += (mouseY - cursorY) * spring;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${cursorX}px`;
        cursorRef.current.style.top = `${cursorY}px`;
      }
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);

      if (contactEl) {
        contactEl.removeEventListener('mouseenter', handleContactEnter);
        contactEl.removeEventListener('mouseleave', handleContactLeave);
        contactEl.removeEventListener('mousedown', handleContactDown);
        contactEl.removeEventListener('keydown', handleContactDown);
      }

      links.forEach(link => {
        if (contactEl && link === contactEl) return;
        link.removeEventListener('mouseenter', handleLinkHover);
        link.removeEventListener('mouseleave', handleLinkLeave);
      });

      if (contactDownTimeout) clearTimeout(contactDownTimeout);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`
        pointer-events-none fixed w-5 h-5 rounded-full left-0 top-0 z-[9999] opacity-0 bg-transparent
        -translate-x-1/2 -translate-y-1/2 scale-100
        border-[1.5px] border-[rgba(255,208,10,0.85)]
        transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
        md:block hidden
        ${isHovering ? 'scale-[2] !transition-transform !duration-[190ms] !ease-[cubic-bezier(0.25,1,0.5,1)]' : ''}
        ${isClicking ? 'scale-[2] !border-[rgba(255,208,10,0.85)] !transition-transform !duration-[190ms] !ease-[cubic-bezier(0.25,1,0.5,1)]' : ''}
        ${contactActive ? 'scale-[4.3] !border-[rgba(255,208,10,1)] !bg-[rgba(255,208,10,0.14)] !transition-transform !duration-[380ms] !ease-[cubic-bezier(0.22,1,0.36,1)]' : ''}
      `}
    />
  );
};

export default Cursor;

