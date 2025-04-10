import React from 'react';

const Contact = () => (
  <section id="contact" style={styles.section}>
    <h2>Contact</h2>
    <p>Let's connect! Reach out via email or follow me on GitHub.</p>
    <ul>
      <li>Email: kevinayaka@utexas.com</li>
      <li>GitHub: <a href="https://github.com/Kevin4153" target="_blank" rel="noreferrer">github.com/Kevin4153</a></li>
    </ul>
  </section>
);

const styles = {
  section: {
    padding: '40px',
    maxWidth: '800px',
    margin: 'auto',
  },
};

export default Contact;
