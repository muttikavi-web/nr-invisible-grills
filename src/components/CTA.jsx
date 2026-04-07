import { useState } from 'react';
import '../styles/CTA.css';

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to a server
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <section className="cta">
      <div className="cta-container">
        <div className="section-header white">
          <h2>Transform Your Space Today</h2>
          <p>Get a free consultation and estimate for your invisible grills</p>
        </div>

        <div className="cta-content">
          <div className="cta-form">
            <h3>Fill The Form</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select Service</option>
                <option value="balcony">Balcony Invisible Grills</option>
                <option value="window">Window Safety Grills</option>
                <option value="bird">Bird Control</option>
                <option value="children">Children Safety</option>
                <option value="custom">Custom Solution</option>
              </select>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>

          <div className="cta-info">
            <h3>Why Contact Us?</h3>
            <ul>
              <li>✓ Free consultation and site survey</li>
              <li>✓ Transparent pricing with no hidden charges</li>
              <li>✓ Professional installation team with 10+ years experience</li>
              <li>✓ Lifetime warranty on products</li>
              <li>✓ Same-day or next-day installation available</li>
              <li>✓ Trusted by 500+ satisfied customers</li>
            </ul>

            <div className="contact-methods">
              <div className="contact-method">
                <p className="icon">📞</p>
                <p><strong>Call Us</strong><br /><a href="tel:+919000888367">+91 9000888367</a></p>
              </div>
              <div className="contact-method">
                <p className="icon">📧</p>
                <p><strong>Email Us</strong><br /><a href="mailto:nrinvisible@gmail.com">nrinvisible@gmail.com</a></p>
              </div>
              <div className="contact-method">
                <p className="icon">📍</p>
                <p><strong>Visit Us</strong><br />Bangalore, Vizag, Vijayawada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
