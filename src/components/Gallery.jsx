import '../styles/Gallery.css';
import Carousel from './Carousel';
import aestheticImg from '../assets/AestheticView.jpg';
import balconyImg from '../assets/balconyview.jpg';
import durabilityImg from '../assets/DurabilityAndLowMaaintanece.jpg';
import safetyImg from '../assets/Enhancedsafety.jpeg';
import ecoImg from '../assets/EcoFriendly.png';
import viewImg from '../assets/unObstructedViews.png';

// Import new invisible grills images
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpeg';
import img5 from '../assets/img5.jpeg';
import img6 from '../assets/img6.jpeg';

export default function Gallery() {
  // Carousel images - these will rotate
  const carouselImages = [
    {
      src: aestheticImg,
      alt: 'Aesthetic View - Modern Invisible Grills Design',
      caption: 'Beautiful Aesthetic Design - Seamless Integration with Architecture'
    },
    {
      src: balconyImg,
      alt: 'Balcony View - NR Invisible Grills Installation',
      caption: 'Stunning Balcony Views - Protected with Invisible Grills'
    },
    {
      src: safetyImg,
      alt: 'Enhanced Safety - Children and Pet Protection',
      caption: 'Maximum Safety for Your Family - Invisible Protection'
    },
    {
      src: viewImg,
      alt: 'Unobstructed Views - Clear Transparent Safety Grills',
      caption: 'Unobstructed Panoramic Views - Enjoy the Beauty'
    },
    {
      src: ecoImg,
      alt: 'Eco-Friendly Solution - Chemical-Free Materials',
      caption: '100% Eco-Friendly - Safe for Environment and Family'
    },
    {
      src: durabilityImg,
      alt: 'Durability and Low Maintenance - Long-Lasting Solution',
      caption: 'Durable & Low Maintenance - Lasts for 25+ Years'
    }
  ];

  // Gallery grid images
  const galleryImages = [
    { id: 1, img: aestheticImg, title: 'Aesthetic Design', category: 'Design' },
    { id: 2, img: balconyImg, title: 'Balcony Protection', category: 'Balcony' },
    { id: 3, img: safetyImg, title: 'Enhanced Safety', category: 'Safety' },
    { id: 4, img: viewImg, title: 'Unobstructed Views', category: 'Views' },
    { id: 5, img: ecoImg, title: 'Eco-Friendly', category: 'Environment' },
    { id: 6, img: durabilityImg, title: 'Durability', category: 'Features' }
  ];

  // Invisible grills carousel images - new collection
  const invisibleGrillsImages = [
    {
      src: img1,
      alt: 'Professional Invisible Grills Installation - NR Invisible Grills Bangalore',
      caption: 'Premium Invisible Grills - Bangalore'
    },
    {
      src: img2,
      alt: 'Modern Invisible Safety Grills - Window Protection',
      caption: 'Modern Safety Solution'
    },
    {
      src: img3,
      alt: 'Custom Invisible Grills Design - Balcony Safety Nets',
      caption: 'Custom Design Installation'
    },
    {
      src: img4,
      alt: 'Invisible Grills for Child & Pet Protection',
      caption: 'Family Safety Protection'
    },
    {
      src: img5,
      alt: 'High Quality Invisible Grills - Transparent Safety',
      caption: 'Crystal Clear Protection'
    },
    {
      src: img6,
      alt: 'Durable Invisible Grills System - Long Lasting Installation',
      caption: 'Durable & Reliable'
    }
  ];

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <div className="section-header">
          <h2>See How NR Invisible Grills Transforms Homes Across Bangalore</h2>
          <p>Explore our beautiful portfolio of professional installations</p>
        </div>

        {/* Carousel Slider */}
        <div className="gallery-carousel-section">
          <Carousel 
            images={carouselImages}
            title="Featured Projects - Scroll Through Our Work"
            autoPlay={true}
          />
        </div>

        {/* Gallery Grid */}
        <div className="gallery-section-title">
          <h3>Gallery Highlights</h3>
          <p>Click on any image to view details</p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div key={image.id} className="gallery-item">
              <img 
                src={image.img}
                alt={image.title}
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <h3>{image.title}</h3>
                <p>{image.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* New Invisible Grills Carousel */}
        <div className="gallery-section-title" style={{ marginTop: '60px' }}>
          <h3>Our Invisible Grills Portfolio</h3>
          <p>Latest installations across Bangalore - Bird control, Cat protection & Window safety</p>
        </div>

        <div className="gallery-carousel-section">
          <Carousel 
            images={invisibleGrillsImages}
            title="Invisible Grills Collection"
            autoPlay={true}
          />
        </div>

        {/* Additional Invisible Grills Grid */}
        <div className="invisible-grills-grid">
          {invisibleGrillsImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img 
                src={image.src}
                alt={image.alt}
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <h3>{image.caption}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-cta">
          <h3>Want to see more projects?</h3>
          <p>Our team has transformed 500+ homes across Bangalore</p>
          <button className="btn-primary">
            <a href="tel:+919000888367">Schedule Free Site Visit</a>
          </button>
        </div>
      </div>
    </section>
  );
}
