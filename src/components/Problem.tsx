const problems = [
  {
    num: "01",
    title: "Labor shortages",
    desc: "Farms worldwide are struggling to find workers for time-sensitive tasks like scouting fields, identifying disease, and applying treatments — all of which need to happen within narrow windows.",
  },
  {
    num: "02",
    title: "Crop disease & pests",
    desc: "By the time a problem is visible to the human eye, it has often already spread. Manual inspection across thousands of acres simply can't catch outbreaks early enough.",
  },
  {
    num: "03",
    title: "Resource waste",
    desc: "Traditional agriculture treats whole fields uniformly — spraying water, fertilizer, and herbicides everywhere even when only a small portion of the field actually needs them.",
  },
];

export default function Problem() {
  return (
    <section className="problem" id="problem">
      <div className="container">
        <span className="eyebrow">The Problem</span>
        <h2 className="section-title">
          Modern farming is being asked to do more with less.
        </h2>
        <p className="section-lead">
          Growers are under pressure to produce more food, on the same land,
          with fewer workers — and to do it more sustainably than ever before.
        </p>

        <div className="problem-grid">
          {problems.map((p) => (
            <div key={p.num} className="problem-card">
              <div className="num">{p.num}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
