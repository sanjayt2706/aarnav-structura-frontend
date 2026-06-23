const TICKER_ITEMS = [
  "Residential Construction",
  "Commercial Fit-outs",
  "Structural Engineering",
  "SUDA Approved",
  "Interior Design",
  "Project Management",
  "Civil Works",
  "Shivamogga · Karnataka"
];

// Rendered twice in sequence so the CSS animation (translateX -50%)
// creates a seamless infinite loop, exactly like the static site.
const Ticker = () => {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="ticker">
      <div className="ticker-inner">
        {items.map((item, idx) => (
          <span key={idx}>
            {item}
            <span className="dot">&nbsp;◆&nbsp;</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
