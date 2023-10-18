import React from 'react';
import "./Footer.css"

function Footer() {
  return (
    <footer className='footer'>
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Me</h3>
          <p>
            I'm a full stack developer passionate about creating amazing websites and
            applications.
          </p>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>
            You can reach out to me at{' '}
            <a href='mailto:srijanbiswas3@gmail.com'>srijanbiswas3@gmail.com</a>
          </p>
        </div>
        <div className="footer-section">
          <h3>Follow Me</h3>
          <a
            href='https://github.com/srijanbiswas3'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="copyright">© {new Date().getFullYear()} Srijan Biswas</div>
    </footer>
  );
}

export default Footer;
