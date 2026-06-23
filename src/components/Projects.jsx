const Projects = () => {
  return (
    <section className="portfolio-wrap section" id="portfolio">
      <div className="container">
        <div className="port-header reveal">
          <div>
            <div className="s-eye">04 — Selected work</div>
            <h2 className="s-heading">Our <em>Projects</em></h2>
          </div>
          <a href="#contact" className="btn-ghost" style={{ fontSize: "12px" }}>
            Work with us →
          </a>
        </div>

        <div className="port-grid reveal">
          <div
            className="port-card"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gridColumn: "1/-1",
              minHeight: "320px"
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "48px",
                  color: "rgba(184,146,42,0.2)",
                  letterSpacing: "4px"
                }}
              >
                COMING SOON
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "var(--muted)",
                  marginTop: "12px",
                  letterSpacing: "1px"
                }}
              >
                Our project portfolio is being updated. Check back soon.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
