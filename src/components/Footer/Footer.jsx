import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-section bg-[#101727] pt-[120px] pb-[80px]">
    <div className='w-[1200px] mx-auto'>
      <div className="footer-content">
        <div className="footer-wrapper">
          
          <div className="footer-logo">
            <a href="index.html">
              <img src="assets/logo-footer.png" alt="logo" />
            </a>
          </div>

          <div className="social-links">
            <span className="title">Social links:</span>

            <a href="https://www.facebook.com/">
              <i className="fab fa-facebook-f"></i>
            </a>

            <a href="https://www.linkedin.com/">
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a href="https://www.twitter.com/">
              <i className="fab fa-twitter"></i>
            </a>
          </div>

        </div>
      </div>

      <div className="copyright-wrap">
        <p className="copyright-text">
          © 2026 Personal Knowledge Vault. All rights reserved.
        </p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;