import { useState, type FormEvent } from 'react';
import styles from './Contact.module.css';
import buildingImage from '../assets/images/calgary-property-investing.jpg';

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

    // Web3Forms integration
    const formDataToSend = new FormData();
    formDataToSend.append('access_key', '722ee8e6-36cd-4d1e-a725-9ad226d53066');
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('subject', 'New Contact from Wild Rose Corp Website');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
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
            <div
              className={styles.successMessage}
              role="status"
              aria-live="polite"
            >
              Thank you for your interest! We'll be in touch soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <label htmlFor="contact-name" className={styles.visuallyHidden}>
                Full Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className={styles.input}
                aria-required="true"
              />

              <label htmlFor="contact-email" className={styles.visuallyHidden}>
                Email Address
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className={styles.input}
                aria-required="true"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.submitButton}
              >
                {isSubmitting ? 'SENDING...' : 'JOIN US'}
              </button>

              {submitStatus === 'error' && (
                <p
                  className={styles.errorMessage}
                  role="alert"
                  aria-live="assertive"
                >
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
