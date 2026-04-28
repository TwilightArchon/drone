import type { FC } from "react";

type Position = "left" | "right" | "bottom";

type Capability = {
  id: string;
  num: string;
  pill: string;
  title: string;
  detail: string;
  Icon: FC;
  position: Position;
};

const SpectrumIcon: FC = () => (
  <svg viewBox="0 0 64 64" className="cap-icon-svg" aria-hidden="true">
    <rect x="6" y="14" width="6" height="36" rx="3" fill="#7c3aed" />
    <rect x="14" y="14" width="6" height="36" rx="3" fill="#3b82f6" />
    <rect x="22" y="14" width="6" height="36" rx="3" fill="#10b981" />
    <rect x="30" y="14" width="6" height="36" rx="3" fill="#84cc16" />
    <rect x="38" y="14" width="6" height="36" rx="3" fill="#eab308" />
    <rect x="46" y="14" width="6" height="36" rx="3" fill="#f97316" />
    <rect x="54" y="14" width="6" height="36" rx="3" fill="#dc2626" />
  </svg>
);

const DepthIcon: FC = () => (
  <svg viewBox="0 0 64 64" className="cap-icon-svg" aria-hidden="true">
    <line
      x1="6"
      y1="12"
      x2="58"
      y2="6"
      stroke="#0a0a0a"
      strokeWidth="1.4"
      strokeDasharray="3 3"
      opacity="0.4"
    />
    <line
      x1="6"
      y1="52"
      x2="58"
      y2="58"
      stroke="#0a0a0a"
      strokeWidth="1.4"
      strokeDasharray="3 3"
      opacity="0.4"
    />
    <circle
      cx="22"
      cy="32"
      r="13"
      fill="white"
      stroke="#0a0a0a"
      strokeWidth="2.5"
    />
    <circle cx="22" cy="32" r="6" fill="#4caf50" />
    <circle cx="22" cy="32" r="2" fill="#0a0a0a" />
    <circle
      cx="42"
      cy="32"
      r="13"
      fill="white"
      stroke="#0a0a0a"
      strokeWidth="2.5"
    />
    <circle cx="42" cy="32" r="6" fill="#4caf50" />
    <circle cx="42" cy="32" r="2" fill="#0a0a0a" />
  </svg>
);

const BoltIcon: FC = () => (
  <svg viewBox="0 0 64 64" className="cap-icon-svg" aria-hidden="true">
    <path
      d="M32 4 L14 36 L26 36 L20 60 L50 24 L36 24 L42 4 Z"
      fill="#4caf50"
      stroke="#0a0a0a"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
  </svg>
);

const capabilities: Capability[] = [
  {
    id: "hyperspectral",
    num: "01",
    pill: "Seeing more",
    title: "Hyperspectral Imaging",
    detail:
      "Most cameras see only red, green, and blue. Hyperspectral cameras capture dozens of slices of light — including wavelengths invisible to the human eye — revealing plant stress, water content, and soil health from the air.",
    Icon: SpectrumIcon,
    position: "left",
  },
  {
    id: "stereo",
    num: "02",
    pill: "Seeing depth",
    title: "Stereo-Vision Mapping",
    detail:
      "Two cameras side by side give a drone the same depth perception we get from two eyes. It builds a live 3D map of the field, dodges obstacles, and follows the contour of the terrain.",
    Icon: DepthIcon,
    position: "right",
  },
  {
    id: "realtime",
    num: "03",
    pill: "Seeing now",
    title: "Real-time Decisions",
    detail:
      "All of this data is processed onboard, in flight. The drone decides — within milliseconds — where to spray, where to image more closely, and where to go next, without waiting for a remote operator.",
    Icon: BoltIcon,
    position: "bottom",
  },
];

function CentralStage() {
  return (
    <div className="auto-stage" aria-hidden="true">
      <span className="auto-ring r3" />
      <span className="auto-ring r2" />
      <span className="auto-ring r1" />

      <span className="auto-pin pin-left">01</span>
      <span className="auto-pin pin-right">02</span>
      <span className="auto-pin pin-bottom">03</span>

      <div className="auto-drone">
        <DroneSVG />
      </div>

      <span className="auto-coord top">N</span>
      <span className="auto-coord right">E</span>
      <span className="auto-coord bottom">S</span>
      <span className="auto-coord left">W</span>
    </div>
  );
}

function DroneSVG() {
  const rotors = [
    { cx: 22, cy: 22 },
    { cx: 98, cy: 22 },
    { cx: 22, cy: 98 },
    { cx: 98, cy: 98 },
  ];
  return (
    <svg viewBox="0 0 120 120" className="auto-drone-svg" aria-hidden="true">
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
      {rotors.map((p) => (
        <circle
          key={`d-${p.cx}-${p.cy}`}
          cx={p.cx}
          cy={p.cy}
          r="18"
          fill="rgba(76,175,80,0.2)"
        />
      ))}
      {rotors.map((p) => (
        <g key={`p-${p.cx}-${p.cy}`}>
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

export default function Autonomy() {
  return (
    <section className="autonomy" id="autonomy">
      <div className="container">
        <span className="eyebrow">Navigation & Autonomous Drones</span>
        <h2 className="section-title">
          Drones that fly themselves — and know exactly where to look.
        </h2>
        <p className="section-lead">
          Computer vision doesn't only analyze crops — it also pilots the
          aircraft. Three technologies work together to map and navigate
          complex farm terrain with no human at the controls.
        </p>

        <div className="auto-info">
          {capabilities.map((cap) => (
            <article
              key={cap.id}
              className={`cap-card cap-${cap.position}`}
            >
              <div className="cap-num">{cap.num}</div>
              <div className="cap-icon">
                <cap.Icon />
              </div>
              <span className="cap-pill">{cap.pill}</span>
              <h4>{cap.title}</h4>
              <p>{cap.detail}</p>
            </article>
          ))}

          <CentralStage />
        </div>
      </div>
    </section>
  );
}
