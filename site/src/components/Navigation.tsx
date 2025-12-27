import { useState, useEffect, useRef, useCallback } from 'react';
import styles from './Navigation.module.css';
import logo from '../assets/logos/transparent_gold_logo.png';

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const hideTimerRef = useRef<number | null>(null);

  const showNav = useCallback(() => {
    setIsVisible(true);

    // Clear existing timer
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
    }

    // Set new timer to hide after 2 seconds
    hideTimerRef.current = window.setTimeout(() => {
      setIsVisible(false);
    }, 2000);
  }, []);

  // Separate effect for initial timer setup
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      showNav();
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Show nav when mouse is in top 80px of screen (navbar height area)
      if (e.clientY < 80) {
        showNav();
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
      }
    };
  }, [showNav]);

  return (
    <nav className={`${styles.nav} ${isVisible ? styles.visible : styles.hidden}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="Wild Rose Corp" />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
