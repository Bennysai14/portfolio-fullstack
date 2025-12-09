// src/components/Experience.jsx
import "./Experience.css";

function Experience() {
  return (
    <section id="experience" className="section fade-in">
      <h2>Experience</h2>
      <p className="section-lead">
        Blending full stack, mobile and AI work with strong CS fundamentals.
      </p>
      
      <div className="experience-item">
        <h3>Full stack java developer, Intern | Besant Technologies</h3>
        <p className="date">
          03/2020 – 09/2020 · Chennai, India
        </p>
        <ul>
          <li>
            Completed a hands-on Java Full Stack internship focused on building real-world 
            applications using Java, Spring Boot, React.js, REST APIs, and MySQL.
          </li>
          <li>
            Gained practical experience in end-to-end development, including designing APIs, 
            integrating frontend and backend systems, and deploying projects.
          </li>
          <li>
            Worked on guided industry-level projects that improved my skills in debugging,
            version control (Git), code optimization, and agile development.
          </li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>Junior Developer | AI/ML Projects Intern – V Cyan IT Services</h3>
        <p className="date">
          10/2021 – 12/2023 · Hyderabad, India
        </p>
        <ul>
          <li>
            Built cross‑platform features in Flutter/Dart, integrating REST APIs with
            Spring Boot backends and PostgreSQL / MySQL databases.
          </li>
          <li>
            Optimized state management and UI performance in Flutter apps, reducing
            load times by about 40%.
          </li>
          <li>
            Helped design and deploy backend services using Docker, Jenkins and unit
            testing (JUnit) for reliable releases.
          </li>
          <li>
            Worked in Agile sprints with Jira, code reviews and daily stand‑ups to
            deliver production‑ready features.
          </li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>Grader – Missouri University of Science and Technology & Assistant Grader</h3>
        <p className="date">
          03/2024 – 08/2025 · Rolla, MO 65401
        </p>
        <ul>
          <li>
            Evaluated programming assignments, quizzes, and projects with attention to accuracy, 
            consistency, and academic standards.
          </li>
          <li>
            Provided constructive feedback to students, helping them strengthen problem-solving,
            coding style, and understanding of computer science fundamentals.
          </li>
          <li>
            Continued learning cloud‑native practices, CI/CD and AI integration while
            pursuing an M.S. in Computer Science at Missouri S&T.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
