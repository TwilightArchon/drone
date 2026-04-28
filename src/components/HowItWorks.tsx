const steps = [
  {
    n: "1",
    title: "Computer Vision",
    desc: "The drone's camera doesn't just take pictures — it interprets them. It picks out shapes, colors, and textures the same way our eyes do, but across an entire field in seconds.",
  },
  {
    n: "2",
    title: "Deep Learning",
    desc: "Software learns by example. After seeing thousands of healthy and unhealthy plants, the system gets better and better at telling them apart on its own.",
  },
  {
    n: "3",
    title: "Convolutional Neural Networks (CNNs)",
    desc: "A specialized kind of deep learning built for images. CNNs scan a photo in tiny patches, recognizing patterns — like a leaf spot or a weed — even when they're partially hidden.",
  },
];

export default function HowItWorks() {
  return (
    <section className="how" id="how">
      <div className="container">
        <span className="eyebrow">How It Works</span>
        <h2 className="section-title">
          Teaching a drone to see — and understand — a field.
        </h2>
        <p className="section-lead">
          Three simple ideas power agricultural drones today. Together they let
          a flying camera detect weeds, spot disease, and predict harvests with
          superhuman accuracy.
        </p>

        <div className="how-grid">
          <div className="how-steps">
            {steps.map((s) => (
              <div key={s.n} className="how-step">
                <div className="badge">{s.n}</div>
                <div>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="diagram" aria-label="How a drone interprets a field">
            <div className="diagram-flow">
              <div className="diagram-row">
                <div className="diagram-node">
                  <span className="label">Capture</span>
                  <div className="value">Drone camera</div>
                </div>
                <div className="diagram-arrow">→</div>
                <div className="diagram-node">
                  <span className="label">Process</span>
                  <div className="value">Computer vision</div>
                </div>
              </div>
              <div className="diagram-arrow" style={{ height: 16 }}>
                ↓
              </div>
              <div className="diagram-node highlight">
                <span className="label">Brain</span>
                <div className="value">Convolutional Neural Network</div>
              </div>
              <div className="diagram-arrow" style={{ height: 16 }}>
                ↓
              </div>
              <div className="diagram-outputs">
                <div className="diagram-out">
                  <div className="ico">🌿</div>
                  Weed detection
                </div>
                <div className="diagram-out">
                  <div className="ico">🍃</div>
                  Disease detection
                </div>
                <div className="diagram-out">
                  <div className="ico">📈</div>
                  Yield prediction
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
