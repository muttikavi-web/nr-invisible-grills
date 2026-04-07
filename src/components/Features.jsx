import '../styles/Features.css';

export default function Features() {
  const features = [
    {
      id: 1,
      icon: '🛡️',
      title: 'Maximum Safety',
      description: 'NR Invisible Grilles provide robust protection, ensuring the highest level of safety for your family, particularly children and pets.'
    },
    {
      id: 2,
      icon: '👁️',
      title: 'Wide View',
      description: 'Our grilles offer an unobstructed, wide view, enhancing the aesthetic appeal of your home while providing safety.'
    },
    {
      id: 3,
      icon: '✨',
      title: 'Classy Look',
      description: 'The sleek, modern design of NR Invisible Grilles adds a classy look to any architectural style, seamlessly blending with your home decor.'
    },
    {
      id: 4,
      icon: '🧹',
      title: 'Low Maintenance',
      description: 'Our grilles are designed to be maintenance-free, saving you time and effort while ensuring long-lasting durability.'
    },
    {
      id: 5,
      icon: '🌊',
      title: 'Rust-Proof',
      description: 'Made with 316 marine-grade stainless steel, our grills are completely rust-proof and suitable for coastal regions.'
    },
    {
      id: 6,
      icon: '♻️',
      title: 'Eco-Friendly',
      description: 'Made with 100% chemical-free materials, our invisible grilles are completely safe for your kids and the environment.'
    }
  ];

  return (
    <section id="features" className="features">
      <div className="features-container">
        <div className="section-header">
          <h2>Key Benefits of Invisible Grills</h2>
          <p>Why choose NR Invisible Grills over traditional solutions</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
