import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <main className="main">

      {/* =========================
          HERO
      ========================= */}

      <section className="hero">

        <h1>
          Give your goal.
          <br />
          <span>Let your crew handle the work.</span>
        </h1>

        <p className="hero-text">
          CrewAi coordinates specialized AI agents, tools, and knowledge
          to turn complex tasks into completed work.
        </p>

        <div className="hero-buttons">

          <a href="/signup" className="primary-button">
            Start building
            <span>→</span>
          </a>

          <a href="/agents" className="secondary-button">
            Explore CrewAi
          </a>

        </div>

      </section>


      {/* =========================
          HOW CREWAI WORKS
      ========================= */}

      <section className="workflow-section">

        <div className="section-heading">
          <span>HOW CREWAI WORKS</span>
        </div>


        <div className="workflow">

          {/* ORCHESTRATOR */}

          <div className="orchestrator">

            <div className="workflow-icon">
              ✦
            </div>

            <div className="workflow-content">

              <span>ORCHESTRATOR</span>

              <h3>
                Coordinates the work
              </h3>

              <p>
                Understands the goal, plans the workflow, delegates tasks,
                and brings the results together.
              </p>

            </div>

          </div>


          {/* CONNECTION */}

          <div className="workflow-connector">

            <span className="connector-line"></span>

            <span className="connector-node node-one"></span>

            <span className="connector-node node-two"></span>

            <span className="connector-node node-three"></span>

          </div>


          {/* SPECIALIZED AGENTS */}

          <div className="agents">

            {/* RESEARCH */}

            <article className="agent">

              <div className="agent-top">

                <div className="agent-icon research-icon">
                  R
                </div>

                <span>01</span>

              </div>

              <span className="agent-label">
                RESEARCH
              </span>

              <h3>
                Research Agent
              </h3>

              <p>
                Searches, retrieves, analyzes, and synthesizes information
                from connected sources.
              </p>

            </article>


            {/* CODING */}

            <article className="agent">

              <div className="agent-top">

                <div className="agent-icon coding-icon">
                  &lt;/&gt;
                </div>

                <span>02</span>

              </div>

              <span className="agent-label">
                ENGINEERING
              </span>

              <h3>
                Coding Agent
              </h3>

              <p>
                Works with codebases, repositories, files, and development
                tools to implement technical tasks.
              </p>

            </article>


            {/* REVIEW */}

            <article className="agent">

              <div className="agent-top">

                <div className="agent-icon review-icon">
                  ✓
                </div>

                <span>03</span>

              </div>

              <span className="agent-label">
                QUALITY
              </span>

              <h3>
                Review Agent
              </h3>

              <p>
                Checks outputs, identifies problems, and sends work back
                for improvement when needed.
              </p>

            </article>

          </div>


          {/* FINAL RESULT */}

          <div className="final-result">

            <span>✓</span>

            Completed Work

          </div>

        </div>

      </section>

{/* =========================
    CAPABILITIES
========================= */}

<section className="capabilities-section">

  <div className="section-heading">
    <span>BUILT FOR REAL WORK</span>

    <h2>
      Give your crew
      <br />
      <span>the capabilities it needs.</span>
    </h2>
  </div>

  <div className="capabilities-list">

    <article className="capability-card">

      <span>01</span>

      <h3>
        Upload Your Data
      </h3>

      <p>
        Upload your documents and project data so your agents can
        retrieve the right context and work with your own knowledge.
      </p>

    </article>


    <article className="capability-card">

      <span>02</span>

      <h3>
        Connect Your Tools
      </h3>

      <p>
        Connect GitHub, files, databases, and external services
        through MCP so your agents can take action.
      </p>

    </article>

  </div>

</section>


      {/* =========================
          FINAL CTA
      ========================= */}

      <section className="main-cta">

        <span>
          READY TO BUILD?
        </span>

        <h2>
          Your next task.
          <br />
          <span>Handled by your AI crew.</span>
        </h2>

        <a href="/signup" className="primary-button">
          Build with CrewAi
          <span>→</span>
        </a>

      </section>

    </main>
  );
};

export default Main;