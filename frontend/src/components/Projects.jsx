// src/components/Projects.jsx
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="section fade-in">
      <h2 className="projects-title">Growth Journey</h2>
      <p className="section-lead">
        FULL STACK DEVELOPMENT | CLOUD INFRASTRUCTURE | AI SYSTEMS | Production banking systems with React → Spring Boot → GPT-4 → AWS deployments.
      </p>

      <div className="projects-orbit">
        {/* BEGINNER */}
        <div className="project-orbit-item beginner">
          <div className="project-compact">
            <div className="category-label">Beginner</div>
            <div className="project-icon">🌱</div>
            <span>HTML Landing</span>
            <p className="project-preview">First responsive landing page with HTML5, CSS3 Grid, Flexbox, animations learned from freeCodeCamp.</p>
          </div>
          <div className="project-explode beginner-explode">
            <h3>My First Website (2022)</h3>
            <div className="project-metrics">
              <div>HTML5 • CSS3 • Media Queries</div>
              <div>Responsive • Hover Effects</div>
            </div>
          </div>
        </div>

        <div className="project-orbit-item beginner">
          <div className="project-compact">
            <div className="category-label">Beginner</div>
            <div className="project-icon">⚡</div>
            <span>Todo App JS</span>
            <p className="project-preview">Vanilla JavaScript todo app with localStorage, drag-drop, dark mode toggle built following YouTube tutorials.</p>
          </div>
          <div className="project-explode beginner-explode">
            <h3>Vanilla JS Todo (2022)</h3>
            <div className="project-metrics">
              <div>JavaScript ES6 • localStorage</div>
              <div>Drag & Drop • Dark Mode</div>
            </div>
          </div>
        </div>

        {/* DATABASE MANAGEMENT */}
        <div className="project-orbit-item database">
          <div className="project-compact">
            <div className="category-label">Database</div>
            <div className="project-icon">🗄️</div>
            <span>DBMS Optimizer</span>
            <p className="project-preview">DATABASE MANAGEMENT banking database with indexing, query optimization, sharding, 10x query performance.</p>
          </div>
          <div className="project-explode database-explode">
            <h3>DATABASE Management System</h3>
            <div className="project-metrics">
              <div>MySQL • PostgreSQL • Indexing</div>
              <div>Query Optimization • Sharding</div>
            </div>
          </div>
        </div>

        {/* FULL STACK DEVELOPMENT */}
        <div className="project-orbit-item intermediate">
          <div className="project-compact">
            <div className="category-label">Frontend</div>
            <div className="project-icon">⚛️</div>
            <span>React Dashboard</span>
            <p className="project-preview">Real-time analytics dashboard with Chart.js, WebSocket updates, responsive design, 60fps animations.</p>
          </div>
          <div className="project-explode intermediate-explode">
            <h3>FULL STACK React Dashboard</h3>
            <div className="project-metrics">
              <div>Chart.js • Recharts • D3.js</div>
              <div>Real-time WebSocket • 60fps</div>
            </div>
          </div>
        </div>

        <div className="project-orbit-item intermediate">
          <div className="project-compact">
            <div className="category-label">Backend</div>
            <div className="project-icon">☕</div>
            <span>Banking API</span>
            <p className="project-preview">FULL STACK banking REST API with account management, transaction history, KYC verification, MySQL.</p>
          </div>
          <div className="project-explode intermediate-explode">
            <h3>FULL STACK Banking API (2023)</h3>
            <div className="project-metrics">
              <div>Accounts • Transactions • KYC</div>
              <div>Spring Boot • JPA • MySQL</div>
            </div>
          </div>
        </div>

        {/* JAVA ECOMMERCE */}
        <div className="project-orbit-item ecommerce featured">
          <div className="project-compact">
            <div className="category-label">Ecommerce</div>
            <div className="project-icon">🛒</div>
            <span>Java Ecommerce</span>
            <p className="project-preview">FULL STACK JAVA ecommerce with Spring Boot, Thymeleaf, MySQL, Stripe payments, inventory management.</p>
          </div>
          <div className="project-explode ecommerce-explode">
            <h3>FULL STACK Java Ecommerce (2024)</h3>
            <div className="project-metrics">
              <div>Spring Boot • Thymeleaf • JPA</div>
              <div>Stripe Payments • Inventory</div>
            </div>
            <a href="#" className="btn-primary">Live Store</a>
          </div>
        </div>

        {/* DISTRIBUTED SYSTEMS + KAFKA */}
        <div className="project-orbit-item kafka featured">
          <div className="project-compact">
            <div className="category-label">Kafka</div>
            <div className="project-icon">📡</div>
            <span>Event Streaming</span>
            <p className="project-preview">DISTRIBUTED SYSTEMS real-time transaction streaming with Kafka, Spring Boot consumers, 1M+ events/day processed.</p>
          </div>
          <div className="project-explode kafka-explode">
            <h3>DISTRIBUTED Kafka Streaming (2024)</h3>
            <div className="project-metrics">
              <div>Apache Kafka • 1M+ Events/Day</div>
              <div>Spring Kafka • Microservices</div>
            </div>
            <a href="#" className="btn-primary">Live Stream</a>
          </div>
        </div>

        <div className="project-orbit-item distributed">
          <div className="project-compact">
            <div className="category-label">Distributed</div>
            <div className="project-icon">🔗</div>
            <span>Microservices</span>
            <p className="project-preview">DISTRIBUTED SYSTEMS banking microservices architecture with Kafka event sourcing, service discovery, circuit breakers.</p>
          </div>
          <div className="project-explode distributed-explode">
            <h3>DISTRIBUTED Microservices (2024)</h3>
            <div className="project-metrics">
              <div>Kafka Event Sourcing • Eureka</div>
              <div>Hystrix • 99.99% Availability</div>
            </div>
          </div>
        </div>

        {/* CLOUD INFRASTRUCTURE */}
        <div className="project-orbit-item cloud featured">
          <div className="project-compact">
            <div className="category-label">CLOUD</div>
            <div className="project-icon">☁️</div>
            <span>AWS Banking Infra</span>
            <p className="project-preview">CLOUD production banking backend on AWS EKS Kubernetes, RDS Aurora, PCI-compliant security pipeline.</p>
          </div>
          <div className="project-explode cloud-explode">
            <h3>CLOUD Banking Infrastructure (2024)</h3>
            <div className="project-metrics">
              <div>AWS EKS • Aurora PostgreSQL</div>
              <div>PCI-DSS • GitHub Actions CI/CD</div>
            </div>
            <a href="#" className="btn-primary">Live Demo</a>
          </div>
        </div>

        {/* ANALYSIS OF ALGORITHMS */}
        <div className="project-orbit-item algorithms">
          <div className="project-compact">
            <div className="category-label">Algorithms</div>
            <div className="project-icon">⚙️</div>
            <span>Trading Optimizer</span>
            <p className="project-preview">ALGORITHM ANALYSIS high-frequency trading optimizer with O(log n) search, dynamic programming, backtesting engine.</p>
          </div>
          <div className="project-explode algorithms-explode">
            <h3>ALGORITHM Trading Optimizer</h3>
            <div className="project-metrics">
              <div>O(log n) Search • DP • Graph Theory</div>
              <div>15% Profit Improvement</div>
            </div>
          </div>
        </div>

        {/* AI SYSTEMS + LLMs */}
        <div className="project-orbit-item llm featured">
          <div className="project-compact">
            <div className="category-label">LLM</div>
            <div className="project-icon">🤖</div>
            <span>LLM Fraud AI</span>
            <p className="project-preview">LLM-powered fraud detection with GPT-4 fine-tuning, RAG pipeline, 98.5% accuracy on transaction patterns.</p>
          </div>
          <div className="project-explode llm-explode">
            <h3>LLM Fraud Detection (2025)</h3>
            <div className="project-metrics">
              <div>GPT-4 Fine-tuned • RAG Pipeline</div>
              <div>98.5% Accuracy • Real-time</div>
            </div>
            <a href="#" className="btn-primary">AI Demo</a>
          </div>
        </div>

        <div className="project-orbit-item expert">
          <div className="project-compact">
            <div className="category-label">Payments</div>
            <div className="project-icon">💳</div>
            <span>Payment Gateway</span>
            <p className="project-preview">FULL STACK UPI/ACH payment processor with fraud detection, webhook handling, multi-currency support.</p>
          </div>
          <div className="project-explode expert-explode">
            <h3>Payment Processing Gateway</h3>
            <div className="project-metrics">
              <div>Stripe • Razorpay • Webhooks</div>
              <div>Fraud Detection • Multi-currency</div>
            </div>
          </div>
        </div>

        <div className="project-orbit-item cloud">
          <div className="project-compact">
            <div className="category-label">Trading</div>
            <div className="project-icon">📈</div>
            <span>Algo Trading</span>
            <p className="project-preview">CLOUD algorithmic trading platform with live market data, backtesting, Redis caching deployed on AWS.</p>
          </div>
          <div className="project-explode cloud-explode">
            <h3>CLOUD Algo Trading Platform</h3>
            <div className="project-metrics">
              <div>WebSocket Markets • Backtesting</div>
              <div>AWS • Redis • Risk Management</div>
            </div>
          </div>
        </div>

        <div className="project-orbit-item fullstack">
          <div className="project-compact">
            <div className="category-label">Fullstack</div>
            <div className="project-icon">⭐</div>
            <span>Neo-Bank Platform</span>
            <p className="project-preview">FULL STACK neo-bank with React frontend, Spring Boot backend, Stripe payments, real-time transfers.</p>
          </div>
          <div className="project-explode fullstack-explode">
            <h3>FULL STACK Neo-Bank (2024)</h3>
            <div className="project-metrics">
              <div>React + Spring Boot + Stripe</div>
              <div>P2P Transfers • AWS Deployed</div>
            </div>
          </div>
        </div>
      </div>

      <div className="journey-stats">
        <div>FULL STACK → DATABASE → DISTRIBUTED → CLOUD → AI/LLM ENGINEER</div>
        <div>React + Java + Kafka + AWS + GPT-4 | 17 Projects • 99.9% Uptime</div>
      </div>
    </section>
  );
}

export default Projects;
