import '../styles/Testimonials.css';
import ownerImg from '../assets/OwnerProfile.jpg';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      title: 'Home Owner',
      content: 'The invisible grills have completely transformed my apartment. The view from my balcony is now unobstructed and my kids are safe. Excellent service and quality!',
      rating: 5
    },
    {
      id: 2,
      name: 'Priya Sharma',
      title: 'Architect',
      content: 'As an architect, I was impressed with how seamlessly the invisible grills blend with modern designs. My clients love them. Highly recommend NR Invisible Grills.',
      rating: 5
    },
    {
      id: 3,
      name: 'Vikram Patel',
      title: 'Property Manager',
      content: 'We installed NR Invisible Grills in multiple units. The maintenance-free nature and durability have exceeded our expectations. Great investment!',
      rating: 5
    },
    {
      id: 4,
      name: 'Sneha Desai',
      title: 'Bird Lover',
      content: 'The bird control solution works perfectly without harming the birds. I can enjoy the pigeons and parrots while keeping my home clean. Perfect balance!',
      rating: 5
    },
    {
      id: 5,
      name: 'Arun Singh',
      title: 'Business Owner',
      content: 'Installed invisible grills in my office balcony. The professional installation team was courteous and completed the work on time. Very satisfied!',
      rating: 5
    },
    {
      id: 6,
      name: 'Divya Nair',
      title: 'Interior Designer',
      content: 'My clients are thrilled with the invisible grills. They maintain the aesthetic value of properties while providing essential safety. Fantastic product!',
      rating: 5
    }
  ];

  const owner = {
    name: 'Nagaraju',
    title: 'Founder & Managing Director',
    company: 'NR Invisible Grills',
    message: 'At NR Invisible Grills, we are committed to providing the highest quality invisible grills and bird control solutions. With 15+ years of experience, we ensure every installation meets our strict standards of excellence and customer satisfaction.',
    image: ownerImg
  };

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <div className="section-header">
          <h2>What Our Customers Say</h2>
          <p>Trusted by hundreds of satisfied clients across Bangalore</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-rating">
                {'⭐'.repeat(testimonial.rating)}
              </div>
              <p className="testimonial-content">"{testimonial.content}"</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Owner Section */}
        <div className="owner-section">
          <div className="owner-content">
            <div className="owner-image-container">
              <img 
                src={owner.image}
                alt={`${owner.name} - ${owner.title}`}
                className="owner-image"
              />
              <div className="owner-badge">NR Invisible Grills Founder</div>
            </div>
            <div className="owner-info">
              <h3>{owner.name}</h3>
              <p className="owner-title">{owner.title}</p>
              <p className="owner-company">{owner.company}</p>
              <p className="owner-message">{owner.message}</p>
              <div className="owner-credentials">
                <span className="credential">✓ 15+ Years Experience</span>
                <span className="credential">✓ 500+ Installations</span>
                <span className="credential">✓ 100% Customer Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
