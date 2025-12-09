// src/components/Certifications.jsx
import "./Certifications.css";

function Certifications() {
  const certs = [
    { 
      icon: "☁️", 
      title: "AWS Certified Developer", 
      subtitle: "Associate", 
      year: "2025",
      color: "#3b82f6"
    },
    { 
      icon: "☕", 
      title: "Spring Professional", 
      subtitle: "Certification", 
      year: "2024",
      color: "#f59e0b"
    },
    { 
      icon: "📱", 
      title: "Google Flutter", 
      subtitle: "Certification", 
      year: "2023",
      color: "#10b981"
    },
    { 
      icon: "🌐", 
      title: "freeCodeCamp", 
      subtitle: "Responsive Web Design", 
      year: "2022",
      color: "#8b5cf6"
    }
  ];

  return (
    <section id="certifications" className="cert-section fade-in">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <p className="section-lead">
          Industry-recognized credentials validating production expertise across cloud, backend, mobile, and web development.
        </p>
        
        <div className="cert-grid">
          {certs.map((cert, index) => (
            <div key={index} className="cert-card" style={{borderColor: cert.color}}>
              <div className="cert-icon" style={{background: cert.color}}> 
                {cert.icon}
              </div>
              <div className="cert-content">
                <h3>{cert.title}</h3>
                <p>{cert.subtitle}</p>
                <span className="cert-year">{cert.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
