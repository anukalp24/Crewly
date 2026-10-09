import React from "react";
import "./Upload.css";

const Upload = () => {
  return (
    <main className="upload-data-page">
      {/* Hero */}
      <section className="upload-hero">
        <span className="page-eyebrow">DATA & CONTEXT</span>

        <h1>
          Upload your data.
          <span> Give your agents context.</span>
        </h1>

        <p>
          Add documents and knowledge to Crewly so your AI agents can retrieve
          the information they need while completing complex tasks.
        </p>
      </section>

      {/* Upload Area */}
      <section className="upload-section">
        <div className="upload-card">
          <div className="upload-icon">
            ↑
          </div>

          <h2>Upload your files</h2>

          <p>
            Drag and drop your documents here or choose files from your
            computer.
          </p>

          <button className="upload-button">
            Choose files
          </button>

          <span className="upload-hint">
            PDF, DOCX, TXT, CSV and other supported formats
          </span>
        </div>
      </section>

      {/* How it works */}
      <section className="upload-process">
        <div className="section-label">
          <span>01</span>
          <span>HOW IT WORKS</span>
        </div>

        <div className="process-grid">
          <article className="process-card">
            <span>01</span>

            <div className="process-icon">
              ↑
            </div>

            <h3>Upload</h3>

            <p>
              Add your documents and information to your Crewly workspace.
            </p>
          </article>

          <article className="process-card">
            <span>02</span>

            <div className="process-icon">
              ◇
            </div>

            <h3>Process</h3>

            <p>
              Your data can be processed and prepared for semantic retrieval.
            </p>
          </article>

          <article className="process-card">
            <span>03</span>

            <div className="process-icon">
              ⌕
            </div>

            <h3>Retrieve</h3>

            <p>
              Relevant context can be retrieved when an agent needs it.
            </p>
          </article>

          <article className="process-card">
            <span>04</span>

            <div className="process-icon">
              ✦
            </div>

            <h3>Use</h3>

            <p>
              Agents can use your information while executing their tasks.
            </p>
          </article>
        </div>
      </section>

      {/* Supported Sources */}
      <section className="data-sources">
        <div className="section-label">
          <span>02</span>
          <span>YOUR DATA</span>
        </div>

        <div className="source-content">
          <div>
            <h2>
              Bring the context
              <br />
              your agents need.
            </h2>

            <p>
              Keep the information that matters to your workflows in one
              place, ready to be used by your AI crew.
            </p>
          </div>

          <div className="source-list">
            <div className="source-item">
              <span>01</span>
              <div>
                <h3>Documents</h3>
                <p>PDFs, text files and documentation.</p>
              </div>
            </div>

            <div className="source-item">
              <span>02</span>
              <div>
                <h3>Company Data</h3>
                <p>Internal information and business knowledge.</p>
              </div>
            </div>

            <div className="source-item">
              <span>03</span>
              <div>
                <h3>Research</h3>
                <p>Reports, notes and reference material.</p>
              </div>
            </div>

            <div className="source-item">
              <span>04</span>
              <div>
                <h3>Project Context</h3>
                <p>Information your agents need to complete a task.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="upload-closing">
        <span className="page-eyebrow">BETTER CONTEXT. BETTER WORK.</span>

        <h2>
          Give your crew
          <br />
          <span>the full picture.</span>
        </h2>
      </section>
    </main>
  );
};

export default Upload;