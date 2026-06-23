const Testimonials = () => {
  return (
    <section className="testi-wrap section-sm">
      <div className="container">
        <div className="reveal" style={{ textAlign: "center" }}>
          <div className="s-eye" style={{ justifyContent: "center" }}>
            05 — Client voices
          </div>
          <h2 className="s-heading">What our <em>clients say</em></h2>
        </div>

        <div
          className="testi-grid reveal"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "200px"
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "32px", marginBottom: "12px" }}>⭐</div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "20px",
                fontStyle: "italic",
                color: "var(--muted)"
              }}
            >
              Client testimonials coming soon.
            </div>
            <div style={{ fontSize: "13px", color: "var(--muted)", marginTop: "8px" }}>
              We're just getting started — great reviews on the way.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
