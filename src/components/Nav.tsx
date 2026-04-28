export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="brand">
          <span className="brand-mark">A</span>
          AgriVision
        </a>
        <nav className="nav-links">
          <a href="#problem">The Problem</a>
          <a href="#how">How It Works</a>
          <a href="#cases">Use Cases</a>
          <a href="#autonomy">Autonomy</a>
          <a href="#journey">Tour</a>
          <a href="#future">The Future</a>
        </nav>
        <a href="#future" className="nav-cta">
          Learn More
        </a>
      </div>
    </header>
  );
}
