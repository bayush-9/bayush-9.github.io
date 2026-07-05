import "./App.css";
import EducationTimeline from "./Components/EducationTimeline.jsx";
import SocialIcons from "./Components/SocialIcons";
import WorkEx from "./Components/WorkEx";
import workEx from "./constants/workEx.js";

function App() {
  return (
    <main className="portfolio-shell">
      <h1 className="h1">Ayush Anil Bharsakle</h1>
      <h2 className="h2">Software Developer</h2>
      <h3 className="bio">
        Results-driven Software Development Engineer with extensive experience
        in architecting full-stack and mobile solutions for the logistics
        sector. I specialize in solving complex optimization problems, utilizing
        Google OR-Tools and the Hungarian algorithm to resolve NP-hard PDPTW
        challenges. My expertise spans building high-performance FastAPI
        backends and cross-platform React Native applications, with a proven
        track record of improving API efficiency by 3x via K-Means++ clustering.
        From integrating Gemini-Flash for AI-driven data parsing to managing
        end-to-end CI/CD pipelines and IoT BLE modules, I focus on delivering
        scalable, compliant, and pixel-perfect software that drives operational
        excellence.
      </h3>
      <div style={{ height: 40 }} />
      <h2 className="h2">Technical Skills</h2>
      <div className="timeline-block">
        <div className="timeline-line"></div>
        <div className="timeline-content skill-list">
          <h3 className="h3">Languages</h3>
          <h4 className="h4">
            JavaScript, TypeScript, Python, C++, Swift, Dart
          </h4>
          <div style={{ height: 5 }} />
          <h3 className="h3">Frameworks</h3>
          <h4 className="h4">React Native, FastApi, SwiftUI, Flutter</h4>
          <div style={{ height: 5 }} />
          <h3 className="h3">Meta</h3>
          <h4 className="h4">
            Android Studio, XCode, Firebase, Git, Github, Bitrise CI/CD,
            Onesignal, Google Play Console, App store connect, Google OR Tools,
            Appium, BLE, IoT, Clickup, Cursor, Dbeaver
          </h4>

          <div style={{ height: 5 }} />
          <h3 className="h3">Others</h3>
          <h4 className="h4">
            Competitive Programming, Data Structures and Algorithms, Scrum
          </h4>
        </div>
      </div>

      <div style={{ height: 40 }} />

      <WorkEx workEx={workEx} />

      <EducationTimeline />

      <div className="social-row">
        {SocialIcons()}
      </div>
      <h6 className="footer-note">website designing is an art and I am an engineer 🐣 </h6>
      <h6 className="footer-note">made in house with ❤️ by Ayush Bharsakle</h6>
      <h6 className="copyright">© 2026 Ayush Anil Bharsakle</h6>
    </main>
  );
}

export default App;
