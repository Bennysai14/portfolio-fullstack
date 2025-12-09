// src/components/Hero.jsx
import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import "./Hero.css";

function Hero() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <section id="hero" className="hero fade-in">
      {/* Particles - absolute background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "#0d0d0d" },
          fullScreen: { enable: false },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "grab" }, resize: true },
            modes: { grab: { distance: 140, links: { opacity: 0.4 } } },
          },
          particles: {
            number: { value: 80 },
            size: { value: 3 },
            move: { enable: true, speed: 1.5 },
            links: {
              enable: true,
              color: "#ffffff",
              distance: 150,
              opacity: 0.28,
              width: 1,
            },
            color: { value: "#ffffff" },
          },
        }}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Hero inner layout */}
      <div className="hero-inner">
        {/* LEFT: main hero content */}
        <div className="hero-left">
          <div className="hero-badge">
            <span>Software Engineer · Full Stack & JAVA DEVELOPER</span>
          </div>

          <h1 className="hero-title">
            Building reliable web, mobile and AI-powered systems.
          </h1>

          <p className="hero-sub">
            Software Engineer with 2+ years in Flutter, React, Java/Spring Boot and SQL, shipping end-to-end features in agile teams and experimenting with AI.
          </p>

          {/* INLINE Hero Metrics */}
          <div className="hero-metrics">
            <div className="metric-item">
              <span className="metric-number">2.6+</span>
              <span>Years Exp</span>
            </div>
            <div className="metric-item">
              <span className="metric-number">17</span>
              <span>Projects</span>
            </div>
            <div className="metric-item">
              <span className="metric-number">99.9%</span>
              <span>Uptime</span>
            </div>
            <div className="metric-item">
              <span className="metric-number">50K+</span>
              <span>Lines Code</span>
            </div>
          </div>

          {/* INLINE H1B Badge */}
          <div className="h1b-badge">
            <div className="badge-icon">🎯</div>
            <div className="badge-text">
              <strong>H1B Eligible</strong>
              <small>Missouri S&T MS CS | FALL 2025 | GPA 3.8</small>
            </div>
          </div>

          <div className="btn-row">
            <a href="#projects" className="btn-primary">
              View projects
            </a>
            <a href="#contact" className="btn-primary">
              Contact me
            </a>
          </div>
        </div>

        {/* RIGHT: card */}
        <div className="hero-right fade-in">
          <div className="card">
            <div className="card-content">
              <div>
                <p className="card-meta">Currently</p>
                <h3 className="card-title">M.S. CS @ Missouri S&T</h3>
                <p className="card-body">
                  Focusing on web development, scalable backends and cloud-ready systems while building real projects like this portfolio.
                </p>
              </div>
              <p className="card-meta">
                Tech snapshot: Flutter · React · Spring Boot · PostgreSQL · MySQL · Docker
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
