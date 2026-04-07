import { useState } from 'react';
import '../styles/Services.css';

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Balcony Invisible Grills',
      description: 'Premium invisible safety grills for balconies with unobstructed views. Transparent nylon nets, 25+ years durability, rust-proof stainless steel. Perfect for bird control and child protection.',
      features: ['400+ kg capacity', 'Marine grade steel', 'UV resistant', 'Pigeon & cat proof'],
      details: 'Our balcony invisible grills are engineered with premium materials to provide maximum safety without compromising on aesthetics. The grills are completely transparent, allowing you to enjoy the view while keeping your family safe. Made with high-quality nylon nets and stainless steel frames, they withstand extreme weather conditions and UV rays. Installation is professional and quick, typically completed within 2-3 hours.',
      price: 'From ₹3,500/sq.ft'
    },
    {
      id: 2,
      title: 'Window Safety Grills',
      description: 'Modern window safety grills that blend seamlessly with architecture. Transparent protective nets for families, waterproof and weather-resistant installation.',
      features: ['Easy installation', 'Clean appearance', 'Weather resistant', 'All sizes available'],
      details: 'Protect your windows with our modern invisible safety grills. Perfect for high-rise apartments and houses, these grills provide peace of mind without altering your window aesthetics. Our window grills are customizable to fit any window size and can be easily removed or adjusted when needed. Weather-resistant materials ensure long-lasting protection.',
      price: 'From ₹2,800/sq.ft'
    },
    {
      id: 3,
      title: 'Children & Pet Safety',
      description: 'Child-proof and pet-proof invisible grills using chemical-free materials. Transparent nets ensure children and cats are protected while maintaining clear views.',
      features: ['100% chemical-free', 'Safe materials', 'Customizable spacing', 'Family approved'],
      details: 'Safety of your loved ones is our priority. Our child and pet-proof grills are made from safe, non-toxic materials that have been tested for durability and safety. Customizable net spacing ensures protection while allowing proper ventilation. Parents can rest assured their children and pets are protected from falls and escapes.',
      price: 'From ₹3,200/sq.ft'
    },
    {
      id: 4,
      title: 'Bird Control Solutions',
      description: 'Professional bird control nets for pigeon, crow, and parrot protection. Non-harmful, eco-friendly solution for balcony bird netting without affecting aesthetics.',
      features: ['Non-harmful to birds', 'Effective control', 'Maintenance-free', 'Invisible design'],
      details: 'Say goodbye to pigeon menace! Our bird control nets are invisible, eco-friendly, and non-harmful to birds. They effectively prevent birds from entering while maintaining a clean look. The nets are designed to be durable and maintenance-free, lasting 25+ years with minimal care. Perfect for both residential and commercial spaces.',
      price: 'From ₹2,500/sq.ft'
    },
    {
      id: 5,
      title: 'Professional Installation',
      description: 'Expert installation of invisible netting systems across Bangalore, Vizag, and Vijayawada. Fast service, quality guarantee, professional teams.',
      features: ['Expert technicians', 'Quick installation', '5-year warranty', 'All locations'],
      details: 'Our certified installation team ensures perfect fitting and longevity of your invisible grills. We use professional-grade tools and techniques to install the grills securely without damaging walls or windows. Free site inspection, quotation, and after-sales support included. Service available in Bangalore, Vizag, Vijayawada, and surrounding areas.',
      price: 'Free inspection & quote'
    },
    {
      id: 6,
      title: 'Custom Design Solutions',
      description: 'Tailored invisible grill designs for unique architectural needs. 2", 3", 4" spacing options, custom colors, professional consultation for your home.',
      features: ['Custom spacing', 'Color options', 'Design consultation', 'Premium quality'],
      details: 'Every home is unique, and so should be your safety solution. We offer fully customized invisible grill designs tailored to your specific requirements. Choose from multiple net spacing options (2", 3", or 4"), colors, and designs. Our design consultants will work with you to create the perfect solution for your space.',
      price: 'Custom pricing'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive safety solutions for every need</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>
              <button className="service-btn" onClick={() => setSelectedService(service)}>
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {selectedService && (
        <div className="service-modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="service-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedService(null)}>✕</button>
            <h2>{selectedService.title}</h2>
            <p className="modal-details">{selectedService.details}</p>
            <div className="modal-features">
              <h3>Key Features:</h3>
              <ul>
                {selectedService.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>
            </div>
            <div className="modal-pricing">
              <p><strong>Starting Price:</strong> {selectedService.price}</p>
            </div>
            <div className="modal-cta">
              <button className="btn-primary">
                <a href="tel:+919000888367">Call Now for Quote</a>
              </button>
              <button className="btn-secondary" onClick={() => setSelectedService(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
