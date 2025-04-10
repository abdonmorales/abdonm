import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header style={styles.header}>
    <h1>
      <Link to="/" style={styles.nameLink}>Kevin Ayala</Link>
    </h1>
    <p>Frontend Developer | React Enthusiast</p>
    <nav style={styles.nav}>
      {/* Scroll to sections on the homepage */}
      {/* <a href="#about">About</a> */}
      <Link to="/projects">Projects</Link> {/* Goes to a different page */}
      {/* <a href="#contact">Contact</a> */}
    </nav>
  </header>
);

const styles = {
  header: {
    backgroundColor: '#282c34',
    color: 'white',
    padding: '50px 0',
    textAlign: 'center',
  },
  nav: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
  },
  nameLink: {
    color: 'white',
    textDecoration: 'none',
  },
};

export default Header;
