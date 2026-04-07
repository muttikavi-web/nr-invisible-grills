import '../styles/Hero.css';
import heroImg from '../assets/NRSecureProfile.jpg';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Elevate Your Space With Sleek Security</h1>
          <h2>NR Invisible Grills Bangalore</h2>
          <p>Unobstructed Views, Uncompromised Safety - Transform Your Home with Innovative Invisible Grills</p>
          <div className="hero-cta">
            <button className="btn-primary">
              <a href="tel:+919000888367">Get Free Estimate</a>
            </button>
            <button className="btn-secondary">Learn More</button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <h3>400+</h3>
              <p>kg Load Capacity</p>
            </div>
            <div className="stat">
              <h3>100%</h3>
              <p>Chemical Free</p>
            </div>
            <div className="stat">
              <h3>25+</h3>
              <p>Years Durability</p>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="NR Invisible Grills - Professional Installation" className="hero-img" />
        </div>
      </div>
    </section>
  );
}
