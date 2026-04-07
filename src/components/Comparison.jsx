import '../styles/Comparison.css';

export default function Comparison() {
  const comparisonData = [
    {
      feature: 'Rust-Proof',
      nr: 'Yes - Marine Grade 316 SS',
      traditional: 'No - Rusts over time'
    },
    {
      feature: 'Weather-Proof',
      nr: 'Yes - Withstands harsh conditions',
      traditional: 'No - Prone to corrosion'
    },
    {
      feature: 'Kids Safety',
      nr: 'Yes - 100% Chemical-Free',
      traditional: 'No - Paint chips off'
    },
    {
      feature: 'View Design',
      nr: 'Great - 2mm unobstructed view',
      traditional: 'Poor - Thick, blocks view'
    },
    {
      feature: 'Maintenance',
      nr: 'Easy - Just pull strings to clean',
      traditional: 'Tedious - Requires wiping'
    },
    {
      feature: 'Fire Safety',
      nr: 'Yes - Can be cut for escape',
      traditional: 'No - Blocks emergency exit'
    },
    {
      feature: 'Interior Looks',
      nr: 'Modern & Aesthetic',
      traditional: 'Boring & Outdated'
    },
    {
      feature: 'Load Capacity',
      nr: '400+ kg capacity',
      traditional: 'Limited capacity'
    }
  ];

  return (
    <section className="comparison">
      <div className="comparison-container">
        <div className="section-header">
          <h2>NR Invisible Grills vs Traditional Grills</h2>
          <p>Why customers choose us over traditional solutions</p>
        </div>

        <div className="comparison-table">
          <div className="comparison-header">
            <div className="comparison-col feature-col">Feature</div>
            <div className="comparison-col nr-col">
              <h3>NR Invisible Grills</h3>
            </div>
            <div className="comparison-col traditional-col">
              <h3>Traditional Grills</h3>
            </div>
          </div>

          {comparisonData.map((row, index) => (
            <div key={index} className="comparison-row">
              <div className="comparison-col feature-col">
                <span>{row.feature}</span>
              </div>
              <div className="comparison-col nr-col">
                <p className="yes">✓ {row.nr}</p>
              </div>
              <div className="comparison-col traditional-col">
                <p className="no">✗ {row.traditional}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="comparison-cta">
          <h3>Make the smart choice for your home</h3>
          <button className="btn-primary">Get Your Free Estimate</button>
        </div>
      </div>
    </section>
  );
}
