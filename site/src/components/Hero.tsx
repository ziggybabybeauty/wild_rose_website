import styles from './Hero.module.css';
import logo from '../assets/logos/transparent_gold_logo.png';
import heroImage from '../assets/images/header_image.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.backgroundImage}>
        <img src={heroImage} alt="Calgary skyline" />
      </div>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <div className={styles.logo}>
          <img src={logo} alt="Wild Rose Corp" />
        </div>

        <div className={styles.textContent}>
          <h1 className={styles.title}>
            From Foundational Assets to Frontier{' '}
            <em>Opportunities</em>.
          </h1>

          <p className={styles.subtitle}>
            Be part of the journey as we invest in unique Western Canadian
            opportunities, respecting their history and shaping their future.
          </p>

          <button onClick={scrollToContact} className={styles.ctaButton}>
            JOIN US
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
