import '../styles/Services.css';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Balcony Invisible Grills',
      description: 'Premium invisible safety grills for balconies with unobstructed views. Transparent nylon nets, 25+ years durability, rust-proof stainless steel. Perfect for bird control and child protection.',
      features: ['400+ kg capacity', 'Marine grade steel', 'UV resistant', 'Pigeon & cat proof']
    },
    {
      id: 2,
      title: 'Window Safety Grills',
      description: 'Modern window safety grills that blend seamlessly with architecture. Transparent protective nets for families, waterproof and weather-resistant installation.',
      features: ['Easy installation', 'Clean appearance', 'Weather resistant', 'All sizes available']
    },
    {
      id: 3,
      title: 'Children & Pet Safety',
      description: 'Child-proof and pet-proof invisible grills using chemical-free materials. Transparent nets ensure children and cats are protected while maintaining clear views.',
      features: ['100% chemical-free', 'Safe materials', 'Customizable spacing', 'Family approved']
    },
    {
      id: 4,
      title: 'Bird Control Solutions',
      description: 'Professional bird control nets for pigeon, crow, and parrot protection. Non-harmful, eco-friendly solution for balcony bird netting without affecting aesthetics.',
      features: ['Non-harmful to birds', 'Effective control', 'Maintenance-free', 'Invisible design']
    },
    {
      id: 5,
      title: 'Professional Installation',
      description: 'Expert installation of invisible netting systems across Bangalore, Vizag, and Vijayawada. Fast service, quality guarantee, professional teams.',
      features: ['Expert technicians', 'Quick installation', 'Quality assured', 'All locations']
    },
    {
      id: 6,
      title: 'Custom Design Solutions',
      description: 'Tailored invisible grill designs for unique architectural needs. 2", 3", 4" spacing options, custom colors, professional consultation for your home.',
      features: ['Custom spacing', 'Color options', 'Design consultation', 'Premium quality']
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
              <button className="service-btn">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
