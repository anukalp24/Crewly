import React from "react";
import "./Agents.css"
const Agents = () => {
  return (
    <main className="agents-page">
      <section className="agents-hero">
        <span className="page-eyebrow">AGENTS</span>

        <h1>
          Specialized agents.
          <span> One coordinated crew.</span>
        </h1>

        <p>
          Crewly gives each part of a workflow the right specialist, while an
          orchestrator coordinates the entire process.
        </p>
      </section>

      <section className="agent-architecture">
        <div className="architecture-header">
          <span>CREWLY ARCHITECTURE</span>
          <span>01 — 04</span>
        </div>

        <div className="orchestrator-card">
          <div className="architecture-icon">✦</div>

          <div>
            <span>ORCHESTRATOR</span>
            <h2>Coordinates the crew</h2>
            <p>
              Understands the objective, plans the workflow, delegates tasks,
              and brings the results together.
            </p>
          </div>
        </div>

        <div className="agent-grid">
          <article className="agent-page-card">
            <div className="agent-number">01</div>
            <div className="agent-page-icon">R</div>

            <span>RESEARCH</span>
            <h2>Research Agent</h2>

            <p>
              Searches, retrieves, analyzes, and synthesizes information from
              connected sources and knowledge bases.
            </p>

            <div className="agent-capabilities">
              <span>Web Research</span>
              <span>RAG</span>
              <span>Analysis</span>
            </div>
          </article>

          <article className="agent-page-card">
            <div className="agent-number">02</div>
            <div className="agent-page-icon">{"</>"}</div>

            <span>ENGINEERING</span>
            <h2>Coding Agent</h2>

            <p>
              Works with codebases, files, repositories, and development tools
              to analyze and implement technical tasks.
            </p>

            <div className="agent-capabilities">
              <span>Code Analysis</span>
              <span>Implementation</span>
              <span>GitHub</span>
            </div>
          </article>

          <article className="agent-page-card">
            <div className="agent-number">03</div>
            <div className="agent-page-icon">✓</div>

            <span>QUALITY</span>
            <h2>Review Agent</h2>

            <p>
              Evaluates outputs, identifies problems, checks requirements, and
              sends work back for improvement when necessary.
            </p>

            <div className="agent-capabilities">
              <span>Validation</span>
              <span>Critique</span>
              <span>Quality Checks</span>
            </div>
          </article>
        </div>
      </section>

      <section className="agent-flow">
        <span className="page-eyebrow">THE WORKFLOW</span>

        <h2>
          Plan.
          <span> Delegate. Review. Execute.</span>
        </h2>

        <div className="flow-steps">
          <div>
            <strong>01</strong>
            <h3>Understand</h3>
            <p>The orchestrator understands the objective.</p>
          </div>

          <div>
            <strong>02</strong>
            <h3>Delegate</h3>
            <p>Specialized agents receive the right tasks.</p>
          </div>

          <div>
            <strong>03</strong>
            <h3>Review</h3>
            <p>Results are evaluated before completion.</p>
          </div>

          <div>
            <strong>04</strong>
            <h3>Deliver</h3>
            <p>The crew produces the final result.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Agents;