import '../styles/Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us.</h3>
            <p>NR Invisible Grills is one of the top manufacturers of premium invisible grills in India, providing innovative safety solutions for modern homes.</p>
            <div className="social-links">
              <a href="https://facebook.com/NRinvisiblegrill" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://instagram.com/nrinvisiblegrill" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://x.com/Nrinvisiblegril" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://youtube.com/@nrinvisiblegrill" target="_blank" rel="noopener noreferrer">YouTube</a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li><a href="#services">Balcony Invisible Grills</a></li>
              <li><a href="#services">Window Safety Grills</a></li>
              <li><a href="#services">Bird Control Solutions</a></li>
              <li><a href="#services">Children Safety</a></li>
              <li><a href="#services">Custom Designs</a></li>
              <li><a href="#services">Bird Net Services</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Get In Touch</h3>
            <p><strong>Phone:</strong><br /><a href="tel:+919000888367">+91 9000888367</a></p>
            <p><strong>Email:</strong><br /><a href="mailto:nrinvisible@gmail.com">nrinvisible@gmail.com</a></p>
            <p><strong>Address:</strong><br />#559, 1st Floor, Thanisandra Main Road<br />R.K. Hegde Nagar<br />Bengaluru 560077, Karnataka, India</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} NR Invisible Grills. All rights reserved.</p>
          <p>Design by Professional Web Team</p>
        </div>
      </div>
    </footer>
  );
}
