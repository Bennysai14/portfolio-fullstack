// src/components/Skills.jsx
import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="section fade-in">
      <h2>Tech Stack & Skills</h2>
      <p className="section-lead">
        Production-grade expertise across modern full-stack development, mobile apps, 
        cloud infrastructure, AI/ML, DevOps automation, and software engineering practices.
      </p>

      <div className="skills-grid">
        {/* 1. FRONTEND DEVELOPMENT */}
        <div className="skill-category">
          <div className="skill-header">
            <h3 className="skill-title">Frontend</h3>
            <div className="skill-level high">Advanced</div>
          </div>
          <div className="skill-stack">
            <span className="skill-tag primary">React.js</span>
            <span className="skill-tag primary">Next.js</span>
            <span className="skill-tag primary">Flutter/Dart</span>
            <span className="skill-tag">TypeScript</span>
            <span className="skill-tag">Tailwind CSS</span>
            <span className="skill-tag">Zustand/Redux</span>
          </div>
          <p className="skill-desc">
            Component architecture, SSR/SSG, mobile-first responsive design, 
            performance optimization, accessibility (a11y), and modern state management.
          </p>
        </div>

        {/* 2. BACKEND DEVELOPMENT */}
        <div className="skill-category">
          <div className="skill-header">
            <h3 className="skill-title">Backend</h3>
            <div className="skill-level high">Advanced</div>
          </div>
          <div className="skill-stack">
            <span className="skill-tag primary">Java/Spring Boot</span>
            <span className="skill-tag primary">REST/GraphQL APIs</span>
            <span className="skill-tag primary">Spring Security</span>
            <span className="skill-tag">JWT/OAuth2</span>
            <span className="skill-tag">Redis Caching</span>
            <span className="skill-tag">JUnit Testing</span>
          </div>
          <p className="skill-desc">
            Microservices architecture, authentication/authorization, rate limiting, 
            API documentation (Swagger), caching strategies, and comprehensive testing.
          </p>
        </div>

        {/* 3. DATABASES */}
        <div className="skill-category">
          <div className="skill-header">
            <h3 className="skill-title">Databases</h3>
            <div className="skill-level high">Advanced</div>
          </div>
          <div className="skill-stack">
            <span className="skill-tag primary">PostgreSQL</span>
            <span className="skill-tag primary">MySQL</span>
            <span className="skill-tag">MongoDB</span>
            <span className="skill-tag">Redis</span>
            <span className="skill-tag">Elasticsearch</span>
            <span className="skill-tag">JPA/Hibernate</span>
          </div>
          <p className="skill-desc">
            Schema design, indexing, migrations, query optimization, sharding, 
            transactions, and NoSQL document modeling for high-performance apps.
          </p>
        </div>

        {/* 4. MOBILE & CROSS-PLATFORM */}
        <div className="skill-category">
          <div className="skill-header">
            <h3 className="skill-title">Mobile</h3>
            <div className="skill-level high">Advanced</div>
          </div>
          <div className="skill-stack">
            <span className="skill-tag primary">Flutter/Dart</span>
            <span className="skill-tag">React Native</span>
            <span className="skill-tag">Firebase</span>
            <span className="skill-tag">State Management</span>
            <span className="skill-tag">Push Notifications</span>
            <span className="skill-tag">App Store Deploy</span>
          </div>
          <p className="skill-desc">
            Cross-platform mobile apps with native performance, offline sync, 
            push notifications, secure local storage, and production deployment.
          </p>
        </div>

        {/* 5. DEVOPS & CLOUD */}
        <div className="skill-category">
          <div className="skill-header">
            <h3 className="skill-title">DevOps</h3>
            <div className="skill-level medium">Proficient</div>
          </div>
          <div className="skill-stack">
            <span className="skill-tag primary">Docker</span>
            <span className="skill-tag primary">Jenkins CI/CD</span>
            <span className="skill-tag">Kubernetes</span>
            <span className="skill-tag">AWS/GCP</span>
            <span className="skill-tag">GitHub Actions</span>
            <span className="skill-tag">Terraform</span>
          </div>
          <p className="skill-desc">
            Containerization, CI/CD pipelines, infrastructure as code, 
            monitoring (CloudWatch/Prometheus), and automated deployments.
          </p>
        </div>

        {/* 6. AI/ML & ENGINEERING */}
        <div className="skill-category">
          <div className="skill-header">
            <h3 className="skill-title">AI & Practices</h3>
            <div className="skill-level medium">Proficient</div>
          </div>
          <div className="skill-stack">
            <span className="skill-tag accent">OpenAI APIs</span>
            <span className="skill-tag accent">LangChain</span>
            <span className="skill-tag">Agile/Jira</span>
            <span className="skill-tag">TDD/CI</span>
            <span className="skill-tag">Code Reviews</span>
            <span className="skill-tag">Performance</span>
          </div>
          <p className="skill-desc">
            LLM integrations, prompt engineering, Agile/Scrum workflows, 
            test-driven development, code quality, and production optimization.
          </p>
        </div>
      </div>

      {/* PROFICIENCY LEGEND */}
     <div className="skills-legend">
  <div className="legend-item">
    <div className="skill-level high legend-level"></div>
    <span><strong>Advanced</strong> - Production</span>
  </div>
  <div className="legend-item">
    <div className="skill-level medium legend-level"></div>
    <span><strong>Proficient</strong> - Hands-on</span>
  </div>
  <div className="legend-item">
    <span className="skill-tag accent legend-tag">AI/ML</span>
    <span>Specialized Technologies</span>
  </div>
</div>

    </section>
  );
}

export default Skills;
