import styles from './Methodology.module.css';
import propertyImage from '../assets/images/Calgary Neighbourhood.png';

const Methodology = () => {
  return (
    <section id="methodology" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Methodical Where It <em>Matters</em>. Creative Where It{' '}
            <em>Counts</em>.
          </h2>

          <p className={styles.description}>
            We focus on smaller, high-potential opportunities - whether that's a
            duplex, a local retail strip, or an overlooked business ready for
            new energy. These ventures sit outside the "standard market," but
            that's where the upside lives. With your investment, you can be part
            of these unique projects and gain a real stake in their growth
            without taking on the day-to-day work.
          </p>
        </div>

        <div className={styles.imageWrapper}>
          <img
            src={propertyImage}
            alt="Canadian property investment"
            className={styles.image}
          />
          <div className={styles.overlay} />
        </div>
      </div>
    </section>
  );
};

export default Methodology;
