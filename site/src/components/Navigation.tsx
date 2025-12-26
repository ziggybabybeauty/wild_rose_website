import { useState, useEffect } from 'react';
import styles from './Navigation.module.css';
import logo from '../assets/logos/transparent_gold_logo.png';

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling 100px
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`${styles.nav} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="Wild Rose Corp" />
        </div>

        <ul className={styles.links}>
          <li>
            <button onClick={() => scrollToSection('methodology')}>
              Methodology
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('team')}>Team</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('contact')}>Contact</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
