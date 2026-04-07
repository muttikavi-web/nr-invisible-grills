import '../styles/Services.css';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Balcony Invisible Grills',
      description: 'Premium invisible grills for balconies with unobstructed views and maximum safety for your family.',
      features: ['400+ kg capacity', 'Marine grade steel', 'UV resistant']
    },
    {
      id: 2,
      title: 'Window Safety Grills',
      description: 'Protect your windows with invisible grills that blend seamlessly with your home architecture.',
      features: ['Easy installation', 'Clean appearance', 'Weather resistant']
    },
    {
      id: 3,
      title: 'Children Safety Solutions',
      description: 'Specially designed invisible grills to protect children and pets without compromising the view.',
      features: ['Chemical-free', 'Safe materials', 'Customizable spacing']
    },
    {
      id: 4,
      title: 'Bird Control Services',
      description: 'Invisible bird control systems to keep your space safe while maintaining the aesthetic appeal.',
      features: ['Non-harmful', 'Effective', 'Maintenance-free']
    },
    {
      id: 5,
      title: 'Bird Net Services',
      description: 'Professional bird net installation for comprehensive protection with excellent visibility.',
      features: ['Expert installation', 'Durable netting', 'Quick service']
    },
    {
      id: 6,
      title: 'Custom Design Solutions',
      description: 'Tailored invisible grill solutions designed specifically for your unique architectural needs.',
      features: ['2", 3", 4" spacing', 'Custom colors', 'Professional design']
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
