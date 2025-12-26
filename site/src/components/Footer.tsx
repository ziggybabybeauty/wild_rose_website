import styles from './Footer.module.css';
import logo from '../assets/logos/transparent_gold_logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
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
