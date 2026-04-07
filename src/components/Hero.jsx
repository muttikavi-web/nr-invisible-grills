import { useState } from 'react';
import '../styles/Hero.css';
import heroImg from '../assets/NRSecureProfile.jpg';

export default function Hero() {
  const [showLearnMore, setShowLearnMore] = useState(false);

  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Premium Invisible Grills in Bangalore - Safety with Style</h1>
          <h2>Best Invisible Safety Grills for Balconies, Windows & Bird Control</h2>
          <p>Transparent safety nets for child protection, pet safety, and bird control. Unobstructed views with maximum security. Professional installation of invisible grills across Bangalore, Vizag & Vijayawada.</p>
          <div className="hero-cta">
            <button className="btn-primary">
              <a href="tel:+919000888367">Get Free Estimate</a>
            </button>
            <button className="btn-secondary" onClick={scrollToFeatures}>
              Learn More ↓
            </button>
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
