import useNavBehavior from "../hooks/useNavBehavior";

const Navbar = () => {
  const { hidden, scrolled } = useNavBehavior();

  const cls = [
    hidden ? "hidden" : "",
    scrolled ? "scrolled" : ""
  ].filter(Boolean).join(" ");

  return (
    <nav className={cls}>
      <div className="logo">
        <div className="logo-mark"><span>AS</span></div>
        <div>
          <span className="logo-name">Aarnav Structura</span>
          <span className="logo-sub">Construction &amp; Civil Engineering</span>
        </div>
      </div>
      <div className="nav-right">
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#portfolio">Projects</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#brochure">Brochure</a></li>
        </ul>
        <a href="#contact" className="nav-btn">Start a Project</a>
      </div>
    </nav>
  );
};

export default Navbar;
