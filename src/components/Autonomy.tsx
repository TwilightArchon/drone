export default function Autonomy() {
  return (
    <section className="autonomy" id="autonomy">
      <div className="container">
        <span className="eyebrow">Navigation & Autonomous Drones</span>
        <h2 className="section-title">
          Drones that fly themselves — and know exactly where to look.
        </h2>
        <p className="section-lead">
          Computer vision doesn't only analyze crops; it also pilots the
          aircraft. Two technologies in particular let modern drones map and
          navigate complex farm terrain with no human at the controls.
        </p>

        <div className="autonomy-grid">
          <div className="autonomy-img" role="img" aria-label="Drone flying over field" />

          <div>
            <div className="autonomy-list">
              <div className="autonomy-item">
                <h4>
                  Hyperspectral imaging <span className="pill">SEEING MORE</span>
                </h4>
                <p>
                  Most cameras see red, green, and blue — but hyperspectral
                  cameras capture dozens of slices of light, including parts
                  invisible to the human eye. That extra detail makes it
                  possible to detect plant stress, water content, and soil
                  health from the air.
                </p>
              </div>
              <div className="autonomy-item">
                <h4>
                  Stereo-vision mapping <span className="pill">SEEING DEPTH</span>
                </h4>
                <p>
                  Two cameras side by side give a drone the same kind of depth
                  perception we get from two eyes. The drone builds a live 3D
                  map of the field, dodges obstacles, and follows the contour
                  of the terrain — even through crops that change every season.
                </p>
              </div>
              <div className="autonomy-item">
                <h4>
                  Real-time decision making <span className="pill">SEEING NOW</span>
                </h4>
                <p>
                  All of this data is processed onboard, in flight. The drone
                  decides, within milliseconds, where to spray, where to image
                  more closely, and where to go next — without waiting for a
                  remote operator.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
