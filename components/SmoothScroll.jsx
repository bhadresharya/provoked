'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function SmoothScroll({ children }) {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const scrollObjRef = useRef({ current: 0, target: 0 });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const wrapper = wrapperRef.current;
    const content = contentRef.current;

    if (!wrapper || !content) return;

    // Set initial height
    const setHeight = () => {
      const height = content.offsetHeight;
      document.body.style.height = `${height}px`;
    };
    setHeight();
    window.addEventListener('resize', setHeight);

    // GSAP smooth scroll with lerp
    const updateScroll = () => {
      scrollObjRef.current.target = window.pageYOffset || window.scrollY;
      scrollObjRef.current.current = gsap.utils.interpolate(
        scrollObjRef.current.current,
        scrollObjRef.current.target,
        0.1
      );

      gsap.set(content, {
        y: -scrollObjRef.current.current,
        force3D: true,
      });
    };

    // Use GSAP ticker for smooth 60fps updates
    gsap.ticker.add(updateScroll);

    // Cleanup
    return () => {
      window.removeEventListener('resize', setHeight);
      gsap.ticker.remove(updateScroll);
      document.body.style.height = '';
      gsap.set(content, { clearProps: 'all' });
    };
  }, []);

  return (
    <div ref={wrapperRef} id="smooth-wrapper">
      <div ref={contentRef} id="smooth-content">
        {children}
      </div>
    </div>
  );
}

