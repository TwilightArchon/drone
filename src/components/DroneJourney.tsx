import { useEffect, useRef, useState } from "react";

type Stat = {
  value: string;
  title: string;
  detail: string;
  source: string;
};

const stats: Stat[] = [
  {
    value: "+90%",
    title: "Global drone adoption",
    detail:
      "Agricultural drone use has grown 90% since 2020, with roughly 400,000 DJI agricultural drones in operation worldwide by the end of 2024.",
    source: "DJI 2025 Industry Insight Report",
  },
  {
    value: "222M tons",
    title: "Water saved",
    detail:
      "Drone-assisted precision spraying has saved 222 million tons of water and cut 30.87 tons of CO₂ emissions to date.",
    source: "DJI 2025 report",
  },
  {
    value: "+20%",
    title: "Better yield predictions",
    detail:
      "Nearly 30% of agricultural drones now carry multispectral sensors, driving a 20% improvement in yield predictions.",
    source: "Industry research",
  },
  {
    value: "−18%",
    title: "Less pesticide used",
    detail:
      "Precision spraying with computer-vision drones has reduced pesticide usage by approximately 18% on average.",
    source: "Industry research",
  },
  {
    value: "+22%",
    title: "Smarter water use",
    detail:
      "Farmers implementing drones report water management efficiency improvements of nearly 22%.",
    source: "Industry research",
  },
  {
    value: "+15%",
    title: "Better batteries",
    detail:
      "Three years of LiPo improvements: 15% longer flight times, 12% fewer overheating issues, 10% lower price.",
    source: "Herewinpower",
  },
];

export default function DroneJourney() {
  const [index, setIndex] = useState(0);
  const total = stats.length;
  const finished = index >= total;

  const wrapRef = useRef<HTMLDivElement>(null);
  const droneRef = useRef<HTMLButtonElement>(null);

  // Auto-scroll the drone into view on narrow screens.
  useEffect(() => {
    const wrap = wrapRef.current;
    const drone = droneRef.current;
    if (!wrap || !drone) return;
    const target = drone.offsetLeft - wrap.clientWidth / 2 + drone.offsetWidth / 2;
    wrap.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
  }, [index]);

  const handleClick = () => {
    if (!finished) setIndex((i) => i + 1);
  };

  const reset = () => setIndex(0);

  // Position the drone at the center of the current stop column.
  // After the final reveal, the drone flies off the right edge.
  const dronePercent = finished
    ? 112
    : ((index + 0.5) / total) * 100;

  return (
    <section className="journey" id="journey">
      <div className="container">
        <span className="eyebrow">Interactive Drone Tour</span>
        <h2 className="section-title">
          Click the drone. Watch the data unfold.
        </h2>
        <p className="section-lead">
          Every click moves the drone one stop forward — and reveals a real
          number from the field. A quick tour of how computer-vision drones
          are reshaping farms today.
        </p>

        <div className="journey-progress">
          <span className="journey-count">
            <strong>{Math.min(index, total)}</strong> / {total} revealed
          </span>
          <div className="journey-progress-bar">
            <div
              className="journey-progress-fill"
              style={{ width: `${(Math.min(index, total) / total) * 100}%` }}
            />
          </div>
          <button
            type="button"
            className="btn-reset"
            onClick={reset}
            disabled={index === 0}
          >
            ↺ Reset
          </button>
        </div>
      </div>

      <div className="journey-track-wrap" ref={wrapRef}>
        <div className="journey-track">
          <span className="cloud c1" />
          <span className="cloud c2" />
          <span className="cloud c3" />
          <span className="cloud c4" />

          <div className="flight-path" />

          <div className="journey-stops">
            {stats.map((stat, i) => {
              const revealed = i < index;
              return (
                <div
                  key={i}
                  className={`stop ${revealed ? "revealed" : ""} ${
                    i === index ? "current" : ""
                  }`}
                >
                  <div className="stop-marker">
                    <span className="stop-number">{i + 1}</span>
                  </div>
                  <div className="stop-card" aria-hidden={!revealed}>
                    <div className="stop-value">{stat.value}</div>
                    <div className="stop-title">{stat.title}</div>
                    <div className="stop-detail">{stat.detail}</div>
                    <div className="stop-source">{stat.source}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            ref={droneRef}
            type="button"
            className={`drone-btn ${finished ? "finished" : ""}`}
            style={{ left: `${dronePercent}%` }}
            onClick={handleClick}
            disabled={finished}
            aria-label={
              finished ? "Drone tour complete" : "Click the drone to advance"
            }
          >
            <DroneSVG />
            {index === 0 && <span className="drone-tip">Click me!</span>}
          </button>
        </div>
      </div>
    </section>
  );
}

function DroneSVG() {
  return (
    <svg className="drone-svg" viewBox="0 0 120 120" aria-hidden="true">
      <line
        x1="22"
        y1="22"
        x2="98"
        y2="98"
        stroke="#0a0a0a"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <line
        x1="98"
        y1="22"
        x2="22"
        y2="98"
        stroke="#0a0a0a"
        strokeWidth="6"
        strokeLinecap="round"
      />

      <circle cx="22" cy="22" r="18" fill="rgba(76,175,80,0.2)" />
      <circle cx="98" cy="22" r="18" fill="rgba(76,175,80,0.2)" />
      <circle cx="22" cy="98" r="18" fill="rgba(76,175,80,0.2)" />
      <circle cx="98" cy="98" r="18" fill="rgba(76,175,80,0.2)" />

      {[
        { cx: 22, cy: 22 },
        { cx: 98, cy: 22 },
        { cx: 22, cy: 98 },
        { cx: 98, cy: 98 },
      ].map((p, i) => (
        <g key={i}>
          <line
            className="prop"
            x1={p.cx - 16}
            y1={p.cy}
            x2={p.cx + 16}
            y2={p.cy}
            stroke="#0a0a0a"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <line
            className="prop prop-b"
            x1={p.cx}
            y1={p.cy - 16}
            x2={p.cx}
            y2={p.cy + 16}
            stroke="#0a0a0a"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </g>
      ))}

      <circle cx="60" cy="60" r="18" fill="#0a0a0a" />
      <circle cx="60" cy="60" r="9" fill="#4caf50" />
      <circle cx="60" cy="60" r="3" fill="#c8e26a" />
    </svg>
  );
}
