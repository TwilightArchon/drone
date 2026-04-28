const cases = [
  {
    tag: "Crop Health",
    title: "Disease detection with CNNs",
    desc: "Convolutional neural networks scan leaves for the telltale spots, discoloration, and texture changes of disease — flagging outbreaks days or weeks before a human would notice them.",
    img: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1400&q=80",
  },
  {
    tag: "Precision Spraying",
    title: "Weed detection via deep learning",
    desc: "Drones distinguish crops from weeds in real time. Instead of blanket-spraying an entire field, herbicide goes only on the weeds — saving chemicals, money, and the surrounding ecosystem.",
    img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1400&q=80",
  },
  {
    tag: "Livestock",
    title: "Contactless livestock monitoring",
    desc: "Vision systems track how animals move, eat, and behave — spotting illness or injury without touching them. Farmers get an early warning before a problem turns into a production loss.",
    img: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function UseCases() {
  return (
    <section className="cases" id="cases">
      <div className="container">
        <span className="eyebrow">Real-World Use Cases</span>
        <h2 className="section-title">
          Already running on farms — today, not tomorrow.
        </h2>
        <p className="section-lead">
          Three of the most mature applications of computer-vision drones in
          modern agriculture.
        </p>

        <div className="case-grid">
          {cases.map((c) => (
            <article key={c.title} className="case">
              <div
                className="case-img"
                style={{ backgroundImage: `url(${c.img})` }}
                role="img"
                aria-label={c.title}
              />
              <div className="case-body">
                <span className="case-tag">{c.tag}</span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
