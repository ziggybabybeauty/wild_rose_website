import { useState, useEffect } from 'react';
import styles from './ScrollIndicators.module.css';

const ScrollIndicators = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    { id: 'hero', label: '01' },
    { id: 'methodology', label: '02' },
    { id: 'team', label: '03' },
    { id: 'contact', label: '04' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const winScroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);

      // Determine active section
      const sectionElements = sections.map((s) => document.querySelector(`#${s.id}`) as HTMLElement);
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY + windowHeight / 2;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: `${scrollProgress}%` }} />
      </div>

      {/* Section Navigation Dots */}
      <nav className={styles.sectionNav}>
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`${styles.navDot} ${index === activeSection ? styles.active : ''}`}
            aria-label={`Go to section ${section.label}`}
          >
            <span className={styles.dotLabel}>{section.label}</span>
          </button>
        ))}
      </nav>
    </>
  );
};

export default ScrollIndicators;
