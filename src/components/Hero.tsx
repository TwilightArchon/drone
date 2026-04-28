export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <span className="hero-eyebrow">
          <span className="dot" />
          The future of farming is in the sky
        </span>
        <h1>
          How Drones Are <span className="accent">Redefining</span>
          <br />
          Modern Farming
        </h1>
        <p>
          Computer vision is transforming agriculture — turning every flight
          into millions of decisions about water, weeds, disease, and yield. A
          smarter, lighter, and more sustainable way to feed the world.
        </p>
        <div className="hero-actions">
          <a href="#how" className="btn btn-primary">
            See how it works →
          </a>
          <a href="#impact" className="btn btn-ghost">
            View the impact
          </a>
        </div>
      </div>
      <div className="scroll-cue">Scroll</div>
    </section>
  );
}
