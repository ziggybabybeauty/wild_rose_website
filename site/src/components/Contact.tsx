import { useState, type FormEvent } from 'react';
import styles from './Contact.module.css';
import buildingImage from '../assets/images/calgary-property-investing.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Formspree integration - To make this work:
    // 1. Go to https://formspree.io and sign up (free)
    // 2. Create a new form
    // 3. Copy your form ID (looks like: xpznzxyz)
    // 4. Replace YOUR_FORM_ID below with your actual form ID
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img
            src={buildingImage}
            alt="Calgary property investment building"
            className={styles.image}
          />
          <div className={styles.overlay} />
        </div>

        <div className={styles.formWrapper}>
          <h2 className={styles.title}>
            Your Entry to <em>Exclusive</em> Ventures.
          </h2>

          <p className={styles.tagline}>
            Unusual assets. Thoughtful strategy. Surprising results.
          </p>

          {submitStatus === 'success' ? (
            <div className={styles.successMessage}>
              Thank you for your interest! We'll be in touch soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className={styles.input}
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className={styles.input}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.submitButton}
              >
                {isSubmitting ? 'SENDING...' : 'JOIN US'}
              </button>

              {submitStatus === 'error' && (
                <p className={styles.errorMessage}>
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
