import '../styles/Process.css';

export default function Process() {
  const steps = [
    {
      id: 1,
      title: 'Plan for Grilling',
      description: 'Ensure safe balcony grilling by checking local regulations, using suitable equipment, and planning safety measures.'
    },
    {
      id: 2,
      title: 'Schedule Estimate',
      description: 'Get a free estimate for your invisible grill installation. Timeline typically ranges from a few days depending on requirements.'
    },
    {
      id: 3,
      title: 'Install New Grilling',
      description: 'Our expert team professionally installs your invisible grills with precision and care in a well-ventilated area.'
    },
    {
      id: 4,
      title: 'Enjoy Grilling & Safety',
      description: 'Enjoy your space safely! Your new invisible grills enhance security while maintaining the beautiful view you love.'
    }
  ];

  return (
    <section className="process">
      <div className="process-container">
        <div className="section-header">
          <h2>Our Installation Process</h2>
          <p>Simple, transparent, and professional steps to transform your space</p>
        </div>

        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={step.id} className="process-step">
              <div className="step-number">{step.id}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {index < steps.length - 1 && <div className="step-arrow">→</div>}
            </div>
          ))}
        </div>

        <div className="process-cta">
          <h3>Ready to get started?</h3>
          <button className="btn-primary">
            <a href="tel:+919000888367">Call for Free Consultation</a>
          </button>
        </div>
      </div>
    </section>
  );
}
