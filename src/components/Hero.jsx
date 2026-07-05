import useCounter from "../hooks/useCounter";

// Unsplash construction images used as placeholders —
// replace with actual project photos before launch.
const HERO_BG = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80";

const Stat = ({ target, suffix, label }) => {
  const { ref, value } = useCounter(target);
  return (
    <div className="hstat">
      <div className="hstat-n" ref={ref}>
        {value}{value >= target ? suffix : ""}
      </div>
      <div className="hstat-l">{label}</div>
    </div>
  );
};

const Hero = () => (
  <section className="hero" id="home">
    {/* LEFT */}
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

    {/* RIGHT — landscape logo / construction image fills the half */}
    <div className="hero-r">
      <div className="hero-r-logo-bg">
        {/* Replace src with the actual Aarnav Structura landscape logo/banner image */}
        <img
          src={HERO_BG}
          alt="Aarnav Structura — construction excellence"
        />
      </div>
      <div className="hero-r-overlay" />
      <div className="hero-r-grid" />
      <div className="hero-location">📍 Shivamogga · Karnataka · India</div>
      <div className="hero-stats">
        <Stat target={50}  suffix="+" label="Projects Delivered" />
        <Stat target={10}  suffix="+" label="Expert Team" />
        <Stat target={100} suffix="%" label="IS Compliant" />
        <Stat target={5}   suffix="+" label="Yrs Avg Experience" />
      </div>
    </div>
  </section>
);

export default Hero;
