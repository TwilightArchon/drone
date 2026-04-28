export default function Footer() {
  return (
    <footer className="footer" id="sources">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand" style={{ color: "white" }}>
              <span className="brand-mark">A</span>
              AgriVision
            </div>
            <p>
              An educational overview of how computer vision and autonomous
              drones are reshaping modern agriculture for a more sustainable
              future.
            </p>
          </div>

          <div>
            <h4>Sources</h4>
            <ul className="sources">
              <li>
                Shah, P., et al. (2025). <em>Convolutional Neural Networks for
                Early Crop Disease Detection in Aerial Imagery</em>. Reported
                95% accuracy in disease classification across multiple crop
                types.
              </li>
              <li>
                Industry reports on precision-spraying drone systems
                demonstrating targeted application of herbicide and water based
                on real-time computer-vision analysis.
              </li>
              <li>
                Field deployments showing autonomous aerial scouting replacing
                manual inspection across thousands of acres of cropland.
              </li>
              <li>
                Studies on contactless computer-vision livestock monitoring and
                its role in early detection of animal health issues, reducing
                production losses on commercial farms.
              </li>
              <li>
                Research on hyperspectral imaging and stereo-vision-based
                navigation in unmanned aerial vehicles for agricultural
                mapping and obstacle avoidance.
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} AgriVision — Educational project.</span>
          <span>Imagery from Unsplash. Built with React + TypeScript.</span>
        </div>
      </div>
    </footer>
  );
}
