import styles from './Footer.module.css';
import logo from '../assets/logos/transparent_gold_logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <button onClick={scrollToTop} className={styles.backToTop} aria-label="Back to top">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 19V5M5 12l7-7 7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="Wild Rose Corp" />
        </div>

        <p className={styles.location}>CALGARY, AB</p>

        <p className={styles.copyright}>
          &copy;{currentYear} WILD ROSE CORP.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
