const Footer = () => {
  return (
    <footer>
      <div className="footer-main">
        <div>
          <span className="f-logo-name">Aarnav <span>Structura</span></span>
          <div className="f-tagline">
            Premium construction and civil engineering headquartered in
            Shivamogga, Karnataka. Building excellence across the state.
          </div>
        </div>

        <div className="f-col">
          <div className="f-col-title">Services</div>
          <ul>
            <li><a href="#services">Residential</a></li>
            <li><a href="#services">Commercial</a></li>
            <li><a href="#services">Structural</a></li>
            <li><a href="#services">Architecture</a></li>
            <li><a href="#services">Renovation</a></li>
          </ul>
        </div>

        <div className="f-col">
          <div className="f-col-title">Company</div>
          <ul>
            <li><a href="#about">About us</a></li>
            <li><a href="#process">Our process</a></li>
            <li><a href="#portfolio">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="f-col">
          <div className="f-col-title">Legal</div>
          <ul>
            <li><a href="#">SUDA Approved</a></li>
            <li><a href="#">IS Code Standards</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li>
              <a href="https://anrvictoriumgroup.netlify.app" style={{ color: "var(--gold)" }}>
                ANR Victorium Group ↗
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bar">
        <span>
          © 2026 Aarnav Structura &nbsp;·&nbsp; A subsidiary of{" "}
          <a href="https://anrvictoriumgroup.netlify.app" style={{ color: "var(--gold-lt)" }}>
            ANR Victorium Group
          </a>{" "}
          &nbsp;·&nbsp; Shivamogga, Karnataka
        </span>
        <span>Built with precision. Delivered with integrity.</span>
      </div>
    </footer>
  );
};

export default Footer;
