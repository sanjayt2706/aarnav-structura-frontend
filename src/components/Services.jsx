const SERVICES = [
  {
    no: "01",
    name: "Residential Construction",
    desc: "Custom villas, independent homes, and multi-storey residences built to IS code. Full turnkey delivery across Shivamogga and Karnataka — foundation to handover."
  },
  {
    no: "02",
    name: "Commercial Fit-Outs",
    desc: "Office spaces, retail outlets, showrooms, and hospitality interiors. Designed for performance, built for longevity, delivered on time."
  },
  {
    no: "03",
    name: "Structural & Civil Works",
    desc: "Foundation engineering, RCC framing, load analysis, and civil infrastructure executed with precision and full IS code compliance."
  },
  {
    no: "04",
    name: "Architecture & Design",
    desc: "Concept design, working drawings, 3D visualisation, and BBMP / BDA plan submission handled end-to-end by our licensed architects."
  },
  {
    no: "05",
    name: "Project Management",
    desc: "BOQ preparation, contractor coordination, timeline management, quality audits, and milestone-based client reporting throughout the build."
  },
  {
    no: "06",
    name: "Renovation & Restoration",
    desc: "Structural strengthening, full interior makeovers, façade upgrades, and MEP overhauls for existing residential and commercial buildings."
  }
];

const Services = () => {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="svc-header reveal">
          <div>
            <div className="s-eye">01 — What we deliver</div>
            <h2 className="s-heading">Our <em>Services</em></h2>
          </div>
          <a href="#contact" className="btn-ghost" style={{ fontSize: "12px" }}>
            Request a consultation →
          </a>
        </div>

        <div className="svc-grid reveal">
          {SERVICES.map((svc) => (
            <div className="svc-card" key={svc.no}>
              <span className="svc-no">{svc.no}</span>
              <div className="svc-name">{svc.name}</div>
              <div className="svc-desc">{svc.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
