import React from "react";
import "./Mcp.css"
const MCP = () => {
  return (
    <main className="mcp-page">
      <section className="mcp-hero">
        <span className="page-eyebrow">MCP</span>

        <h1>
          Give your agents
          <span> access to the tools they need.</span>
        </h1>

        <p>
          Connect Crewly agents to external tools, systems, and data through
          the Model Context Protocol.
        </p>
      </section>

      <section className="mcp-explanation">
        <div className="section-label">
          <span>01</span>
          <span>TOOL CONNECTIVITY</span>
        </div>

        <div className="mcp-content">
          <h2>
            AI becomes more useful
            <br />
            when it can actually interact.
          </h2>

          <p>
            MCP provides a standardized way for AI systems to discover and
            interact with external tools and resources.
          </p>

          <p>
            Crewly can use this layer to give specialized agents access to the
            systems required to complete their tasks.
          </p>
        </div>
      </section>

      <section className="mcp-tools">
        <div className="section-label">
          <span>02</span>
          <span>CONNECTED TOOLS</span>
        </div>

        <div className="mcp-tool-grid">
          <article>
            <div className="tool-icon">GH</div>
            <span>DEVELOPMENT</span>
            <h3>GitHub</h3>
            <p>
              Give coding agents access to repositories and development
              workflows.
            </p>
          </article>

          <article>
            <div className="tool-icon">FS</div>
            <span>FILES</span>
            <h3>Filesystem</h3>
            <p>
              Allow agents to work with project files and local context.
            </p>
          </article>

          <article>
            <div className="tool-icon">DB</div>
            <span>DATA</span>
            <h3>Databases</h3>
            <p>
              Connect agents to structured data and application systems.
            </p>
          </article>

          <article>
            <div className="tool-icon">+</div>
            <span>EXTENSIBLE</span>
            <h3>Custom MCP Servers</h3>
            <p>
              Connect Crewly to tools built specifically for your workflow.
            </p>
          </article>
        </div>
      </section>

      <section className="mcp-flow">
        <span className="page-eyebrow">THE CONNECTION</span>

        <div className="mcp-flow-line">
          <div>
            <strong>Agent</strong>
            <span>Needs a capability</span>
          </div>

          <div className="flow-arrow">→</div>

          <div>
            <strong>MCP</strong>
            <span>Connects the capability</span>
          </div>

          <div className="flow-arrow">→</div>

          <div>
            <strong>Tool</strong>
            <span>Performs the action</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MCP;