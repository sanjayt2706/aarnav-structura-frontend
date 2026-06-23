const PILLARS = [
  { name: "IS Code Compliant", desc: "Every structure meets Bureau of Indian Standards specifications" },
  { name: "SUDA Approved", desc: "Full statutory compliance on all applicable Karnataka projects" },
  { name: "Milestone Billing", desc: "Transparent payments tied to verified, documented progress" },
  { name: "1-Year Warranty", desc: "Defect liability with responsive post-handover support" }
];

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="reveal">
            <div className="about-panel">
              <div className="about-panel-grid"></div>
              <div className="about-panel-mono">AS</div>
              <div className="about-corner c-tl"></div>
              <div className="about-corner c-tr"></div>
              <div className="about-corner c-bl"></div>
              <div className="about-corner c-br"></div>
              <div className="about-panel-badge">
                <div className="about-badge-num">10</div>
                <div className="about-badge-txt">
                  Elite specialists — every discipline in-house
                </div>
              </div>
            </div>
          </div>

          <div className="about-content reveal">
            <div className="s-eye">02 — Who we are</div>
            <h2 className="s-heading">
              Built on <em>trust.</em><br />Delivered with <em>care.</em>
            </h2>
            <p style={{ marginTop: "20px" }}>
              Aarnav Structura is Shivamogga's most complete construction
              team — 10 specialists across every domain of project delivery
              under one roof. No outsourcing gaps. No communication failures.
            </p>
            <p>
              We combine structural engineering rigour with intelligent
              design and proactive client communication. Every project runs
              on milestone-based transparency, so you always know exactly
              where your money is going.
            </p>
            <div className="pillars">
              {PILLARS.map((p) => (
                <div className="pillar" key={p.name}>
                  <div className="pillar-name">{p.name}</div>
                  <div className="pillar-desc">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
