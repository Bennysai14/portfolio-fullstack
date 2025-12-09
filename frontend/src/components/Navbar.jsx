// src/components/Navbar.jsx
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar-header">
      <nav className="navbar-nav">
        <a href="#home" className="navbar-brand">
          Venkatasai Vorsu
        </a>

        <div className="navbar-links">
          {[
            { href: "#about", label: "About" },
            { href: "#skills", label: "Skills" },
            { href: "#projects", label: "Projects" },
            { href: "#experience", label: "Experience" },
            { href: "#contact", label: "Contact" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link nav-button"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
