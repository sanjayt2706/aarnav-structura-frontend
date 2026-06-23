import AnimatedCounter from "./AnimatedCounter.jsx";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-l">
        <div className="hero-eyebrow">Shivamogga, Karnataka — Est. 2020</div>
        <h1 className="hero-h1">
          BUILT<br />
          <span className="script">with purpose</span>
          DELIVERED<br />WITH PRECISION
        </h1>
        <p className="hero-body">
          Aarnav Structura is Shivamogga's premier construction and civil
          engineering firm — combining technical excellence, intelligent
          design, and client-first delivery across Karnataka.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary">Start your project</a>
          <a href="#portfolio" className="btn-ghost">View our work</a>
        </div>
      </div>

      <div className="hero-r">
        <div className="hero-r-grid"></div>
        <div className="hero-r-mono">AS</div>
        <div className="hero-location">📍 Shivamogga · Karnataka · India</div>
        <div className="hero-stats">
          <div className="hstat">
            <AnimatedCounter target={50} className="hstat-n" />
            <div className="hstat-l">Projects Delivered</div>
          </div>
          <div className="hstat">
            <AnimatedCounter target={10} className="hstat-n" />
            <div className="hstat-l">Expert Team</div>
          </div>
          <div className="hstat">
            <AnimatedCounter target={100} isPercent className="hstat-n" />
            <div className="hstat-l">% IS Compliant</div>
          </div>
          <div className="hstat">
            <AnimatedCounter target={5} className="hstat-n" />
            <div className="hstat-l">Yrs Avg Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
