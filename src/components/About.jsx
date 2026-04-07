import '../styles/About.css';
import petsImg from '../assets/petsProtection.jpeg';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img src={petsImg} alt="Children and Pets Safety with Invisible Grills" className="about-img" />
        </div>
        
        <div className="about-content">
          <h2>Why Choose NR Invisible Grills?</h2>
          
          <p>
            NR Invisible Grills is one of the top manufacturers of premium invisible grills in India. We have been committed to providing excellence in invisible balcony safety grill design in Bangalore.
          </p>

          <h3>What Makes Us Different</h3>
          <p>
            Unlike traditional grills, our invisible balcony grills system uses high tensile, marine-grade stainless steel cables of 2mm thickness (316 SS marine grade) that hang vertically or horizontally at specific intervals and are covered with transparent nylon. This creates a highly safe protective structure.
          </p>

          <div className="about-highlights">
            <div className="highlight">
              <h4>🏆 Premium Quality</h4>
              <p>12+1 combination stainless steel cables for superior strength</p>
            </div>
            <div className="highlight">
              <h4>🔒 Maximum Security</h4>
              <p>400+ kg load capacity with compression resistance</p>
            </div>
            <div className="highlight">
              <h4>🌿 Eco-Friendly</h4>
              <p>100% chemical-free and safe for families and pets</p>
            </div>
            <div className="highlight">
              <h4>⚡ Easy Maintenance</h4>
              <p>No painting required, maintenance-free for life</p>
            </div>
          </div>

          <p>
            Selecting NR Invisible Grills means your home will be safer and more protected than with any other solution. Our focus is on providing the best balcony safety grill design to meet your unique needs.
          </p>

          <button className="btn-primary">Get Started Today</button>
        </div>
      </div>
    </section>
  );
}
