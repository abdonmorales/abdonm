import React from 'react';

const About = () => (
    <section id="about" style={styles.section}>
    <h2>About Me</h2>
    <img
      src="/headshot.jpeg"
      alt="Headshot"
      style={styles.headshot}
    />
    <p>
      I'm a frontend developer passionate about building interactive web apps with React...
    </p>
  </section>
);

const styles = {
    section: {
      padding: '40px',
      maxWidth: '800px',
      margin: 'auto',
      textAlign: 'center',
    },
    headshot: {
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      objectFit: 'cover',
      marginBottom: '20px',
    },
  };
  

export default About;
