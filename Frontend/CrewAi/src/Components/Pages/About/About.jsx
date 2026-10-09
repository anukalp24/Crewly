import React from "react";
import "./About.css"
const About = () => {
  return (
    <main className="about-page">
      <section className="about-hero">
        <span className="page-eyebrow">ABOUT CREWLY</span>

        <h1>
          AI systems built to
          <span> do the work.</span>
        </h1>

        <p>
          Crewly is an AI engineering platform designed to coordinate
          specialized agents, tools, and knowledge into workflows that can
          handle complex work from start to finish.
        </p>
      </section>

      <section className="about-story">
        <div className="section-label">
          <span>01</span>
          <span>THE IDEA</span>
        </div>

        <div className="about-story-content">
          <h2>
            From asking AI questions
            <br />
            to giving AI work.
          </h2>

          <p>
            Most AI interfaces are built around conversations. You ask a
            question, receive an answer, and continue from there.
          </p>

          <p>
            Crewly takes a different approach. Give the system a complex
            objective and let an orchestrator break it down, delegate work to
            specialized agents, use connected tools, review the results, and
            bring everything together.
          </p>
        </div>
      </section>

      <section className="about-principles">
        <div className="section-label">
          <span>02</span>
          <span>WHAT WE BELIEVE</span>
        </div>

        <div className="principles-grid">
          <article>
            <span>01</span>
            <h3>Execution over conversation</h3>
            <p>
              AI should be capable of completing meaningful workflows, not
              just generating another response.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Specialization matters</h3>
            <p>
              Different tasks require different capabilities. Specialized
              agents can work together instead of forcing one model to do
              everything.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Tools make AI useful</h3>
            <p>
              Real work requires access to code, documents, systems, data,
              and external tools.
            </p>
          </article>
        </div>
      </section>

      <section className="about-closing">
        <p>THE FUTURE OF AI WORK</p>

        <h2>
          One goal.
          <br />
          An entire crew.
        </h2>
      </section>
    </main>
  );
};

export default About;